import React, { useState, useRef } from "react";
import YtLogo from "../../assets/ytLogo.svg";

export default function VideoPlayer() {
  const [isVisible, setVisible] = useState(false);
  const expandArrow = useRef();

  function showVideo() {
    isVisible ? setVisible(false) : setVisible(true);
    isVisible
      ? expandArrow.current.classList.add("arrowOpen")
      : expandArrow.current.classList.remove("arrowOpen");
  }

  return (
    <div className="videoSect" style={{right:0}}>

        <iframe
          width="480"
          height="315"
          src="https://www.youtube.com/embed/9sE138cu_LU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

      <div className="musicPlayer">
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
          ref={expandArrow}
          onClick={showVideo}
        ></i>
      </div>
    </div>
  );
}
