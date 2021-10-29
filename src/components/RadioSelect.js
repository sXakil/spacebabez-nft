import React from "react";
import { Form, Checkbox } from "semantic-ui-react";

export default function RadioSelect({ label, value, onChange }) {
  function handleChange(_, v) {
    onChange(label.toLowerCase(), v.value === value ? "" : v.value);
  }
  return (
    <Form inverted>
      <Form.Field>
        <div
          style={{
            display: "inline-block",
            marginLeft: 10,
            minWidth: 80,
            textAlign: "left",
          }}
        >
          {label}
        </div>
        <Checkbox
          style={{ marginLeft: 10 }}
          label="Yes"
          value={1}
          checked={value === 1}
          onChange={handleChange}
        />
        <Checkbox
          style={{ marginLeft: 10 }}
          label="No"
          value={2}
          checked={value === 2}
          onChange={handleChange}
        />
      </Form.Field>
    </Form>
  );
}
