import React, { useEffect } from "react";
import { Header, Table } from "semantic-ui-react";
import { Helmet } from "react-helmet";
import chart from "../data/rarity.json";
import { Link } from "gatsby";

export default function RarityChart() {
  useEffect(() => {
    const styles =
      "color: yellow;background: black;font-size: 18px;border-left: 1px solid red;border-right: 1px solid red;padding: 10px";
    console.log(
      "%cHi Stranger!                          \n" +
        "Creator: https://twitter.com/diicasses\n" +
        "Web Dev: https://wa.me/+8801861590250 ",
      styles
    );
  }, []);
  return (
    <>
      <Helmet>
        <title>Spacebabez - Rarity Chart</title>
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
        {chart.map((data, ix) => (
          <div key={ix} className="ch-col">
            {Object.keys(data).map((item, idx) => (
              <Table key={idx} selectable className="chart">
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
                      Variant
                    </Table.HeaderCell>
                    <Table.HeaderCell
                      style={{ backgroundColor: "#555", color: "#fff" }}
                    >
                      Qty
                    </Table.HeaderCell>
                    <Table.HeaderCell
                      style={{
                        backgroundColor: "#555",
                        color: "#fff",
                        textAlign: "center",
                      }}
                    >
                      %
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {Object.keys(data[item]).map((key) => (
                    <Table.Row key={key}>
                      <Table.Cell>{key}</Table.Cell>
                      <Table.Cell>{data[item][key]}</Table.Cell>
                      <Table.Cell textAlign="center">
                        {((data[item][key] / 6666) * 100).toFixed(2)}%
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            ))}
          </div>
        ))}
      </div>
      <Link to="/">
        <div className="heart-img">
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
