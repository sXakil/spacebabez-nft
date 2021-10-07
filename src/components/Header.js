import React, { useEffect, useState } from "react";
import logo from "../images/space_babez_logo.png";

export default function Header({ onBuyButtonClicked }) {
  const [ft, setFt] = useState(0);
  const [timer, setTimer] = useState("00:00:00");
  useEffect(() => {
    setFt(Math.floor(Math.random() * 14 + 1));
    const countTo = new Date("Oct 8, 2021 11:59:59").getTime();
    const interval = setInterval(() => {
      const distance = countTo - new Date().getTime();
      setTimer(
        `${Math.floor(distance / 3600000)
          .toString()
          .padStart(2, 0)}:${Math.floor((distance % 3600000) / 60000)
          .toString()
          .padStart(2, 0)}:${Math.floor((distance % 60000) / 1000)
          .toString()
          .padStart(2, 0)}`
      );
      if (distance < 0) clearInterval(interval);
    }, 1000);
    return () => clearInterval(interval);
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
            If you're gonna be hot, you might as well be hot in space...
          </h1>
          <img src={`/ft/${ft || 0}.png`} className="babez" alt="BABEZ 5" />
          <button
            className="buyNow backdrop"
            style={{ display: "none" }}
            onClick={onBuyButtonClicked}
          >
            {" "}
          </button>
          <span className="label">Sale starts in</span>
          <span className="time">{timer}</span>
          <h1>
            <span className="pink">9,999</span> crypto collectibles on the
            Cardano blockchain
          </h1>
        </div>
      </div>
    </div>
  );
}
