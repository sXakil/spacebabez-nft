import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function Traits() {
  return (
    <>
      <h1 className="section-header">TRAITS</h1>
      <Link to="rarity-chart">
        <StaticImage src="../images/traits.png" alt="BABEZ Logo" />
      </Link>
      <p className="details">
        Click the image above to see the breakdown of the different rarities
      </p>
    </>
  );
}
