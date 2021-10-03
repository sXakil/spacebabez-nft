import React, { useEffect, useState } from "react";
import logo from "../images/space_babez_logo.png";

export default function Header({ onBuyButtonClicked }) {
  const [ft, setFt] = useState(0);
  useEffect(() => {
    setFt(Math.floor(Math.random() * 14 + 1));
  }, []);
  return (
    <div className="main-header">
      <div className="header-container">
        <div className="header-middle">
          <h1 className="prime">
            From the creators of{" "}
            <a href="https://ooz1es.io" target="_blank" rel="noreferrer">
              OOZ1ES
            </a>{" "}
            brings Ü
          </h1>
          <img src={logo} className="logo" alt="BABEZ Logo" />
          <h1 className="slogan">
            These Babez have been in Space way too long...
          </h1>
          <img
            src={`/ft/space_babez_${ft || 0}.png`}
            className="babez"
            alt="BABEZ 5"
          />
          <button className="buyNow backdrop" onClick={onBuyButtonClicked}>
            {" "}
          </button>
          <h1>
            <span className="pink">9,999</span> crypto collectibles on the
            Cardano blockchain
          </h1>
        </div>
      </div>
    </div>
  );
}
