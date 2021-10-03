import React from "react";
import { Image } from "semantic-ui-react";

export default function ImageButton({ onClick, value }) {
  const image =
    "/babez/space_babez_" + value.toString().padStart(4, "0") + ".png";
  const token = "Space Babez #" + value;
  return (
    <button className="imgButton" onClick={onClick}>
      <div className="spacebabez-wrapper">
        <Image
          src={image}
          alt={"img" + value}
          layout="fixed"
          className="spacebabez"
        />
      </div>
      <strong className="imgButtonLabel">{token}</strong>
    </button>
  );
}
