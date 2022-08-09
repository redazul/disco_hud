import React, { useState, useRef } from "react";
import YtLogo from "../../assets/ytLogo.svg";

export default function VideoPlayer() {
  const [isVisible, setVisible] = useState(false);
  const expandArrow = useRef();
  const ytCont = useRef();

  function showVideo() {
    isVisible ? setVisible(false) : setVisible(true);
    isVisible
      ? expandArrow.current.classList.add("arrowOpen")
      : expandArrow.current.classList.remove("arrowOpen");
    isVisible
      ? ytCont.current.classList.add("yt-div-vis")
      : ytCont.current.classList.remove("yt-div-vis");
  }

  function previousVideo() {
    console.log("Previous Video");
  }

  function playVideo() {
    console.log("Play Video");
  }

  function nextVideo() {
    console.log("Next Video");
  }

  return (
    <div className="videoSect">
      <iframe
        width="480"
        height="315"
        src="https://www.youtube.com/embed/9sE138cu_LU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        ref={ytCont}
      ></iframe>
      <div></div>
      <div className="musicPlayer">
        <a href="https://www.youtube.com/watch?v=9sE138cu_LU" target="_blank">
          <img className="ytIcon" src={YtLogo} alt="yt Logo" />
        </a>
        <h3 className="channelName">Fever 05</h3>
        <div className="videoCtrl">
          <i className="fa-solid fa-backward-step" onClick={previousVideo}></i>
          <i className="fa-solid fa-play" onClick={playVideo}></i>
          <i className="fa-solid fa-forward-step" onClick={nextVideo}></i>
        </div>
        <i
          className="fa-solid fa-angle-down"
          ref={expandArrow}
          onClick={showVideo}
        ></i>
      </div>
    </div>
  );
}
