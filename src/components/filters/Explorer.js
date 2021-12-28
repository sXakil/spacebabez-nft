import React, { useState, useEffect, useRef } from "react";
import { Container, Grid } from "semantic-ui-react";
import PreviewModal from "../PreviewModal";
import ImageButton from "../ImageButton";
import SearchInput from "../SearchInput";
import RadioSelect from "../RadioSelect";
import Species from "./Species";
import Outfit from "./Outfit";
import Weapon from "./Weapon";
import Power from "./Power";
import Hair from "./Hair";
import Glove from "./Glove";
import Shoe from "./Shoe";
import Star from "./Star";
import Accent from "./Accent";
import Accessory from "./Accessory";
import BoobSize from "./BoobSize";
import Earring from "./Earring";
import Necklace from "./Necklace";
import Vortex from "./Vortex";

import babez from "../../data/spacebabez.json";
import accentData from "../../data/accent.json";
import accessoryData from "../../data/accessory.json";
import boobData from "../../data/boob.json";
import earringData from "../../data/earring.json";
import gloveData from "../../data/glove.json";
import hairData from "../../data/hair.json";
import hairsprayData from "../../data/hairspray.json";
import helmetData from "../../data/helmet.json";
import necklaceData from "../../data/necklace.json";
import outfitData from "../../data/outfit.json";
import powerData from "../../data/power.json";
import shoeData from "../../data/shoe.json";
import speciesData from "../../data/species.json";
import starData from "../../data/star.json";
import vortexData from "../../data/vortex.json";
import weaponData from "../../data/weapon.json";

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
    } else if (what === "helmet") {
      ids = helmetData[selection];
    } else if (what === "vortex") {
      ids = vortexData[selection];
    }
    fIds = ids.filter((id) => fIds.length === 0 || fIds.indexOf(id) >= 0);
  }
  return fIds;
}

let prevY = 50;

const Explorer = () => {
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
    vortex: "",
  });
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
      else setFilteredIds(Array.from({ length: 6666 }, (_, i) => i + 1));
    }
  }, [selectedFilters, selectedIds]);

  useEffect(() => {
    function handleObserver(entities) {
      const y = entities[0].boundingClientRect.y;
      if (prevY >= y) {
        setMax((i) => Math.min(i + 20, 6666));
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
      <div className="fade-start">
        <Container text style={{ paddingTop: 20 }}>
          <h1 className="section-header mb-2">Explore</h1>
          <Grid stackable columns={2}>
            <Grid.Column>
              <SearchInput
                selectedOptions={selectedIds}
                onSelected={handleSelection}
              />
            </Grid.Column>
            <Grid.Column>
              <Accent
                value={selectedFilters.accent}
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
              <Species
                value={selectedFilters.species}
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
              <Hair
                value={selectedFilters.hair}
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
              <Outfit
                value={selectedFilters.outfit}
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
              <Shoe
                value={selectedFilters.shoe}
                onChange={handleFilterChange}
              />
            </Grid.Column>
            <Grid.Column>
              <Star
                value={selectedFilters.star}
                onChange={handleFilterChange}
              />
            </Grid.Column>
            <Grid.Column>
              <Vortex
                value={selectedFilters.vortex}
                onChange={handleFilterChange}
              />
            </Grid.Column>
            <Grid.Column>
              <Weapon
                value={selectedFilters.weapon}
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
      <PreviewModal
        openedImage={openedImage}
        onImageModalClose={onImageModalClose}
      />
    </>
  );
};

export default Explorer;
