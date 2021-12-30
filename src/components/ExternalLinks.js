import React from "react";
import { TransitionGroup, Transition, Icon } from "semantic-ui-react";

export default function ExternalLinks() {
  const [open, setOpen] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  function handleClick() {
    setOpen(!open);
    setVisible(!visible);
  }
  return (
    <div className={`ext-links${visible ? " opened" : ""}`}>
      <button onClick={handleClick}>
        <h1 className="section-header">External Links</h1>
        <div className="trw">
          <Transition
            visible={visible}
            animation="vertical flip"
            duration={200}
          >
            <Icon
              style={{ color: "#652bbc" }}
              name="angle double up"
              size="large"
            />
          </Transition>
        </div>
        <div className="trw">
          <Transition
            visible={!visible}
            animation="vertical flip"
            duration={200}
          >
            <Icon color="white" name="angle double down" size="large" />
          </Transition>
        </div>
      </button>
      <TransitionGroup animation="slide down" duration={500}>
        {open && (
          <ul>
            <li>
              We are now listed on cnft.tools{" "}
              <a
                href="https://cnft.tools/spacebabez"
                target="_blank"
                rel="noreferrer"
              >
                https://cnft.tools/spacebabez
              </a>
            </li>
            <li>
              Check out our secondary market sales here{" "}
              <a
                href="https://opencnft.io/eEGjZJRB5LcoM32zDa8"
                target="_blank"
                rel="noreferrer"
              >
                https://opencnft.io/eEGjZJRB5LcoM32zDa8
              </a>
            </li>
            <li>
              Verified on{" "}
              <ul>
                <li>
                  <a
                    href="https://cnft.io/marketplace?st=spacebabez"
                    target="_blank"
                    rel="noreferrer"
                  >
                    CNFT.io
                  </a>
                </li>
                <li>
                  <a
                    href="https://nftjam.io/space-babez"
                    target="_blank"
                    rel="noreferrer"
                  >
                    NFTJam.io
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.genesishouse.io/collections/1488"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Genesishouse.io
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        )}
      </TransitionGroup>
    </div>
  );
}
