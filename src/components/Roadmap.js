import React, { useEffect, useState } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

const data = [
  [
    "Develop Space Babez website, add rarity chart & searchable filters. ",
    "Build Space Babez community",
    "Launch sale ",
    "Give out Space Babez to the community on Twitter & Discord ",
    "Make clothes featuring Space Babez artwork",
  ],
  [
    "Space Babez clothing giveaways to active community members ",
    "Add Space Babez to Anti.biz lore ",
  ],
  [
    "Create limited run Series #1 3D digital toy version of the most voted on Space Babez as a unique limited edition NFT & give out to anyone hodling 10+ Space Babez. Max supply 100.",
    "Hire @eliza.Osmo (Instagram) to create 1 of a kind T-shirt design featuring Space Babez.",
  ],
  [
    "Hire artist to draw issue #1 of Space Babez comicbook. Print 1,000-2,000 copies, put digital copy of comicbook on website as a free digital download. Give out physical copies of comicbook to community members in daily giveaways.",
  ],
  [
    "Series #2 3D digital toy to celebrate {40: Space Babez sold. Give out for free to active community members that hodl 10+ Space Babez. Max supply 100.",
  ],
  [
    "Series #3 3D digital toy to celebrate {50: Space Babez sold. Give out for free to active community members that hodl 10+ Space Babez. Max supply 100.",
  ],
  ["Issue #2 Space Babez comicbook created"],
  [
    "Series #4 3D digital toy to celebrate {70: Space Babez sold. Give out for free to active community members that hodl 10+ Space Babez. Max supply 100.",
  ],
  [
    "Series #5 3D digital toy to celebrate {80: Space Babez sold. Give out for free to active community members that hodl 10+ Space Babez. Max supply 100. ",
  ],
  [
    "Series #6 3D digital toy to celebrate {90: Space Babez sold. Give out for free to active community members that hodl 10+ Space Babez. Max supply 100. ",
  ],
  [
    "Space Babez real life toy made. (Community will vote on which Space Babez to have made) Give toy to active community members in giveaways. Limited run edition.",
    "More clothing designs made. ",
    "Issue #3 Space Babez comicbook created.",
  ],
];

// const pos = [-70, 90, 90, 140, 230, 290, 380, 395, 450, 500, 495];
let splide = null;

export default function Roadmap() {
  const [range, setRange] = useState(0);
  const [img, setImg] = useState(0);
  useEffect(() => {
    splide = new Splide(".splide", {
      type: "loop",
      arrows: false,
      direction: "ttb",
      height: 600,
      heightRatio: 0.33,
      pagination: false,
      perPage: 3,
      drag: false,
      keyboard: false,
      focus: "center",
      easing: "cubic-bezier(.69,.04,.32,.97)",
    }).mount();
  }, []);
  function handleChange(e) {
    const v = e.target.value;
    let val;
    if (v >= 95) {
      val = 10;
    } else if (v >= 89) {
      val = 9;
    } else if (v >= 80) {
      val = 8;
    } else if (v >= 71) {
      val = 7;
    } else if (v >= 62) {
      val = 6;
    } else if (v >= 53) {
      val = 5;
    } else if (v >= 45) {
      val = 4;
    } else if (v >= 36) {
      val = 3;
    } else if (v >= 26) {
      val = 2;
    } else if (v >= 12) {
      val = 1;
    } else {
      val = 0;
    }
    if (splide) {
      splide.go(val);
    }
    setImg(val);
    setTimeout(() => {
      setRange(range);
    }, 300);
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", marginTop: 20 }}>
      <h1 className="section-header">Roadmap</h1>
      <div className="roadmap-container">
        <div className="thermometer-container">
          <img
            src={`/ft/thermoter_${img}.png`}
            alt="ds"
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
                <div key={i} className="splide__slide">
                  {d.map((item, idx) => (
                    <div className="" key={idx}>
                      <span>&mdash; {item}</span>
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
