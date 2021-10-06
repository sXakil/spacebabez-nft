import React from "react";
import { Button, Header, Icon, Segment, Table } from "semantic-ui-react";
import { Helmet } from "react-helmet";
import data from "../data/rarity.json";
import { Link } from "gatsby";

const bg = {
  Common: "#888888",
  Uncommon: "#a5673f",
  Rare: "#fbbd08",
  Epic: "#2185d0",
  Legendary: "#e03997",
  Unicorn: "#a333c8",
  Holygrail: "#6435c9",
};
const colors = {
  Common: "grey",
  Uncommon: "orange",
  Rare: "yellow",
  Epic: "blue",
  Legendary: "pink",
  Unicorn: "purple",
  Holygrail: "violet",
};

export default function RarityChart() {
  return (
    <>
      <Helmet>
        <body className="white" />
      </Helmet>
      <Header
        textAlign="center"
        as="h1"
        style={{
          marginTop: 20,
          fontSize: 38,
          fontFamily: '"VT323", "Courier New", Courier, monospace',
        }}
      >
        Rarity Charts
      </Header>
      <div className="ch-main">
        {data.map((rarity, idx) => (
          <div key={idx} className="ch-col">
            {Object.keys(rarity).map((item) => (
              <Table selectable className="chart">
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell
                      textAlign="center"
                      className="main-th"
                      colSpan={3}
                    >
                      {item.toUpperCase()}
                    </Table.HeaderCell>
                  </Table.Row>
                  <Table.Row style={{ fontSize: 24 }}>
                    <Table.HeaderCell
                      style={{
                        backgroundColor: "#555",
                        color: "#fff",
                      }}
                    >
                      Rarity
                    </Table.HeaderCell>
                    <Table.HeaderCell
                      style={{ backgroundColor: "#555", color: "#fff" }}
                    >
                      Qty.
                    </Table.HeaderCell>
                    <Table.HeaderCell
                      style={{
                        backgroundColor: "#555",
                        color: "#fff",
                      }}
                    >
                      Percentage
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {Object.keys(rarity[item]).map((key) => (
                    <React.Fragment key={key}>
                      {key.length > 1 && (
                        <Table.Row>
                          <Table.HeaderCell
                            className="cat-th"
                            selectable={false}
                            colSpan={3}
                          >
                            <Segment
                              color={colors[key]}
                              style={{
                                fontSize: 26,
                                padding: 10,
                                backgroundColor: bg[key] + "33",
                              }}
                            >
                              {key}
                            </Segment>
                          </Table.HeaderCell>
                        </Table.Row>
                      )}
                      {Object.keys(rarity[item][key]).map((key2) => (
                        <Table.Row key={key2}>
                          <Table.Cell textAlign="center">
                            {rarity[item][key][key2].label}
                          </Table.Cell>
                          <Table.Cell>
                            {Math.round(
                              (rarity[item][key][key2].percentage / 100) * 9999
                            )}
                          </Table.Cell>
                          <Table.Cell>
                            {rarity[item][key][key2].percentage}%
                          </Table.Cell>
                        </Table.Row>
                      ))}
                    </React.Fragment>
                  ))}
                </Table.Body>
              </Table>
            ))}
          </div>
        ))}
      </div>
      <Link to="/">
        <Button style={{ padding: 20, marginTop: 30 }} fluid>
          <Icon name="home" style={{ marginRight: 10 }} /> Back to Home
        </Button>
      </Link>
    </>
  );
}
