import "@splidejs/splide/dist/css/splide.min.css";

import Splide from "@splidejs/splide";
import React, { useEffect, useState } from "react";

const data = [
  [
    "Develop Space Babez website, add rarity chart & searchable filters.",
    "Build Space Babez community",
    "Launch sale",
  ],
  ["Add Space Babez to Anti.biz lore", "Increase marketing & promotion"],
  [
    "3D Space Babez Toy #1 unique limited edition NFT on the same policy as the pixel Space Babez. Max Supply 100.",
    '<a href="https://cnft.tools/" target="_blank" _blank" rel="noreferrer">CNFT.tools</a> listing',
  ],
  [
    "Hire artist to draw issue #1 of Space Babez comicbook. Print 1,000-2,000 copies, put digital copy of comicbook on website as a free digital download.",
  ],
  [
    "3D Space Babez Toy #2 unique limited edition NFT on the same policy as the pixel Space Babez. Max Supply 100.",
  ],
  [
    "3D Space Babez Toy #3 unique limited edition NFT on the same policy as the pixel Space Babez. Max Supply 100.",
  ],
  ["Issue #2 Space Babez comicbook created"],
  [
    "3D Space Babez Toy #4 unique limited edition NFT on the same policy as the pixel Space Babez. Max Supply 100.",
  ],
  [
    "3D Space Babez Toy #5 unique limited edition NFT on the same policy as the pixel Space Babez. Max Supply 100.",
  ],
  [
    "3D Space Babez Toy #6 unique limited edition NFT on the same policy as the pixel Space Babez. Max Supply 100.",
  ],
  ["Issue #3 Space Babez comicbook created."],
];

const valData = [96, 92, 84, 75, 67, 58, 50, 41, 33, 16];
const _init_slide = 10;

let splide = null;

export default function Roadmap() {
  const [range, setRange] = useState(_init_slide);
  const [img, setImg] = useState(_init_slide);
  function initSplide() {
    splide = new Splide(".splide", {
      start: _init_slide,
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
            src={`https://anti.biz/spacebabez/ft/thermometer_${img}.png`}
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
