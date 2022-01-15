import React from "react";
import { Icon, Transition } from "semantic-ui-react";

export default function Banner() {
  const [closed, setClosed] = React.useState(false);
  return (
    <Transition animation="slide down" duration={400} visible={!closed}>
      <div className="banner">
        <p>
          Check our secondary market on{" "}
          <a href="https://opencnft.io/eEGjZJRB5LcoM32zDa8">OpenCNFT.IO</a>
        </p>
        <button onClick={() => setClosed(true)}>
          <Icon name="close" />
        </button>
      </div>
    </Transition>
  );
}
