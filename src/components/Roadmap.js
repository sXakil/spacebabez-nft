import React, { useEffect, useState } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

const data = [
  [
    "Develop Space Babez website, add rarity chart & searchable filters.",
    "Build Space Babez community",
    "Launch sale",
  ],
  ["Add Space Babez to Anti.biz lore", "Increase marketing & promotion"],
  [
    "Airdrop Series #1 3D digital toy to 30 random Space Babez holders as a unique limited edition NFT. Max supply 30. (anyone that purchases package of 10 will automatically be entered.)",
    'Hire <a href="https://www.instagram.com/eliza.Osmo/" target="_blank" _blank" rel="noreferrer">@eliza.Osmo</a> to create 1 of a kind T-shirt design featuring Space Babez.',
    '<a href="https://cnft.tools/" target="_blank" _blank" rel="noreferrer">CNFT.tools</a> listing',
  ],
  [
    "Hire artist to draw issue #1 of Space Babez comicbook. Print 1,000-2,000 copies, put digital copy of comicbook on website as a free digital download.",
  ],
  [
    "Airdrop Series #2 3D digital toy to 30 random Space Babez holders as a unique limited edition NFT. Max supply 30. (anyone that purchases package of 10 will automatically be entered.)",
  ],
  [
    "Airdrop Series #3 3D digital toy to 30 random Space Babez holders as a unique limited edition NFT. Max supply 30. (anyone that purchases package of 10 will automatically be entered.)",
  ],
  ["Issue #2 Space Babez comicbook created"],
  [
    "Airdrop Series #4 3D digital toy to 30 random Space Babez holders as a unique limited edition NFT. Max supply 30. (anyone that purchases package of 10 will automatically be entered.)",
  ],
  [
    "Airdrop Series #5 3D digital toy to 30 random Space Babez holders as a unique limited edition NFT. Max supply 30. (anyone that purchases package of 10 will automatically be entered.)",
  ],
  [
    "Airdrop Series #6 3D digital toy to 30 random Space Babez holders as a unique limited edition NFT. Max supply 30. (anyone that purchases package of 10 will automatically be entered.)",
  ],
  [
    "Space Babez real life toy made. (Community will vote on which Space Babez to have made). Limited run edition.",
    "Issue #3 Space Babez comicbook created.",
    "Smart Contract marketplace created",
  ],
];

const valData = [96, 92, 84, 75, 67, 58, 50, 41, 33, 16];

let splide = null;

export default function Roadmap() {
  const [range, setRange] = useState(2);
  const [img, setImg] = useState(2);
  function initSplide() {
    splide = new Splide(".splide", {
      start: 2,
      arrows: false,
      direction: "ttb",
      height: 600,
      heightRatio: 0.33,
      pagination: false,
      perPage: 3,
      focus: 0,
      keyboard: false,
      trimSpace: false,
      easing: "cubic-bezier(.69,.04,.32,.97)",
    });
    splide.mount();
    splide.on("moved", function () {
      setImg(splide.index);
      setTimeout(() => {
        setRange(valData[splide.index]);
      }, 300);
    });
  }
  useEffect(() => {
    initSplide();
  }, []);
  function handleChange(e) {
    const v = e.target.value;
    let val;
    if (v >= 96) {
      val = 10;
    } else if (v >= 92) {
      val = 9;
    } else if (v >= 84) {
      val = 8;
    } else if (v >= 75) {
      val = 7;
    } else if (v >= 67) {
      val = 6;
    } else if (v >= 58) {
      val = 5;
    } else if (v >= 50) {
      val = 4;
    } else if (v >= 41) {
      val = 3;
    } else if (v >= 33) {
      val = 2;
    } else if (v >= 16) {
      val = 1;
    } else {
      val = 0;
    }
    if (splide) {
      splide.go(val);
    }
  }
  function goTo(idx) {
    if (splide) {
      setImg(idx);
      setRange(valData[idx]);
      splide.go(idx);
    } else {
      initSplide();
    }
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", marginTop: 20 }}>
      <h1 className="section-header">Roadmap</h1>
      <div className="roadmap-container">
        <div className="thermometer-container">
          <img
            src={`/ft/thermometer_${img}.png`}
            alt="thermometer"
            className="thermometer"
          />
          <input
            type="range"
            min={0}
            max={100}
            step={1}
            value={range}
            onChange={handleChange}
          />
        </div>
        <div className="splide text-container">
          <div className="splide__track">
            <div className="splide__list">
              {data.map((d, i) => (
                <div
                  key={i}
                  className="splide__slide"
                  aria-hidden="true"
                  onClick={() => goTo(i)}
                  onKeyDown={() => goTo(i)}
                >
                  {d.map((item, idx) => (
                    <div key={idx}>
                      <span
                        style={{ marginBottom: 10, fontSize: 16 }}
                        role="img"
                      >
                        {"🚀"}
                      </span>{" "}
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
