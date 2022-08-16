import React from "react";
import TopServerIcon from "./Servers/TopServerIcon";
import topServer from "../data/topServer";

export default function TopNav() {
  return (
    <div className="topNav">
      <div className="topServerIconCont">
        {topServer.map((topServerIcon) => (
          <TopServerIcon />
        ))}
      </div>

      <button style={{marginRight:-30}} className="walletBtn">Connect Wallet</button>
    </div>
  );
}
