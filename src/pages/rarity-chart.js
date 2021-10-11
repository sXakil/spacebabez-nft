import React from "react";
import { Header, Segment, Table } from "semantic-ui-react";
import { Helmet } from "react-helmet";
import data from "../data/rarity.json";
import { Link } from "gatsby";

const bg = {
  Common: "#888888",
  Uncommon: "#21BA45",
  Rare: "#2185d0",
  Epic: "#a333c8",
  Legendary: "#F2711C",
  Unicorn: "#6435c9",
  Holygrail: "#DB2828",
};
const colors = {
  Common: "grey",
  Uncommon: "green",
  Rare: "blue",
  Epic: "purple",
  Legendary: "orange",
  Unicorn: "violet",
  Holygrail: "red",
};

export default function RarityChart() {
  return (
    <>
      <Helmet>
        <title>Spacebabez - Rarity Chart</title>
        {/* <body className="white" /> */}
      </Helmet>
      <Header
        textAlign="center"
        as="h1"
        style={{
          marginTop: 20,
          fontSize: 38,
          fontFamily: '"VT323", "Courier New", Courier, monospace',
          color: "#ffffff",
        }}
      >
        Rarity Chart
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
        <div
          style={{
            padding: 20,
            marginTop: 30,
            fontSize: 36,
            background: "transparent",
            fontFamily: '"VT323", "Courier New", Courier, monospace',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#f1f1f1",
          }}
          fluid
        >
          <img
            src="/ft/heart_link_96x96.png"
            alt="heart"
            style={{ marginRight: 15, height: 40, width: 40 }}
          />{" "}
          Home
        </div>
      </Link>
    </>
  );
}
