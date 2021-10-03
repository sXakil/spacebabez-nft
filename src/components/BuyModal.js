import React, { useState } from "react";
import { Button, Icon, Modal } from "semantic-ui-react";
import Clipboard from "react-clipboard.js";

const prices = [
  {
    key: 1,
    pp: "15 ₳ADA",
    total: "15 ₳ADA",
  },
  {
    key: 2,
    pp: "14 ₳ADA",
    total: "28 ₳ADA",
  },
  {
    key: 3,
    pp: "13.66 ₳ADA",
    total: "41 ₳ADA",
  },
  {
    key: 4,
    pp: "13.5 ₳ADA",
    total: "54 ₳ADA",
  },
  {
    key: 5,
    pp: "13.4 ₳ADA",
    total: "67 ₳ADA",
  },
  {
    key: 6,
    pp: "13.33 ₳ADA",
    total: "80 ₳ADA",
  },
  {
    key: 7,
    pp: "13.28 ₳ADA",
    total: "93 ₳ADA",
  },
  {
    key: 8,
    pp: "13.25 ₳ADA",
    total: "106 ₳ADA",
  },
  { key: 9, pp: "13.22 ₳ADA", total: "119 ₳ADA" },
  { key: 10, pp: "13.2 ₳ADA", total: "132 ₳ADA" },
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
        <h1 style={{ color: "#22ba1a", fontSize: 46 }}>9999 Babez Left!</h1>
        <Button
          positive
          icon
          labelPosition="right"
          onClick={() => setCopied(true)}
          as={Clipboard}
          data-clipboard-text="addr1v9avs43e8lu53k2upwddnzu0av4c7c5ac88mxehz6l682jql3maac"
          title="Click to Copy"
          style={{ wordBreak: "break-word" }}
        >
          addr1v9avs43e8lu53k2upwddnzu0av4c7c5ac88mxehz6l682jql3maac
          <Icon name={copied ? "check" : "copy"} />
        </Button>
        <p style={{ margin: 10 }}>
          Please send<span className="pink"> 15 ₳ADA </span>to the above address
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
                style={{ color: price.key === 10 ? "#ff10f0" : "" }}
              >
                <td>{price.key}</td>
                <td>{price.pp}</td>
                <td>{price.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal.Content>
    </Modal>
  );
}
