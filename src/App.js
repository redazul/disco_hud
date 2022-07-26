import React from "react";
import LeftNav from "./components/LeftNav";
import TopNav from "./components/TopNav";
import YtLogo from "./assets/ytLogo.svg";





function App() {



  function showVideo()
  {
    console.log("show video")
  }



  return (
    <div className="App">
      <TopNav />
      <LeftNav />
      
      <div className="videoSect" >

        <iframe
          width="480"
          height="315"
          src="https://www.youtube.com/embed/9sE138cu_LU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

      <div className="musicPlayer" >
        <a href="https://www.youtube.com/embed/9sE138cu_LU">
          <img className="ytIcon" src={YtLogo} alt="yt Logo" />
        </a>
        <h3 className="channelName">Fever 05</h3>
        <div className="videoCtrl">
          <i
            class="fa-solid fa-backward-step"
            onClick={console.log("previous video")}
          ></i>
          <i class="fa-solid fa-play" onClick={console.log("play video")}></i>
          <i
            class="fa-solid fa-forward-step"
            onClick={console.log("next video")}
          ></i>
        </div>
        <i
          class="fa-solid fa-angle-up"
          onClick={showVideo}
        ></i>
      </div>
    </div>

    </div>
  );
    

}

export default App;
