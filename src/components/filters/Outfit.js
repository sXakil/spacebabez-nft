import React, { useState, useRef, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import outfitDrops from "../../data/drops/outfitDrops.json";

export default function Outfit({ value, onChange }) {
  const [text, setText] = useState("");
  const dd = useRef();
  useEffect(() => {
    if (value === "") setText("");
  }, [value]);
  function itemClick(e, v) {
    setText(v.text);
    dd.current.handleItemClick(e, v);
  }
  function handleChange(_, outfit) {
    onChange("outfit", outfit.value);
  }
  return (
    <Dropdown
      ref={dd}
      placeholder="Outfit"
      fluid
      clearable
      style={{ marginBottom: 10 }}
      className="selection"
      onChange={handleChange}
      value={value}
      text={text}
    >
      <Dropdown.Menu>
        {outfitDrops.map((item) =>
          typeof item.value === "string" ? (
            <Dropdown.Item
              selected={value === item.value}
              className="d-h"
              key={item.value}
              value={item.value}
              text={item.label}
              onClick={itemClick}
            />
          ) : (
            <Dropdown.Item
              selected={value === item.value}
              key={item.value}
              value={item.value}
              text={item.label}
              onClick={itemClick}
            />
          )
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}
