import React, { useState, useEffect, useRef } from "react";
import { Container, Grid, Icon } from "semantic-ui-react";
import Header from "../components/Header";
import Faq from "../components/FAQ";
import Traits from "../components/Traits";
import About from "../components/About";
import Shop from "../components/Shop";
import PreviewModal from "../components/PreviewModal";
import ImageButton from "../components/ImageButton";
import BuyModal from "../components/BuyModal";
import MetaTags from "../components/MetaTags";
import Roadmap from "../components/Roadmap";
import SearchInput from "../components/SearchInput";
import Species from "../components/filters/Species";
import Outfit from "../components/filters/Outfit";
import Weapon from "../components/filters/Weapon";
import Power from "../components/filters/Power";
import Hair from "../components/filters/Hair";
import Glove from "../components/filters/Glove";
import Shoe from "../components/filters/Shoe";
import Star from "../components/filters/Star";
import Accent from "../components/filters/Accent";
import Accessory from "../components/filters/Accessory";
import babez from "../data/spacebabez.json";
import accentData from "../data/accent.json";
import accessoryData from "../data/accessory.json";
import boobData from "../data/boob.json";
import earringData from "../data/earring.json";
import gloveData from "../data/glove.json";
import hairData from "../data/hair.json";
import hairsprayData from "../data/hairspray.json";
import helmetData from "../data/helmet.json";
import necklaceData from "../data/necklace.json";
import outfitData from "../data/outfit.json";
import powerData from "../data/power.json";
import shoeData from "../data/shoe.json";
import speciesData from "../data/species.json";
import starData from "../data/star.json";
import vortexData from "../data/vortex.json";
import weaponData from "../data/weapon.json";
import RadioSelect from "../components/RadioSelect";
import BoobSize from "../components/filters/BoobSize";
import Earring from "../components/filters/Earring";
import Necklace from "../components/filters/Necklace";

function checkAndFilter(fIds, selection, what) {
  let ids = [];
  if (selection) {
    if (what === "species") {
      ids = speciesData[selection];
    } else if (what === "outfit") {
      ids = outfitData[selection];
    } else if (what === "weapon") {
      ids = weaponData[selection];
    } else if (what === "power") {
      ids = powerData[selection];
    } else if (what === "hair") {
      ids = hairData[selection];
    } else if (what === "glove") {
      ids = gloveData[selection];
    } else if (what === "shoe") {
      ids = shoeData[selection];
    } else if (what === "star") {
      ids = starData[selection];
    } else if (what === "accent") {
      ids = accentData[selection];
    } else if (what === "accessory") {
      ids = accessoryData[selection];
    } else if (what === "earring") {
      ids = earringData[selection];
    } else if (what === "necklace") {
      ids = necklaceData[selection];
    } else if (what === "boob") {
      ids = boobData[selection];
    } else if (what === "hairspray") {
      ids = hairsprayData[selection];
    } else if (what === "hemet") {
      ids = helmetData[selection];
    } else if (what === "vortex") {
      ids = vortexData[selection];
    }
    fIds = ids.filter((id) => fIds.length === 0 || fIds.indexOf(id) >= 0);
  }
  return fIds;
}

let prevY = 50;

const IndexPage = () => {
  const [max, setMax] = useState(50);
  const [filteredIds, setFilteredIds] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    species: "",
    outfit: "",
    hair: "",
    accent: "",
    shoe: "",
    accessory: "",
    glove: "",
    earring: "",
    necklace: "",
    weapon: "",
    power: "",
    star: "",
    helmet: "",
    hairspray: "",
    boob: "",
  });
  const [openedBuyModal, setOpenedBuyModal] = useState(null);
  const [openedImage, setOpenedImage] = useState(null);
  const loadingRef = useRef();

  useEffect(() => {
    let nfIds = [];
    Object.keys(selectedFilters).forEach((key) => {
      nfIds = checkAndFilter(nfIds, selectedFilters[key], key);
    });
    if (selectedIds.length > 0) {
      nfIds = selectedIds.filter(
        (id) => nfIds.length === 0 || nfIds.indexOf(id) >= 0
      );
    }
    if (nfIds.length > 0) {
      setFilteredIds(nfIds);
    } else {
      setMax(50);
      const noResults = Object.keys(selectedFilters).some(
        (key) => selectedFilters[key] !== ""
      );
      if (noResults) setFilteredIds([]);
      else setFilteredIds(Array.from({ length: 9999 }, (_, i) => i + 1));
    }
  }, [selectedFilters, selectedIds]);

  useEffect(() => {
    function handleObserver(entities) {
      const y = entities[0].boundingClientRect.y;
      if (prevY >= y) {
        setMax((i) => Math.min(i + 20, 9999));
      }
      prevY = y;
    }
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });
    observer.observe(loadingRef.current);
  }, []);

  function onImageModalOpen(val) {
    setOpenedImage(val);
  }
  function onImageModalClose() {
    setOpenedImage(null);
  }
  function handleFilterChange(filter, value) {
    setSelectedFilters((sf) => ({
      ...sf,
      [filter]: value,
    }));
  }
  function handleSelection(_, selection) {
    setSelectedIds(selection.value);
  }

  return (
    <>
      <MetaTags />
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
        <Faq />
      </Container>
      <Roadmap />
      <div className="fade-start">
        <Container text style={{ paddingTop: 20 }}>
          <Shop />
          <Traits />
          <h1 className="section-header">Explore</h1>
          <SearchInput
            selectedOptions={selectedIds}
            onSelected={handleSelection}
          />
          <Grid stackable columns={2}>
            <Grid.Column>
              <Star
                value={selectedFilters.star}
                onChange={handleFilterChange}
              />
            </Grid.Column>
            <Grid.Column>
              <Power
                value={selectedFilters.power}
                onChange={handleFilterChange}
              />
            </Grid.Column>
            <Grid.Column>
              <Species
                value={selectedFilters.species}
                onChange={handleFilterChange}
              />
            </Grid.Column>
            <Grid.Column>
              <Accent
                value={selectedFilters.accent}
                onChange={handleFilterChange}
              />
            </Grid.Column>
            <Grid.Column>
              <Necklace
                value={selectedFilters.necklace}
                onChange={handleFilterChange}
              />
            </Grid.Column>
            <Grid.Column>
              <Accessory
                value={selectedFilters.accessory}
                onChange={handleFilterChange}
              />
            </Grid.Column>
            <Grid.Column>
              <Outfit
                value={selectedFilters.outfit}
                onChange={handleFilterChange}
              />
            </Grid.Column>
            <Grid.Column>
              <Hair
                value={selectedFilters.hair}
                onChange={handleFilterChange}
              />
            </Grid.Column>
            <Grid.Column>
              <Earring
                value={selectedFilters.earring}
                onChange={handleFilterChange}
              />
            </Grid.Column>
            <Grid.Column>
              <Glove
                value={selectedFilters.glove}
                onChange={handleFilterChange}
              />
            </Grid.Column>
            <Grid.Column>
              <Weapon
                value={selectedFilters.weapon}
                onChange={handleFilterChange}
              />
            </Grid.Column>
            <Grid.Column>
              <Shoe
                value={selectedFilters.shoe}
                onChange={handleFilterChange}
              />
            </Grid.Column>
          </Grid>
          <Grid columns={2} stackable>
            <Grid.Column textAlign="center">
              <RadioSelect
                label="Helmet"
                value={selectedFilters.helmet}
                onChange={handleFilterChange}
              />
            </Grid.Column>
            <Grid.Column textAlign="center">
              <RadioSelect
                label="Hairspray"
                value={selectedFilters.hairspray}
                onChange={handleFilterChange}
              />
            </Grid.Column>
          </Grid>
          <BoobSize
            value={selectedFilters.boob}
            onChange={handleFilterChange}
          />
          <p className="results">
            {filteredIds.length} {filteredIds.length > 1 ? "results" : "result"}
          </p>
        </Container>
      </div>
      <div className="faded">
        <div className="resultContainer">
          <div className="imgContainer">
            {filteredIds.slice(0, max).map((val) => (
              <ImageButton
                key={val}
                value={val}
                onClick={() => onImageModalOpen(babez[val - 1])}
              />
            ))}
          </div>
        </div>
        <div
          ref={loadingRef}
          className="ui active centered inline loader"
          style={{
            display:
              filteredIds.length === 0 || filteredIds.length < max
                ? "none"
                : "block",
          }}
        ></div>
      </div>
      {openedImage ? (
        <PreviewModal
          openedImage={openedImage}
          onImageModalClose={onImageModalClose}
        />
      ) : (
        <BuyModal
          open={openedBuyModal}
          onClose={() => setOpenedBuyModal(false)}
        />
      )}
    </>
  );
};

export default IndexPage;
