import React from "react";
import { Button, Segment } from "semantic-ui-react";

export default function BoobSize({ value, onChange }) {
  return (
    <Segment inverted textAlign="center" style={{ marginTop: 25 }}>
      <strong style={{ fontSize: 20, marginRight: 15 }}>Boob Size</strong>
      {[1, 2, 3, 4, 5, 6, 7].map((letter) => (
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
          {" ABCDEFG"[letter]}
        </Button>
      ))}
    </Segment>
  );
}
