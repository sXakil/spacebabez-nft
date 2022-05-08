import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function Shop() {
  return (
    <>
      <h1 className="section-header">Shop</h1>
      <a
        href="https://www.anti.biz/products/space-babez-6203-no-sparkle-unisex-recycled-t-shirt"
        target="_blank"
        rel="noreferrer"
        className="shopImage"
      >
        <StaticImage src="../images/unisex-recycled-t-shirt.png" fullWidth />
      </a>
    </>
  );
}
