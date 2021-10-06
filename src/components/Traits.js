import { Link } from "gatsby";
import React from "react";
import { Image } from "semantic-ui-react";

export default function Traits() {
  return (
    <>
      <h1 className="section-header">TRAITS</h1>
      <Link to="rarity-chart">
        <Image fluid centered src={"/ft/Space_Babez_Traits.png"} />
      </Link>
      <p className="details">
        Click the image above to see the breakdown of the different rarities
      </p>
    </>
  );
}
