import React from "react";
import { Helmet } from "react-helmet";

export default function MetaTags() {
  return (
    <Helmet>
      <html lang="en" />
      <title>
        Space Babez - These Babez have been in Space way too long...
      </title>
      <link rel="icon" type="image/png" href="/ft/favicon-32x32.png" />
      <meta
        name="title"
        content="Space Babez - A NFT on the Cardano Blockchain"
      />
      <meta
        name="description"
        content="Space Babez were created to live forever on the Cardano Blockchain. There is a total of 9,999 unique Space Babez randomly generated for you to collect. No two Space Babez are alike, each one features 3 rarity categories: Color, Hat, and Face."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://spacebabez.io/" />
      <meta
        property="og:title"
        content="Space Babez - A NFT on the Cardano Blockchain"
      />
      <meta
        property="og:description"
        content="Space Babez were created to live forever on the Cardano Blockchain. There is a total of 9,999 unique Space Babez randomly generated for you to collect. No two Space Babez are alike, each one features 3 rarity categories: Color, Hat, and Face."
      />
      <meta property="og:image" content="/ft/banner.png" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://spacebabez.io/" />
      <meta
        property="twitter:title"
        content="Space Babez - A NFT on the Cardano Blockchain"
      />
      <meta
        property="twitter:description"
        content="Space Babez were created to live forever on the Cardano Blockchain. There is a total of 9,999 unique Space Babez randomly generated for you to collect. No two Space Babez are alike, each one features 3 rarity categories: Color, Hat, and Face."
      />
      <meta property="twitter:image" content="/ft/banner.png" />
    </Helmet>
  );
}
