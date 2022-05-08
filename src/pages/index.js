import React, { useState, useEffect } from "react";
import { Container, Icon, Loader } from "semantic-ui-react";
import loadable from "@loadable/component";
import Header from "../components/Header";
import Faq from "../components/FAQ";
import Traits from "../components/Traits";
import About from "../components/About";
import Shop from "../components/Shop";
import BuyModal from "../components/BuyModal";
import MetaTags from "../components/MetaTags";
import Roadmap from "../components/Roadmap";
import ExternalLinks from "../components/ExternalLinks";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Banner from "../components/Banner";

const Explorer = loadable(() => import("../components/filters/Explorer"), {
  fallback: (
    <Loader active size="huge" inline="centered">
      LOADING
    </Loader>
  ),
});

const IndexPage = () => {
  const [openedBuyModal, setOpenedBuyModal] = useState(null);

  useEffect(() => {
    const styles =
      "color: yellow;background: black;font-size: 18px;border-left: 1px solid red;border-right: 1px solid red;padding: 10px";
    console.log(
      "%cHi Stranger!                          \n" +
        "Creator: https://twitter.com/diicasses\n" +
        "Web Dev: https://wa.me/+8801861590250 ",
      styles
    );
  }, []);

  return (
    <>
      <MetaTags />
      <canvas id="con-canvas" />
      <Banner />
      <Header onBuyButtonClicked={() => setOpenedBuyModal(true)} />
      <div className="socials">
        <a
          href="https://www.twitter.com/spacebabez"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="twitter" />
        </a>
        <a
          href="https://discord.gg/5KE3H2tTzR"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="discord" />
        </a>
        <a
          href="https://www.instagram.com/spacebabez.io"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="instagram" />
        </a>
        <a
          href="https://www.facebook.com/Space-Babez-106258568458481"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="facebook" />
        </a>
      </div>

      <Container text style={{ marginTop: 20 }}>
        <About />
        <Link to="/space-paper" className="paper-link">
          <StaticImage
            width={45}
            height={45}
            src="../images/space_paper.png"
            alt="Paper"
            layout="fixed"
          />
          <h1 className="section-header">Space Paper</h1>
        </Link>
        <Faq />
        <ExternalLinks />
      </Container>
      <Roadmap />
      <Container text style={{ paddingTop: 20, paddingBottom: 20 }}>
        <Shop />
        <Traits />
      </Container>
      <Explorer />
      <BuyModal
        open={openedBuyModal}
        onClose={() => setOpenedBuyModal(false)}
      />
    </>
  );
};

export default IndexPage;
