import React, { useState } from "react";
import { Accordion, Button, Icon, Transition } from "semantic-ui-react";

const data = [
  {
    title: "How can I buy a Space Babez?",
    description:
      'You can buy a Space Babez by clicking the BUY NOW button. This will bring up a pop-up that will display a Cardano payment address.<br/>There will also be information on how much<span class="pink"> ₳ADA </span>to send. For example<span class="pink"> 9 ₳ADA </span>will get you<span class="pink"> 1 </span>Space Babez. There will be discounts if you buy in bulk.<br/><br/><span style="color:red;font-weight:bold;">Send the exact amount listed, don\'t send extra fees. For example send exactly 9, the extra fee that is automatically added on is fine it will not affect you receiving your Space Babez! It can take up to a week or longer to receive a refund if you type in the wrong amount.</span><br/><br/>You will need a Cardano wallet like Daeladus (full node), Yoroi (light wallet), or Nami (light wallet, no hardware wallet support).<br/><br/>Inside of your Cardano wallet you will need some Cardano also known as<span class="pink"> ₳ADA</span>. If you live inside the USA you can buy some Cardano with a debit card or bank account @ <a class="u" href="https://www.bittrex.com" target="_blank" rel="noreferrer">www.bittrex.com</a> or <a class="u" href="https://www.crypto.com" target="_blank" rel="noreferrer">www.crypto.com</a> (great app which makes buying and sending<span class="pink"> ₳ADA </span>easy)<br/><br/>Do Not send<span class="pink"> ₳ADA </span>from an exchange, you will not receive your NFT there, make sure you\'re using one of the wallets above.<br/><br/>For those outside of the USA you should be able to buy<span class="pink"> ₳ADA </span>(Cardano) @ <a class="u" href="https://www.binance.com" target="_blank" rel="noreferrer">www.binance.com</a>',
  },
  {
    title: "What is a NFT?",
    description:
      'NFT is a Non Fungible Token which makes it unique and can\'t be replaced with something else. Think of these like a one-of-akind trading card. You will be able to trade, buy and sell these after you get<span class="pink"> 1</span>.<br/><br/>These NFTS will be minted on the Cardano blockchain as<span class="pink"> ₳ADA </span>is sent to the address. They will be distributed automatically in a fair random order. Which means that everyone has an equal chance of getting a rare Space Babez!<br/><br/>These Space Babez will be minted using a time-locked policy, meaning that no more Space Babez can be created (minted) or destroyed (burned) after a certain amount of time.<br/><br/>Therefore, by definition, all Space Babez are NFTs.<br/><br/>You can view the minting policy <a class="u" href="https://cardanoscan.io/tokenPolicy/06182641070ae8541d3bee4cca4a8aafaa55dc4e1fb916d645acc082" target="_blank" rel="noreferrer">here</a>.',
  },
  {
    title: "What is metadata?",
    description:
      'The metadata for each Space Babez is on-chain. What that means is that the Cardano blockchain stores the information of each NFT forever. Each NFT will store the description, image link, <a class="u" href="https://cardanoscan.io/tokenPolicy/06182641070ae8541d3bee4cca4a8aafaa55dc4e1fb916d645acc082" target="_blank" rel="noreferrer">policy</a>, links and unique traits of each Space Babez. When you purchase a Space Babez from our website (<a class="u" href="https://spacebabez.io">spacebabez.io</a>) the Space Babez NFT will be automatically sent to your wallet!',
  },
  {
    title: "What is a policy number?",
    description:
      'A single policy number for all <span class="pink">6,666</span> Space Babez will be created during the minting of each NFT. This is a way to know if you got an authentic Space Babez or someone is creating a knock-off or imitation. After the sale is over we will verify our <a class="u" href="https://cardanoscan.io/tokenPolicy/06182641070ae8541d3bee4cca4a8aafaa55dc4e1fb916d645acc082" target="_blank" rel="noreferrer">policy</a> on <a class="u" href="https://cnft.io" target="_blank" rel="noreferrer">CNFT.IO</a> please wait to verify the <a class="u" href="https://cardanoscan.io/tokenPolicy/06182641070ae8541d3bee4cca4a8aafaa55dc4e1fb916d645acc082" target="_blank" rel="noreferrer">policy</a> before buying or selling. It could take a few days or more depending on how long the admins of <a class="u" href="https://cnft.io" target="_blank" rel="noreferrer">CNFT.IO</a> take to verify our policy number! ',
  },
  {
    title: 'What does "Minting" mean?',
    description:
      "Minting means to create a NFT (Non Fungible Token or Fungible Token) on the Cardano blockchain. You can think of minting as it being created. As the Space Babez NFT doesn't exist till it's minted or created.  When you buy a Space Babez it is minted/created on the spot, so that it now permanently exist on the Cardano blockchain as metadata. There is a time-locked policy which will lock at a certain time, which will make it impossible for anymore Space Babez to be minted (created) or burned (destroyed) after that set time, <u>10/31/2022 11:59 PM</u>. Since all of the Space Babez are minted (created) using the same time-locked policy this increases their value as collectibles. You can think of this like a set of Pokémon characters that were created, but no more will be created like them ever again.",
  },
  {
    title: "How do I view my NFT?",
    description:
      'To view your NFT you can use a Cardano wallet like <a class="u" href="https://chrome.google.com/webstore/detail/nami-wallet/lpfcbjknijpeeillifnkikgncikgfhdo" target="_blank" rel="noreferrer">NAMI</a><br/>The easiest way is to input your Cardano receive address into the search bar @ <a class="u" href="https://pool.pm" target="_blank" rel="noreferrer">www.pool.pm</a> click the magnifying glass in the top right corner and add your address where you received the NFTS at. You will then be able to see your Space Babez NFTS (image, metadata)<br/>',
  },
  {
    title: "Are Space Babez a good investment?",
    description:
      'That is ultimately a decision for you to make. We believe Space Babez have a long life ahead of them, and will be an ever growing and evolving project. (On & off the blockchain) However the success of Space Babez relies on so many factors and variables, no one knows! Hopefully Space Babez go to the moon, but like anything in life, don\'t spend money you can\'t afford to not have.<br/><br/>Space Babez will soon be a registered trademark of <a href="https://anti.biz" target="_blank" rel="noreferrer">Anti.biz</a> and is integral part of the universe / lore of <a href="https://anti.biz" target="_blank" rel="noreferrer">Anti.biz</a> (comic books, toys, games, etc)<br/><br/>NFTs on Cardano is the first step in a long road for building the world of Space Babez. If you like the ideas and want to support the project we appreciate every that does. We promise to keep building this world for years and years to come. With every NFT you purchase you are helping us build this universe a lot faster then we could do on our own. In time with everyone\'s support it truly will become something epic!',
  },
  {
    title: "Who is the team that created Space Babez?",
    description:
      'The team is made up of the creator <a href="https://www.Twitter.com/diicasses" target="_blank" rel="noreferrer">@diicasses</a>, artist  <a href="https://instagram.com/cryptomuseumnft" target="_blank" rel="noreferrer">@cryptomuseumnft</a> coding, backend sales, and web development. Which is all a part of the business <a href="https://anti.biz" target="_blank" rel="noreferrer">Anti.biz</a>',
  },
  {
    title: "Who is Dii Casses?",
    description:
      'Dii Casses wants to remain anonymous as a mysterious artist. Dii Casses is also the name of the main character in the <a href="https://anti.biz" target="_blank" rel="noreferrer">Anti.biz</a> lore.<br/><br/><a href="https://anti.biz" target="_blank" rel="noreferrer">Anti.biz</a> has been in development since<span class="pink"> 2015 </span>and is planning on revamping the website with a completely new design, look and feel very soon.<br/><br/>In the future <a href="https://anti.biz" target="_blank" rel="noreferrer">Anti.biz</a> will have<span class="pink"> 3D </span>video streams of the main character, skits using props, new AR filters, clothes, gadgets, toys and more.<br/><br/>Expect us to keep building new content and projects for you to enjoy over the years. Our goal is to be a household name one day.<br/><br/>For more information check the <b>About Us</b> section on <a href="https://anti.biz" target="_blank" rel="noreferrer">Anti.biz</a>',
  },
  {
    title: "What can I do with my Space Babez?",
    description:
      "You are free to do anything with them under a non-exclusive license.",
  },
  {
    title: "How do I get involved?",
    description:
      'Head on over to <a href="https://discord.gg/5KE3H2tTzR" target="_blank"  rel="noreferrer">Discord</a> & <a href="https://www.twitter.com/spacebabez" target="_blank"  rel="noreferrer">Twitter</a> to jump into the conversation & share your ideas!~',
  },
];

export default function FAQ() {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  function toggleVisibility() {
    setVisible((v) => !v);
  }

  function handleClick(_, titleProps) {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  }

  return (
    <div>
      <Button
        fluid
        onClick={toggleVisibility}
        className={"faq-button" + (visible ? " opened" : "")}
        basic
      >
        <span>FAQ</span>
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
            <Icon color="black" name="angle double down" size="large" />
          </Transition>
        </div>
      </Button>
      <Transition
        visible={visible}
        animation="slide down"
        duration={400}
        unmountOnHide
      >
        <Accordion styled fluid>
          {data.map((d, idx) => (
            <React.Fragment key={idx}>
              <Accordion.Title
                active={activeIndex === idx}
                index={idx}
                onClick={handleClick}
              >
                <Icon name="dropdown" />
                {d.title}
              </Accordion.Title>
              <Accordion.Content active={activeIndex === idx}>
                <Transition.Group animation="slide down" duration={300}>
                  {activeIndex === idx && (
                    <p
                      style={{ fontSize: 22 }}
                      dangerouslySetInnerHTML={{ __html: d.description }}
                    />
                  )}
                </Transition.Group>
              </Accordion.Content>
            </React.Fragment>
          ))}
        </Accordion>
      </Transition>
    </div>
  );
}
