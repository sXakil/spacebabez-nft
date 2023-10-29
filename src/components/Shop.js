import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Shop() {
  const [isMobile, setIsMobile] = React.useState(true);
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
      window.onresize = () => {
        setIsMobile(window.innerWidth < 768);
      };
    }
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 className="section-header">Shop</h1>
      {isMobile ? (
        <StaticImage
          src="../images/poster.png"
          alt="space babez"
          width={480}
          fullWidth
        />
      ) : (
        <iframe
          title="3D Space Babez"
          src="https://anti.biz/spacebabez/ft/model/index.html"
          style={{ border: 0, width: "100%", minHeight: 700 }}
          loading="lazy"
        ></iframe>
      )}
      <br />
      <a
        href="https://www.anti.biz/products/space-babez-6203-no-sparkle-unisex-recycled-t-shirt"
        target="_blank"
        rel="noreferrer"
        className="shopImage"
      >
        <StaticImage
          src="../images/unisex-recycled-t-shirt.png"
          alt="shirt"
          fullWidth
        />
      </a>
    </div>
  );
}
