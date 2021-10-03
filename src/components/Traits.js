import React from "react";
import { Image } from "semantic-ui-react";

export default function Traits() {
  return (
    <>
      <h1 className="section-header">TRAITS</h1>
      <Image fluid centered src={"/ft/Space_Babez_Traits.png"} />
      <p className="details">
        <small>
          <strike>
            Click the image above to see the breakdown of the different rarities
          </strike>{" "}
        </small>
        <br />
        (coming soon...)
      </p>
    </>
  );
}
