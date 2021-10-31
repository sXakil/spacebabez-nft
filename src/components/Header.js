import React, { useEffect, useState, useRef } from "react";
import Typed from "typed.js";
import logo from "../images/space_babez_logo.png";

export default function Header({ onBuyButtonClicked }) {
  const [ft, setFt] = useState(0);
  const text = useRef(null);
  const typed = useRef(null);
  useEffect(() => {
    setFt(Math.floor(Math.random() * 14 + 1));
    return () => {
      typed.current?.destroy();
    };
  }, []);
  function resetTyped() {
    typed.current = new Typed(text.current, {
      strings: [
        "9,999 crypto",
        '<span class="pink">6,666</span> crypto collectibles on the Cardano blockchain',
      ],
      typeSpeed: 85,
      backSpeed: 45,
      backDelay: 50,
      showCursor: false,
    });
  }
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
          <img
            src={`/ft/${ft || 0}.png`}
            className="babez"
            alt="BABEZ 5"
            onLoad={resetTyped}
          />
          <button className="buyNow backdrop" onClick={onBuyButtonClicked}>
            {" "}
          </button>
        </div>
      </div>
    </div>
  );
}
