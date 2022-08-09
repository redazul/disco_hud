import React from "react";
import NFTImg from "../assets/NFT.png";

export default function MobileCont() {
  return (
    <div className="mobileCont">
      <div className="topNavMob">
        <i class="fa-solid fa-angle-left"></i>
        <p className="pageTitle">Get Discotokens</p>
        <img className="avatarImg" src={NFTImg} alt="Avatar" />
      </div>

      <div className="imageDiv">
        <img className="nftImage" src={NFTImg} alt="NFT" />
        <span className="price">2 Sol</span>
      </div>

      <div className="totalMinted">
        <h3 className="totalMintedText">
          Total Minted : <span className="toalMintedQuantity">1/3</span>
        </h3>
        <div className="totalMintedBar">
          <div className="totalMintedBarActive"></div>
        </div>
      </div>

      <button className="mintButton">
        Mint <i class="fa-solid fa-angle-right"></i>
      </button>

      <h2 className="mintTokens">
        <span className="availableMintTokens">5 WL </span>
        Mint tokens owned
      </h2>
    </div>
  );
}
