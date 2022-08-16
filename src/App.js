import React, { Component } from 'react';
import './App.css'
import Unity from './components/Unity';
import LeftNav from "./components/LeftNav";
import TopNav from "./components/TopNav";

import YtLogo from "./assets/ytLogo.svg";




class App extends Component {

  state ={
    loading: false,
    auth:false,
    dsUser:null
  }

  loadUnity()
  {


  }



  componentDidMount()
  {




    

    console.log("load init")

    var dsUser =  JSON.parse(localStorage.getItem('dsUser'))
    //console.log(dsUser)


    //no userdata go auth
    if(dsUser==null)
    {
      console.log("no auth")
      var tokenOn = window.location.hash.includes("token")

      if(tokenOn)
      {
        this.setState({loading:true,auth:true})
        var token= window.location.hash.split("&")[1].split("=")[1]
        this.goXHR(token)
  
      }
    }
    //user is here load unity
    else{
      
      this.setState({loading:false,auth:true,dsUser:{"id":dsUser.id,"username":dsUser.username,"avatar":dsUser.avatar}},()=>{
        console.log(this.state.dsUser);
      })
      console.log("loading unity")
      this.loadUnity()

    }


  }

  signOut()
  {
    localStorage.clear('dsUser');
    window.location.reload()
  }

  goXHR(token)
  {

    // WARNING: For GET requests, body is set to null by browsers.

      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
          console.log(JSON.parse(this.responseText));
          var res = JSON.parse(this.responseText);
          var dsUser =  {"id":res.id,"username":res.username,"avatar":res.avatar}
          console.log(dsUser)
          localStorage.setItem('dsUser', JSON.stringify(dsUser));
          window.open("http://localhost:3000","_self")
        }
      });

      xhr.open("GET", "https://discord.com/api/v9/users/@me");
      xhr.setRequestHeader("Authorization", `Bearer ${token}`);

      xhr.send();

  }

  previousVideo() {
    console.log("Previous Video");
  }

  playVideo() {
    console.log("Play Video");
  }

  nextVideo() {
    console.log("Next Video");
  }

  showVideo()
  {
    console.log("show video")
    console.log(document.getElementById("myP").style.visibility)
    console.log(document.getElementById("myP").style.visibility)
    if(document.getElementById("myP").style.visibility === "hidden")
    {
      document.getElementById("myP").style.visibility = "visible";
    }else{
      document.getElementById("myP").style.visibility = "hidden";
    }
    
    console.log("wtf")
  }


  goAuth()
  {
    window.open("https://discord.com/api/oauth2/authorize?response_type=token&client_id=993206789694832660&scope=identify%20guilds.join","_blank")
  }


  render() {

    if(this.state.loading===true)
    {
      return(

        <div>


        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}> 
              <img src="https://media.discordapp.net/attachments/1005544801921417377/1005545176439205968/disco_sea_white.png?width=676&height=676" alt="DiscoSea"></img>
       </div>
  
    
       <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'-250px'}}> 
              <img src="https://cdn.discordapp.com/attachments/1005544801921417377/1005616538126143548/loadingv2.gif" alt="loading"></img>
       </div>
  
                
  
  
  
  </div>


      )
    }

    if(this.state.auth===false)
    {
      return (
        <div>
  
  
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}> 
                      <img src="https://media.discordapp.net/attachments/1005544801921417377/1005545176439205968/disco_sea_white.png?width=676&height=676" alt="DiscoSea"></img>
                    </div>
  
                  <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:"-50px"}}> 
                      <button onClick={this.goAuth} style={{width:"380px",height:"60px",marginTop:"-50px",fontSize:"20px"}} className='glow'>Authenticate Discord</button>
                  </div>
  

  
  
        </div>
  
    
      );

    }else{

      return(

        <div>

          <div style={{position:"relative",zIndex:3000}}>

          <TopNav />
          <LeftNav />




    </div>


            
              <Unity dsUser={this.state.dsUser} />


              <div className="videoSect"  >
      <iframe
        id="myP"
        width="480"
        height="315"
        src="https://www.youtube.com/embed/9sE138cu_LU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div></div>
      <div className="musicPlayer">
        
          <img className="ytIcon" src={YtLogo} alt="yt Logo" />
     
        <h3 className="channelName">Fever 05</h3>
        <div className="videoCtrl">
          <i className="fa-solid fa-backward-step" onClick={this.previousVideo}></i>
          <i className="fa-solid fa-play" onClick={this.playVideo}></i>
          <i className="fa-solid fa-forward-step" onClick={this.nextVideo}></i>
        </div>
        <i
          className="fa-solid fa-angle-down"
          onClick={this.showVideo}
        ></i>
      </div>
    </div>
        </div>



      )
        


    }

  }
}

export default App;