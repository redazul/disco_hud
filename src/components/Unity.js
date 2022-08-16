import React, { Component } from 'react';

class Unity extends Component {
    componentDidMount()
    {

        console.log(this.state)
        window.addEventListener("load", function () {
            if ("serviceWorker" in navigator) {
              navigator.serviceWorker.register("ServiceWorker.js");
            }
          });
    
          //var container = document.querySelector("#unity-container");
          var canvas = document.querySelector("#unity-canvas");
          var loadingBar = document.querySelector("#unity-loading-bar");
          var progressBarFull = document.querySelector("#unity-progress-bar-full");
          var warningBanner = document.querySelector("#unity-warning");
    
          // Shows a temporary message banner/ribbon for a few seconds, or
          // a permanent error message on top of the canvas if type=='error'.
          // If type=='warning', a yellow highlight color is used.
          // Modify or remove this function to customize the visually presented
          // way that non-critical warnings and error messages are presented to the
          // user.
          function unityShowBanner(msg, type) {
            function updateBannerVisibility() {
              warningBanner.style.display = warningBanner.children.length ? 'block' : 'none';
            }
            var div = document.createElement('div');
            div.innerHTML = msg;
            warningBanner.appendChild(div);
            if (type === 'error') div.style = 'background: red; padding: 10px;';
            else {
              if (type === 'warning') div.style = 'background: yellow; padding: 10px;';
              setTimeout(function() {
                warningBanner.removeChild(div);
                updateBannerVisibility();
              }, 5000);
            }
            updateBannerVisibility();
          }
    
          var buildUrl = "Build";
          var loaderUrl = buildUrl + "/webClient.loader.js";
          var config = {
            dataUrl: buildUrl + "/webClient.data.unityweb",
            frameworkUrl: buildUrl + "/webClient.framework.js.unityweb",
            codeUrl: buildUrl + "/webClient.wasm.unityweb",
            streamingAssetsUrl: "StreamingAssets",
            companyName: "DefaultCompany",
            productName: "discosea_v20",
            productVersion: "4.0.0",
            showBanner: unityShowBanner,
          };
    
          // By default Unity keeps WebGL canvas render target size matched with
          // the DOM size of the canvas element (scaled by window.devicePixelRatio)
          // Set this to false if you want to decouple this synchronization from
          // happening inside the engine, and you would instead like to size up
          // the canvas DOM size and WebGL render target sizes yourself.
          // config.matchWebGLToCanvasSize = false;
    
          if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
            // Mobile device style: fill the whole browser client area with the game canvas:
            var meta = document.createElement('meta');
            meta.name = 'viewport';
            meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
            document.getElementsByTagName('head')[0].appendChild(meta);
          }
    
          loadingBar.style.display = "block";
    
          var script = document.createElement("script");
          script.src = loaderUrl;
          script.onload = () => {
            window.createUnityInstance(canvas, config, (progress) => {
              progressBarFull.style.width = 100 * progress + "%";
            }).then((unityInstance) => {
                console.log(unityInstance);
                console.log(this.props.dsUser);
                setTimeout(function() {
                  window.document.getElementById("loading").remove()
                  window.document.getElementById("logo").remove()
                  window.document.getElementById("unity-container").style.visibility = "visible"
                }, 2000);
                unityInstance.SendMessage('jsBridge', 'messageFromBrowserUser', `${this.props.dsUser.username};${this.props.dsUser.avatar};${this.props.dsUser.id}`);
              loadingBar.style.display = "none";
            }).catch((message) => {
              alert(message);
            });
          };
          document.body.appendChild(script);
    }
    render() {

      
        return (
          <div>

<div id="logo" style={{display:'flex',justifyContent:'center',alignItems:'center'}}> 
          <img src="https://media.discordapp.net/attachments/1005544801921417377/1005545176439205968/disco_sea_white.png?width=676&height=676" alt="DiscoSea"></img>
   </div>


   <div id="loading" style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'-250px'}}> 
          <img src="https://cdn.discordapp.com/attachments/1005544801921417377/1005616538126143548/loadingv2.gif" alt="loading"></img>
   </div>
            <div style={{visibility: "hidden"}} id="unity-container">
              

            <canvas id="unity-canvas" ></canvas>
            <div id="unity-loading-bar">
              <div id="unity-logo"></div>
              <div id="unity-progress-bar-empty">
                <div id="unity-progress-bar-full"></div>
              </div>
            </div>
            <div id="unity-warning"> </div>
          </div>




          </div>

        );
    }
}

export default Unity;