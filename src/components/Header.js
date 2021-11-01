import React, { useEffect, useState, useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Typed from "typed.js";
export default function Header({ onBuyButtonClicked }) {
  const [ft, setFt] = useState(1);
  const text = useRef(null);
  const typed = useRef(null);
  useEffect(() => {
    setFt(Math.round(Math.random() * 15));
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
            <a href="https://ooz1es.io" target="_blank" rel="noreferrer">
              OOZ1ES
            </a>{" "}
            brings Ü
          </h1>
          <div style={{ padding: "0 8px" }}>
            <StaticImage
              src="../images/space_babez_logo.png"
              style={{ maxWidth: 700 }}
              alt="BABEZ Logo"
            />
          </div>
          <h1 className="slogan">
            If you're gonna be hot, you might as well be hot in space...
          </h1>
          {ft === 1 && (
            <StaticImage
              src={`../images/ft/1.png`}
              imgClassName="babez"
              alt="BABEZ 1"
            />
          )}
          {ft === 2 && (
            <StaticImage
              src={`../images/ft/2.png`}
              imgClassName="babez"
              alt="BABEZ 2"
            />
          )}
          {ft === 3 && (
            <StaticImage
              src={`../images/ft/3.png`}
              imgClassName="babez"
              alt="BABEZ 3"
            />
          )}
          {ft === 4 && (
            <StaticImage
              src={`../images/ft/4.png`}
              imgClassName="babez"
              alt="BABEZ 4"
            />
          )}
          {ft === 5 && (
            <StaticImage
              src={`../images/ft/5.png`}
              imgClassName="babez"
              alt="BABEZ 5"
            />
          )}
          {ft === 6 && (
            <StaticImage
              src={`../images/ft/6.png`}
              imgClassName="babez"
              alt="BABEZ 6"
            />
          )}
          {ft === 7 && (
            <StaticImage
              src={`../images/ft/7.png`}
              imgClassName="babez"
              alt="BABEZ 7"
            />
          )}
          {ft === 8 && (
            <StaticImage
              src={`../images/ft/8.png`}
              imgClassName="babez"
              alt="BABEZ 8"
            />
          )}
          {ft === 9 && (
            <StaticImage
              src={`../images/ft/9.png`}
              imgClassName="babez"
              alt="BABEZ 9"
            />
          )}
          {ft === 10 && (
            <StaticImage
              src={`../images/ft/10.png`}
              imgClassName="babez"
              alt="BABEZ 10"
            />
          )}
          {ft === 11 && (
            <StaticImage
              src={`../images/ft/11.png`}
              imgClassName="babez"
              alt="BABEZ 11"
            />
          )}
          {ft === 12 && (
            <StaticImage
              src={`../images/ft/12.png`}
              imgClassName="babez"
              alt="BABEZ 12"
            />
          )}
          {ft === 13 && (
            <StaticImage
              src={`../images/ft/13.png`}
              imgClassName="babez"
              alt="BABEZ 13"
            />
          )}
          {ft === 14 && (
            <StaticImage
              src={`../images/ft/14.png`}
              imgClassName="babez"
              alt="BABEZ 14"
            />
          )}
          {ft === 15 && (
            <StaticImage
              src={`../images/ft/15.png`}
              imgClassName="babez"
              alt="BABEZ 15"
            />
          )}
          {ft === 16 && (
            <StaticImage
              src={`../images/ft/16.png`}
              imgClassName="babez"
              alt="BABEZ 16"
            />
          )}

          <button className="buyNow backdrop" onClick={onBuyButtonClicked}>
            {" "}
          </button>
          <h1 aria-hidden="true" ref={text} />
        </div>
      </div>
    </div>
  );
}
