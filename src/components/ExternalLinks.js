import React from "react";
import { TransitionGroup } from "semantic-ui-react";

export default function ExternalLinks() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="ext-links">
      <button onClick={() => setOpen(!open)}>
        <h1 className="section-header">External Links</h1>
      </button>
      <TransitionGroup animation="slide down" duration={500}>
        {open && (
          <ul>
            <li>
              We are now listed at cnft.tools{" "}
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
