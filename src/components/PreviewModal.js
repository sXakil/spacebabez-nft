import React from "react";
import { Modal, Image, Grid, Button } from "semantic-ui-react";

const yn = ["No", "Yes"];

export default function PreviewModal({ openedImage, onImageModalClose }) {
  const label = `Space Babez #${openedImage?.id}`;
  const image =
    "/babez/space_babez_" +
    (openedImage?.id).toString().padStart(4, "0") +
    ".png";
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
          <Grid.Column>Star: {openedImage?.star}</Grid.Column>
          <Grid.Column>Power: {openedImage?.power}</Grid.Column>
          <Grid.Column>Hairspray: {yn[openedImage?.hairspray]}</Grid.Column>
          <Grid.Column>Alien Species: {openedImage?.species}</Grid.Column>
          <Grid.Column>Accent Color: {openedImage?.accent}</Grid.Column>
          <Grid.Column>Necklace: {openedImage?.necklace}</Grid.Column>
          <Grid.Column>Accessory: {openedImage?.accessory}</Grid.Column>
          <Grid.Column>Outfit: {openedImage?.outfit}</Grid.Column>
          <Grid.Column>Boob Size: {openedImage?.boob}</Grid.Column>
          <Grid.Column>Hair: {openedImage?.hair}</Grid.Column>
          <Grid.Column>Earring: {openedImage?.earring}</Grid.Column>
          <Grid.Column>Helmet: {yn[openedImage?.helmet]}</Grid.Column>
          <Grid.Column>Weapon: {openedImage?.weapon}</Grid.Column>
          <Grid.Column>Gloves: {openedImage?.glove}</Grid.Column>
          <Grid.Column>Shoe: {openedImage?.shoe}</Grid.Column>
          <Grid.Column>Signature: {yn[openedImage?.signature]}</Grid.Column>
        </Grid>
        <Button onClick={onImageModalClose} style={{ marginTop: 15 }} inverted>
          Close
        </Button>
      </Modal.Content>
    </Modal>
  );
}
