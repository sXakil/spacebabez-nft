import React from "react";
import { Helmet } from "react-helmet";

export default function MetaTags() {
  return (
    <Helmet>
      <html lang="en" />
      <title>
        Space Babez - If you’re gonna be hot, you might as well be hot in
        space...
      </title>
      <link rel="icon" type="image/png" href="/ft/favicon-32x32.png" />
      <meta
        name="title"
        content="Space Babez - If you’re gonna be hot, you might as well be hot in
        space..."
      />
      <meta
        name="description"
        content="Space Babez were created to live forever on the Cardano Blockchain. There is a total of 6,666 unique Space Babez randomly generated for you to collect. No two Space Babez are alike, each one was generated from a selection of 284 variations in 17 different rarity categories which includes 2,142 different types of #boobz"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://spacebabez.io/" />
      <meta
        property="og:title"
        content="Space Babez - If you’re gonna be hot, you might as well be hot in
        space..."
      />
      <meta
        property="og:description"
        content="Space Babez were created to live forever on the Cardano Blockchain. There is a total of 6,666 unique Space Babez randomly generated for you to collect. No two Space Babez are alike, each one was generated from a selection of 284 variations in 17 different rarity categories which includes 2,142 different types of #boobz"
      />
      <meta property="og:image" content="/ft/banner.png" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://spacebabez.io/" />
      <meta
        property="twitter:title"
        content="Space Babez - If you’re gonna be hot, you might as well be hot in
        space..."
      />
      <meta
        property="twitter:description"
        content="Space Babez were created to live forever on the Cardano Blockchain. There is a total of 6,666 unique Space Babez randomly generated for you to collect. No two Space Babez are alike, each one was generated from a selection of 284 variations in 17 different rarity categories which includes 2,142 different types of #boobz"
      />
      <meta property="twitter:image" content="/ft/banner.png" />
    </Helmet>
  );
}
