import React, { useState, useRef, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import accessoryDrops from "../../data/drops/accessoryDrops.json";

export default function Accessory({ value, onChange }) {
  const [text, setText] = useState("");
  const dd = useRef();
  useEffect(() => {
    if (value === "") setText("");
  }, [value]);
  function itemClick(e, v) {
    setText(v.text);
    dd.current.handleItemClick(e, v);
  }
  function handleChange(_, accessory) {
    onChange("accessory", accessory.value);
  }
  return (
    <Dropdown
      ref={dd}
      placeholder="Accessories"
      fluid
      clearable
      style={{ marginBottom: 10 }}
      className="selection"
      onChange={handleChange}
      value={value}
      text={text}
    >
      <Dropdown.Menu>
        {accessoryDrops.map((item) => (
          <Dropdown.Item
            selected={value === item.value}
            key={item.value}
            value={item.value}
            text={item.label}
            onClick={itemClick}
          />
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
