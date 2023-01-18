import React from "react";
import { StaticImage } from "gatsby-plugin-image";
// import { Icon } from "semantic-ui-react";

export default function Shop() {
  const [isMobile, setIsMobile] = React.useState(true);
  // const [copied, setCopied] = React.useState(false);
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
      window.onresize = () => {
        setIsMobile(window.innerWidth < 768);
      };
    }
  }, []);
  // function copy() {
  //   if (!navigator.clipboard) {
  //     const textArea = document.createElement("textarea");
  //     textArea.value =
  //       "addr1vyjguu9kf50f3mmqrnr3tgkgtk9gvmpgrs8mkha9rzfwymg6m6eah";
  //     textArea.style.top = "0";
  //     textArea.style.left = "0";
  //     textArea.style.position = "fixed";
  //     document.body.appendChild(textArea);
  //     textArea.focus();
  //     textArea.select();
  //     document.execCommand("copy");
  //     document.body.removeChild(textArea);
  //     return;
  //   }
  //   navigator.clipboard.writeText(
  //     "addr1vyjguu9kf50f3mmqrnr3tgkgtk9gvmpgrs8mkha9rzfwymg6m6eah"
  //   );
  //   setCopied(true);
  //   setTimeout(() => {
  //     setCopied(false);
  //   }, 2500);
  // }
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
          src="/ft/model/index.html"
          style={{ border: 0, width: "100%", minHeight: 700 }}
          loading="lazy"
        ></iframe>
      )}
      {/* <div
        style={{
          backgroundColor: "#111111",
          padding: "8px 16px",
          borderRadius: 8,
          textAlign: "center",
        }}
      >
        <p className="details mb0">
          Please send <span className="pink">40 ADA</span> to mint the new 3D
          interactive Space Babez
        </p>
        <button className="rb" onClick={copy}>
          <div className="aft"></div>
          <p>
            <Icon name={(copied ? "check circle" : "copy") + " outline"} />{" "}
            addr1vyjguu9kf50f3mmqrnr3tgkgtk9gvmpgrs8mkha9rzfwymg6m6eah
          </p>
        </button>
      </div> */}
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
