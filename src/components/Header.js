import React, { useEffect, useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Typed from "typed.js";
export default function Header({ onBuyButtonClicked }) {
  const text = useRef(null);
  const typed = useRef(null);
  useEffect(() => {
    resetTyped();
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
            <a
              href="https://ooz1es.io"
              id="oz"
              target="_blank"
              rel="noreferrer"
            >
              OOZ1ES
            </a>{" "}
            brings Ü
          </h1>
          <div style={{ padding: "0 8px" }}>
            <StaticImage
              src="../images/space_babez_logo.png"
              imgClassName="logo"
              style={{ maxWidth: 700 }}
              alt="BABEZ Logo"
              placeholder="blurred"
            />
          </div>
          <h1 className="slogan">
            If you're gonna be hot, you might as well be hot in space...
          </h1>
          <StaticImage
            src={`../images/ft/0.png`}
            imgClassName="babez"
            alt="BABEZ 0"
            loading="eager"
            placeholder="blurred"
          />
          <button className="buyNow backdrop" onClick={onBuyButtonClicked}>
            {" "}
          </button>
          <h1 aria-hidden="true" ref={text} />
        </div>
      </div>
    </div>
  );
}
