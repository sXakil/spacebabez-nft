import React from "react";
import { Dropdown } from "semantic-ui-react";

const data = Array.from({ length: 6666 }).map((_, i) => ({
  text: "Space Babez #" + (i + 1),
  key: i,
  value: i + 1,
}));

export default function SearchInput({ selectedOptions = [], onSelected }) {
  return (
    <Dropdown
      placeholder="Search by Name"
      fluid
      multiple
      selection
      clearable
      lazyLoad
      search
      basic
      options={data}
      value={selectedOptions}
      onChange={onSelected}
      style={{ marginBottom: 10, minHeight: 51 }}
    />
  );
}
