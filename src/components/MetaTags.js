import React from "react";
import { Helmet } from "react-helmet";

const title =
  "Space Babez - If you're gonna be hot, you might as well be hot in space...";
const content =
  "Space Babez were created to live forever on the Cardano Blockchain. There is a total of 6,666 unique Space Babez randomly generated for you to collect. No two Space Babez are alike, each one was generated from a selection of 259 variations in 16 different rarity categories which includes 2,142 different types of #boobz";

export default function MetaTags() {
  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <link rel="icon" type="image/png" href="/ft/favicon-32x32.png" />
      <meta name="title" content={title} />
      <meta name="description" content={content} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://space-babez.com/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={content} />
      <meta property="og:image" content="/ft/banner.png" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://space-babez.com/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={content} />
      <meta property="twitter:image" content="/ft/banner.png" />
    </Helmet>
  );
}
