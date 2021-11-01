import React from "react";
import { Image } from "semantic-ui-react";

export default function ImageButton({ onClick, value }) {
  const image =
    "https://spacebabez.io/images/space_babez_" +
    value.toString().padStart(4, "0") +
    ".gif";
  const token = "Space Babez #" + value;
  return (
    <button className="imgButton" onClick={onClick}>
      <div className="spacebabez-wrapper">
        <Image src={image} alt={"img" + value} className="spacebabez" />
      </div>
      <strong className="imgButtonLabel">{token}</strong>
    </button>
  );
}
