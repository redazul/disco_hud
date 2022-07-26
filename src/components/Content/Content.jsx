import React, { useState } from "react";
import Video from "./Video";
import LogoImg from "../../assets/logo.png";
import gameBg from "../../assets/game.png";

export default function Content() {
  const [isAuth, setAuth] = useState(true);

  function authorize() {
    isAuth ? setAuth(true) : setAuth(true);
  }

  return isAuth ? (
    <div className="content">
      <Video />
    </div>
  ) : (
    <div className="content">

      <button className="discordConnect" onClick={authorize}>
        <i className="fa-brands fa-discord"></i>
        <p className="discordText">Authorize Discord</p>
      </button>
    </div>
  );
}
