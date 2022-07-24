import React from "react";
import ServersIcon from "./Servers/ServersIcon";
import servers from "../data/servers";

export default function LeftNav() {
  return (
    <div className="leftNav">
      <p className="brandName">DiscoSea</p>
      <div className="serverIconCont">
        {servers.map((serverIcon) => (
          <ServersIcon />
        ))}
      </div>
    </div>
  );
}
