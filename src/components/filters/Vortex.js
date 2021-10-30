import React, { useState, useRef, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import vortexDrops from "../../data/drops/vortexDrops.json";

export default function Vortex({ value, onChange }) {
  const [text, setText] = useState("");
  const dd = useRef();
  useEffect(() => {
    if (value === "") setText("");
  }, [value]);
  function itemClick(e, v) {
    setText(v.text);
    dd.current.handleItemClick(e, v);
  }
  function handleChange(_, vortex) {
    onChange("vortex", vortex.value);
  }
  return (
    <Dropdown
      ref={dd}
      placeholder="Vortex"
      fluid
      clearable
      style={{ marginBottom: 10 }}
      className="selection"
      onChange={handleChange}
      value={value}
      text={text}
    >
      <Dropdown.Menu>
        {vortexDrops.map((item) => (
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
