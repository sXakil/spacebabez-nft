import React from "react";
import { Button, Segment } from "semantic-ui-react";

export default function BoobSize({ value, onChange }) {
  return (
    <Segment inverted textAlign="center" style={{ marginTop: 25 }}>
      <strong style={{ fontSize: 20, marginRight: 15 }}>Boob Size</strong>
      {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
        <Button
          size="tiny"
          key={letter}
          style={{ margin: 5 }}
          circular
          basic={value !== letter}
          inverted={value !== letter}
          color="grey"
          onClick={() => onChange("boob", value === letter ? "" : letter)}
        >
          {letter}
        </Button>
      ))}
    </Segment>
  );
}
