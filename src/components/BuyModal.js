import React, { useState } from "react";
import { Button, Icon, Modal } from "semantic-ui-react";
import Clipboard from "react-clipboard.js";

const prices = [
  {
    key: 1,
    pp: "9 ₳ADA",
    total: "9 ₳ADA",
  },
  {
    key: 2,
    pp: "8.5 ₳ADA",
    total: "17 ₳ADA",
  },
  {
    key: 3,
    pp: "8.33 ₳ADA",
    total: "25 ₳ADA",
  },
  {
    key: 4,
    pp: "8.25 ₳ADA",
    total: "33 ₳ADA",
  },
  {
    key: 5,
    pp: "8.2 ₳ADA",
    total: "41 ₳ADA",
  },
  {
    key: 6,
    pp: "8.16 ₳ADA",
    total: "49 ₳ADA",
  },
  {
    key: 7,
    pp: "8.14 ₳ADA",
    total: "57 ₳ADA",
  },
  {
    key: 8,
    pp: "8.12 ₳ADA",
    total: "65 ₳ADA",
  },
  { key: 9, pp: "8.11 ₳ADA", total: "73 ₳ADA" },
  { key: 10, pp: "8.1 ₳ADA", total: "81 ₳ADA" },
];

export default function BuyModal({ open, onClose }) {
  const [copied, setCopied] = useState(false);
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
        <h1 style={{ color: "#22ba1a", fontSize: 46 }}>3065 Babez Left!</h1>
        <Button
          positive
          icon
          labelPosition="right"
          onClick={() => setCopied(true)}
          as={Clipboard}
          data-clipboard-text="addr1v94naa8c3xz0an2q0kyc0yhvjln3rx3dv6p9nny5dfnl9qsyn54r6"
          title="Click to Copy"
          style={{ wordBreak: "break-word" }}
        >
          addr1v94naa8c3xz0an2q0kyc0yhvjln3rx3dv6p9nny5dfnl9qsyn54r6
          <Icon name={copied ? "check" : "copy"} />
        </Button>
        <p style={{ margin: 10 }}>
          Please send<span className="pink"> 9 ₳ADA </span>to the address above
          to receive<span className="pink"> 1 </span>Space Babez, to receive
          more Babez please send the amount listed on the chart below.
        </p>
        <table className="price-table">
          <thead>
            <tr>
              <th>Qty.</th>
              <th>Price Per</th>
              <th>Total Price</th>
            </tr>
            <tr>
              <td className="brdr" colSpan={3} />
            </tr>
          </thead>

          <tbody>
            {prices.map((price) => (
              <tr
                key={price.key}
                style={{ color: price.key === 10 ? "#b98dfc" : "" }}
              >
                <td>{price.key}</td>
                <td>{price.pp}</td>
                <td>{price.total}</td>
              </tr>
            ))}
            <tr>
              <td colSpan={3} className="buyMore">
                Buy<strong> 10 </strong> for the price of
                <strong> 9</strong>!
              </td>
            </tr>
          </tbody>
        </table>
      </Modal.Content>
    </Modal>
  );
}
