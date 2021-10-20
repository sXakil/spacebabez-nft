import React, { useEffect, useState } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

const data = [
  [
    "Develop Space Babez website, add rarity chart & searchable filters.",
    "Build Space Babez community",
    "Launch sale",
    "Make clothes featuring Space Babez artwork",
  ],
  ["Add Space Babez to Anti.biz lore"],
  [
    "Create limited run Series #1 3D digital toy version of the most voted on Space Babez as a unique limited edition NFT. Max supply 100.",
    "Hire @eliza.Osmo (Instagram) to create 1 of a kind T-shirt design featuring Space Babez.",
  ],
  [
    "Hire artist to draw issue #1 of Space Babez comicbook. Print 1,000-2,000 copies, put digital copy of comicbook on website as a free digital download.",
  ],
  [
    "Series #2 3D digital toy to celebrate 40% Space Babez sold. Max supply 100.",
  ],
  [
    "Series #3 3D digital toy to celebrate 50% Space Babez sold. Max supply 100.",
  ],
  ["Issue #2 Space Babez comicbook created"],
  [
    "Series #4 3D digital toy to celebrate 70% Space Babez sold. Max supply 100.",
  ],
  [
    "Series #5 3D digital toy to celebrate 80% Space Babez sold. Max supply 100. ",
  ],
  [
    "Series #6 3D digital toy to celebrate 90% Space Babez sold. Max supply 100. ",
  ],
  [
    "Space Babez real life toy made. (Community will vote on which Space Babez to have made). Limited run edition.",
    "More clothing designs made. ",
    "Issue #3 Space Babez comicbook created.",
  ],
];

const valData = [96, 92, 84, 75, 67, 58, 50, 41, 33, 16];

let splide = null;

export default function Roadmap() {
  const [range, setRange] = useState(0);
  const [img, setImg] = useState(0);
  function initSplide() {
    splide = new Splide(".splide", {
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
                      <span>{item}</span>
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
