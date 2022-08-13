import React from "react";
import { Embed } from "semantic-ui-react";

export default function About() {
  return (
    <>
      <h1 className="section-header">About</h1>
      <p className="details">
        Space Babez were created to live forever on the Cardano Blockchain.
        There is a total of
        <span className="pink"> 6,666 </span>unique Space Babez randomly
        generated for you to collect. No two Space Babez are alike, each one was
        generated from a selection of
        <span className="pink"> 259 </span>variations in
        <span className="pink"> 16 </span>different rarity categories which
        includes <span className="pink"> 2,142 </span> different types of
        <span className="blue"> #boobz</span>
      </p>
      <Embed
        placeholder="https://img.youtube.com/vi/BloWNkomtTc/maxresdefault.jpg"
        url="https://www.youtube.com/embed/videoseries?list=PLlfetFJqRVHF_yMQhH5k_x8n27tsupYDU"
      />
      <a
        href="https://cardanoscan.io/tokenPolicy/3691ce00d8a2bd035a85d77e5428e34da58de9acbeedeee8256b8175"
        target="_blank"
        rel="noreferrer"
        className="policy"
      >
        <strong>Policy ID</strong>
        <p>3691ce00d8a2bd035a85d77e5428e34da58de9acbeedeee8256b8175</p>
      </a>
      <p className="details highlight">
        If you like the stuff{" "}
        <a href="https://anti.biz" target="_blank" rel="noreferrer">
          Anti.biz
        </a>{" "}
        creates consider staking with our stake pool @{" "}
        <a href="https://www.anti.biz/cardano" target="_blank" rel="noreferrer">
          www.anti.biz/cardano
        </a>{" "}
        we will always be a single pool &amp; we donate to good causes as well!~
      </p>
    </>
  );
}
