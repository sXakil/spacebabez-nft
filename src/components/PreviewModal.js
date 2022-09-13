import React from "react";
import { Modal, Image, Grid, Button } from "semantic-ui-react";

const yn = ["No", "Yes"];

export default function PreviewModal({ openedImage, onImageModalClose }) {
  if (openedImage === null) return null;
  const label = `Space Babez #${openedImage?.id}`;
  const image =
    "https://space-babez.com/images/space_babez_" +
    (openedImage?.id).toString().padStart(4, "0") +
    ".gif";
  return (
    <Modal
      size="small"
      open={openedImage !== null}
      dimmer="blurring"
      onClose={onImageModalClose}
      className="prevModal"
    >
      <Modal.Content>
        <h1 className="m-header">{label}</h1>
        <div className="spacebabez-container">
          <Image src={image} alt={label} layout="fixed" className="modal-img" />
          <div className="spacebabez-mask" />
        </div>
        <Grid columns={2} stackable className="m-details">
          <Grid.Column>Accent Color: {openedImage?.A}</Grid.Column>
          <Grid.Column>Accessory: {openedImage?.A2}</Grid.Column>
          <Grid.Column>Alien Species: {openedImage?.A3}</Grid.Column>
          <Grid.Column>Boob Size: {openedImage?.B}</Grid.Column>
          <Grid.Column>Earring: {openedImage?.E}</Grid.Column>
          <Grid.Column>Gloves: {openedImage?.G}</Grid.Column>
          <Grid.Column>Hair: {openedImage?.H}</Grid.Column>
          <Grid.Column>Hairspray: {yn[openedImage?.H2]}</Grid.Column>
          <Grid.Column>Helmet: {yn[openedImage?.H3]}</Grid.Column>
          <Grid.Column>Necklace: {openedImage?.N}</Grid.Column>
          <Grid.Column>Outfit: {openedImage?.O}</Grid.Column>
          <Grid.Column>Power: {openedImage?.P}</Grid.Column>
          <Grid.Column>Shoe: {openedImage?.S}</Grid.Column>
          <Grid.Column>Stars: {openedImage?.S2}</Grid.Column>
          <Grid.Column>Vortex: {openedImage?.V}</Grid.Column>
          <Grid.Column>Weapon: {openedImage?.W}</Grid.Column>
        </Grid>
        <Button onClick={onImageModalClose} style={{ marginTop: 15 }} inverted>
          Close
        </Button>
      </Modal.Content>
    </Modal>
  );
}
