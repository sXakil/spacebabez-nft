import React, { useState, useEffect, useRef } from "react";
import { Button, Icon, Modal } from "semantic-ui-react";
import Clipboard from "react-clipboard.js";

const prices = [
  { key: 1, total: "10 ₳ADA" },
  { key: 2, total: "20 ₳ADA" },
  { key: 3, total: "30 ₳ADA" },
  { key: 4, total: "40 ₳ADA" },
  { key: 5, total: "50 ₳ADA" },
  { key: 6, total: "60 ₳ADA" },
  { key: 7, total: "70 ₳ADA" },
  { key: 8, total: "80 ₳ADA" },
  { key: 9, total: "90 ₳ADA" },
  { key: 10, total: "100 ₳ADA" },
];

export default function BuyModal({ open, onClose }) {
  const [copied, setCopied] = useState(false);
  const [percentage, setPercentage] = useState(56);
  const counter = useRef(null);
  useEffect(() => {
    if (counter.current) {
      const p = 6666 - counter.current.innerText.split(" ")[0];
      setPercentage(Math.ceil((p * 100) / 6666));
    }
  }, [open]);
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
        <h1 ref={counter} style={{ color: "#22ba1a", fontSize: 46 }}>
          2066 Babez Left!
        </h1>
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
          Please send<span className="pink"> 10 ₳ADA </span>to the address above
          to receive<span className="pink"> 1 </span>Space Babez, to receive
          more Babez please send the amount listed on the chart below.
        </p>
        <table className="price-table">
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Price</th>
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
                <td>{price.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <p>
          This project has <span className="pink">622</span> wallet holders with
          roughly <span className="pink">{percentage}%</span> of the total NFTs
          minted so far.
        </p>
      </Modal.Content>
    </Modal>
  );
}
