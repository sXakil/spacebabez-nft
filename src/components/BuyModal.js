import React from "react";
import { Icon, Modal } from "semantic-ui-react";

export default function BuyModal({ open, onClose }) {
  return (
    <Modal
      size="mini"
      style={{ background: "#151515" }}
      open={open}
      dimmer="blurring"
      onClose={onClose}
    >
      <Modal.Content
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#151515",
        }}
      >
        <h1 style={{ color: "#22ba1a", fontSize: 46 }}>We are Sold Out!</h1>
        <p>
          Be on the lookout for our <span className="pink">NEW</span> projects,
          a lot more on the way!
        </p>
        <p style={{ marginBottom: 0 }}>Follow Us</p>
        <div className="socials" style={{ marginTop: 0 }}>
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
      </Modal.Content>
    </Modal>
  );
}
