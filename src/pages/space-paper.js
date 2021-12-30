import React, { useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Header } from "semantic-ui-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import obsidian from "react-syntax-highlighter/dist/cjs/styles/hljs/obsidian";
import { Helmet } from "react-helmet";

export default function Paper() {
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
        <title>Space Paper</title>
        <link rel="icon" type="image/png" href="/ft/favicon-32x32.png" />
      </Helmet>
      <Container text textAlign="left" className="paper">
        <Header color="white" as="h1">
          Space Paper
        </Header>
        <p>
          by <strong>Dii Casses</strong>
          <br />
          <small>12/27/2021</small>
        </p>

        <div className="paper-content">
          <p>
            <span className="tab" />
            Sometime around spring I learned what NFTs were and launched my
            first project called PIXEL TREES. The idea was simple create some
            NFT trees to raise money for planting real trees. 999 total NFT
            trees were created which were tied to a unique ID that represents
            which tree was planted. I only sold a few, so I reorganized the
            project with simpler number of traits and relaunched in August 2021.
            The project sold out in about 3 days.
          </p>
          <p>
            <span className="tab" />
            That gave me the confidence and knowledge I needed to launch my next
            NFT project OOZ1ES. Although sales are slow right now that gave me
            the experience, I needed to launch the more complex NFT project
            Space Babez.
          </p>
          <p>
            <span className="tab" />
            The idea for Space Babez came to me around April 2021. My pixel
            artist and I were trying to think of some ideas for an NFT project
            when I came up with Space Babez. I basically said to him what if
            there were sexy women in space and their boob size changed. (The
            whole boob thing proved to be a big headache to pull off, but don't
            think anyone else has done it.)
          </p>
          <p>
            <span className="tab" />
            Then I realized that Space Babez would work well in the Anti.biz
            lore because there are spectators that oversee the two teams
            battling each other. (Ancient Ones (Gods), Space Babez, Glaza A.I).
            Also, sexually explicit content happens in the story, so I thought
            hot babez in space would work well within the context of the story.
            The Space Babez idea was also better then what I was going to make
            it which was your standard green aliens. (Though the babez might use
            them as pets in the story.)
          </p>
          <p className="paper-title">
            Challenge <span>#1</span>
          </p>
          <p>
            <span className="tab" />
            Creating Space Babez posed many different challenges, and even more
            once we added a moving element with the Vortex. The Vortex
            introduced a RGB problem which made transparency impossible. So we
            had to move to RGBA so that there weren't any errors in the output.
            This affected our Accent Colors (eyebrows and lipstick). To solve
            this problem, we removed transparency from the lip stick on the
            babez.
          </p>
          <p className="paper-title">Current</p>
          <StaticImage
            alt="img"
            placeholder="blurred"
            src="../images/doc/image004.png"
          />
          <p className="paper-title">Original</p>
          <StaticImage
            alt="img"
            placeholder="blurred"
            src="../images/doc/image006.png"
          />
          <p>
            <span className="tab" />
            Removing it completely from the eyebrows made them look very weird,
            so we decided to make the shadow as light as possible to give the
            eyebrows some definition still.
          </p>
          <p className="paper-title">No shading on eyebrows</p>
          <StaticImage
            alt="img"
            placeholder="blurred"
            src="../images/doc/image008.png"
          />
          <p className="paper-title">
            Challenge <span>#2</span>
          </p>
          <p>
            <span className="tab" />
            The hair was a big challenge in many ways. The first being the hair
            color and the body colors. Having 24 hair colors and 17 body colors
            proved challenging. We had to use higher contrast hair colors for it
            to work on all the body colors.
          </p>
          <p className="paper-title">Original</p>
          <StaticImage
            alt="img"
            placeholder="blurred"
            src="../images/doc/image010.png"
          />
          <p>
            <span className="tab" />
            The original Ponytail looked a lot nicer, but we decided to go with
            this higher contrasted version.
          </p>
          <StaticImage
            alt="img"
            placeholder="blurred"
            src="../images/doc/image012.png"
          />
          <p>
            <span className="tab" />
            The old red hair on the red body worked well, but not on all the
            body colors.
          </p>
          <br />
          <p>
            <span className="tab" />
            Same with the Accent colors, we had to use very dark colors for it
            to work across all the different Alien Species/body colors for the
            lips & eyebrows. (We left the nails alone.)
          </p>
          <p className="paper-title">Original (yellow)</p>
          <StaticImage
            alt="img"
            placeholder="blurred"
            src="../images/doc/image014.png"
          />
          <p className="paper-title">Darker (yellow)</p>
          <StaticImage
            alt="img"
            placeholder="blurred"
            src="../images/doc/image015.png"
          />
          <p>
            <span className="tab" />
            You can see the brighter lipstick color had a messier looking lip.
          </p>
          <p>
            <span className="tab" />
            Certain colors were hard to get to look good on the darker toned
            body colors. Specifically, the brown, copper, yellow, orange,
            bronze, etc. Would have probably been easier just to remove the
            colors that didn't work. But I decided just to darken the lip color.
            This could possibly be fixed by making a higher resolution pixel
            drawing, so that the lips have more definition. But I am just
            guessing as I am not the artist.
          </p>
          <StaticImage
            alt="img"
            placeholder="blurred"
            src="../images/doc/image016.png"
          />
          <p>
            <span className="tab" />
            If we compare the green on the Shadow Alien Species
          </p>
          <p>
            <span className="tab" />
            And green on the Nordic Alien Species they don't look too different.
          </p>
          <StaticImage
            alt="img"
            placeholder="blurred"
            src="../images/doc/image018.png"
          />
          <p className="paper-title">
            Challenge <span>#3</span>
          </p>
          <p>
            <span className="tab" />
            The Accessories (glasses) in the order they were generated comes
            after the hair. But since some of the hair goes over the ears, we
            had to put in special conditions so that some accessories come
            before the hair. I imagine this is very common with most NFT
            projects to have certain traits come before or after to make it look
            good. But since we had 24 hairstyles + 24 helmets of the same
            hairstyle this created a bunch of new problems for us.
          </p>
          <p>
            <span className="tab" />
            We had a lot of the hairstyles going over the ears. Which covered up
            earrings, etc. So, we cut most of the hairstyles around the ears
            except a few.
          </p>
          <StaticImage
            alt="img"
            placeholder="blurred"
            src="../images/doc/image020.png"
          />
          <StaticImage
            alt="img"
            placeholder="blurred"
            src="../images/doc/image022.png"
          />
          <p>
            <span className="tab" />
            This made things a bit easier and was a quick fix. The old
            hairstyles covered a lot more of the ears. Kind of felt like making
            a video game where you only have so much memory to work with, so you
            have to come up with some creative solutions.
          </p>
          <p>
            <span className="tab" />
            Certain hairstyles had an exposed ear and covered ear.
          </p>
          <StaticImage
            alt="img"
            placeholder="blurred"
            src="../images/doc/image024.png"
          />
          <p>
            <span className="tab" />
            You can see when you add accessories on top this is how it looks.
          </p>
          <StaticImage
            alt="img"
            placeholder="blurred"
            src="../images/doc/image026.png"
          />
          <p>
            <span className="tab" />
            So, we needed to add the accessories behind the hair.
          </p>
          <StaticImage
            alt="img"
            placeholder="blurred"
            src="../images/doc/image028.png"
          />
          <p>
            <span className="tab" />
            This works great for this hair style.
          </p>
          <p>
            <span className="tab" />
            But certain hairstyles would put the accessories behind the hair.
          </p>
          <StaticImage
            alt="img"
            placeholder="blurred"
            src="../images/doc/image030.png"
          />
          <p>
            <span className="tab" />
            Let's just say there were a lot of conditions to get this to look as
            good as possible. Then when we added the helmet in it caused similar
            problems just in a different way. Luckily it worked out in the end.
          </p>
          <p className="paper-title">
            Challenge <span>#4</span>
          </p>
          <p>
            <span className="tab" />
            Tattoo generation on each of the Space Babez leg. We had to try a
            bunch of different fonts to get it large enough, but also fit on the
            leg without being too blurry. As we were not able to get a perfectly
            crisp image, but were able to get it to look pretty good. Also, I
            think we were the first to do this on any NFT project out there woo!
          </p>
          <StaticImage
            alt="img"
            placeholder="blurred"
            src="../images/doc/image032.png"
          />
          <p>
            <span className="tab" />
            Here is the Python script we used to make this happen
          </p>
          <SyntaxHighlighter language="python" style={obsidian} showLineNumbers>
            {`from PIL import ImageDraw, ImageFont
myFont = ImageFont.truetype('04B_03__.ttf', 15)
lines = []   
def generateTattoo(x, num):
    num = str(num)
    d1 = ImageDraw.Draw(x)
    # width = 316 - (len(num) * 4) - 3 # retro_computer
    width = 316 - (len(num) * 4) - 1 # 04B_03
    d1.text((width, 363), str(num), font=myFont, fill = (0, 0, 0))`}
          </SyntaxHighlighter>
          <p className="paper-title">
            Challenge <span>#5</span>
          </p>
          <p>
            <span className="tab" />
            The idea to make the stars in the background generative was because
            I wanted the project to be more dynamic and expressive and not so
            static with the same few backgrounds. (are we the first that did the
            star background? :D)
          </p>
          <p>
            <span className="tab" />
            There were 7 star colors which used 8 different star shapes.
          </p>
          <p className="paper-title">Red</p>
          <p>
            <span className="tab" />
            <StaticImage src="../images/doc/red1.png" alt="Red" />
            <StaticImage src="../images/doc/image034.png" alt="Red" />
            <StaticImage src="../images/doc/image036.png" alt="Red" />
            <StaticImage src="../images/doc/image038.png" alt="Red" />
            <StaticImage src="../images/doc/image040.png" alt="Red" />
            <StaticImage src="../images/doc/image042.png" alt="Red" />
            <StaticImage src="../images/doc/image044.png" alt="Red" />
            <StaticImage src="../images/doc/image046.png" alt="Red" />
          </p>
          <p className="paper-title">Multicolored</p>
          <p>
            <span className="tab" />
            <StaticImage src="../images/doc/image047.png" alt="Red" />
            <StaticImage src="../images/doc/image048.png" alt="Red" />
            <StaticImage src="../images/doc/image049.png" alt="Red" />
            <StaticImage src="../images/doc/image050.png" alt="Red" />
            <StaticImage src="../images/doc/image051.png" alt="Red" />
            <StaticImage src="../images/doc/image052.png" alt="Red" />
            <StaticImage src="../images/doc/image053.png" alt="Red" />
          </p>
          <p>
            <span className="tab" />
            Here is the python code we used to make it happen
          </p>
          <SyntaxHighlighter
            language="python"
            style={obsidian}
            wrapLines
            showLineNumbers
          >
            {`from PIL import Image
import random
from os import listdir

def setUp(folderName):
    def getName(a):
        if type(a) is bytes:
            iFolder = i.decode("utf-8")
        else:
            iFolder = a
        return iFolder
    fileStructure = {}
    for i in listdir(folderName):
        iFolder = getName(i)
        fileStructure[iFolder] = []
        for o in listdir(folderName + "/" + iFolder):
            file = getName(o)
            fileStructure[iFolder].append(file)
    return fileStructure

paths = setUp("mainFiles/Stars")
width = 576
height = 700

def generateBG(bgColor):
    backG = Image.open("background.png").convert("RGB")
    for j in range(random.randint(50, 150)):
        IStar = random.choice(paths[bgColor])
        TStar = Image.open(f"mainFiles/Stars/{bgColor}/{IStar}")
        backG.paste(TStar, (random.randint(0, width), random.randint(0, height)), TStar)
    return backG`}
          </SyntaxHighlighter>
          <p className="paper-title">
            Challenge <span>#6</span>
          </p>
          <p>
            <span className="tab" />I mentioned the Vortex above and how it
            affected the transparency of the PNG assets. But getting a perfectly
            smooth frame rate in the final assets caused a lot of problems. At
            one point I had at least 5 coders trying to figure it out and
            another 2-3 who said it was impossible to do.
          </p>
          <StaticImage
            alt="img"
            placeholder="blurred"
            src="../images/doc/image054.png"
          />
          <p>
            <span className="tab" />
            There is a total of 96 frames @ 20 ms for each frame for the Vortex
            & final NFT. When we first started doing the outputs all the frames
            would be a different time like 40 ms, 30 ms, etc. Luckily the coders
            figured it out and we have the Space Babez NFT in its current state.
            If I were to do this again, I would make the moving element from
            scratch and not use a video converted to GIF. (Though I do think it
            gives it a lo-fi aesthetic using a different medium. As I am not
            sure how the original video was created and was pretty much sampled
            from an unknown source.)
          </p>
          <p>
            <span className="tab" />
            Originally we created constellations. So birth months & animal
            constellations on each side that would blink on and off. But for
            whatever reason I decided I didn't like the look and changed it to
            this Vortex which I think looks a lot better.
          </p>
          <p>
            <span className="tab" />I think the next evolution of Space Babez
            would be some form of Base64 encoding, so that the background could
            be evolving with the babe in the foreground.
          </p>
          <p className="paper-title">
            Challenge <span>#7</span>
          </p>
          <p>
            <span className="tab" />
            The next challenge was the Boob Size. Yes, it would have been a lot
            easier just making 1 Boob Size. A whole lot easier! But where would
            the fun be in that? For the 7 different Boob sizes we needed to
            create a unique outfit. So, for the 18 outfits this means we had to
            create 7 versions of them. And on many of the outfits we had to
            create another 17 versions with the different colored bodies! Some
            outfits don't show skin, so we could copy some of them, which helped
            a lot. That's why you will see like Yellow Body Suit and Blue Body
            Suit. To make the project not so repetitive, but also not kill the
            artist with drawing stuff. We just changed the colors on somethings.
            I spent a lot of time coloring assets myself cas the pixel artist
            was busy with other things.
          </p>
          <p className="paper-title">Example</p>
          <StaticImage
            alt="img"
            placeholder="blurred"
            src="../images/doc/image056.png"
          />
          <StaticImage
            alt="img"
            placeholder="blurred"
            src="../images/doc/image058.png"
          />
          <p>
            <span className="tab" />
            Some simple math, Outfits 18 x Alien Species 17 x 7 Boob Sizes =
            2,142 total outfits! And yes, I had to name every single one of
            these by hand because the pixel art program couldn't export the
            names correctly! So, for the 17 Alien Species there were 126 outfits
            each. 126x17= 2,142.
          </p>
          <p>
            <span className="tab" />
            There was bound to be something overlooked, and one of the NAJDORF
            outfits (Bubbles) had one dark boob. It was the body color we had
            prior before I lightened the body color to match the shadow body
            color. (Because the black space background made it blend in too
            much)
          </p>
          <p>
            <span className="tab" />
            **And if we ever make a Space Babez #2 you can expect we will push
            the Boobs even further. (Triple boob anyone?)
          </p>
          <p>
            <span className="tab" />
            Trust me my pixel artist was annoyed drawing each of these shirts
            differently for each boob size.
          </p>
          <p className="paper-title">Boob Size D</p>
          <StaticImage
            alt="img"
            placeholder="blurred"
            src="../images/doc/image060.png"
          />
          <p className="paper-title">Boob Size F</p>
          <StaticImage
            alt="img"
            placeholder="blurred"
            src="../images/doc/image062.png"
          />
          <p>
            <span className="tab" />
            The artist wanted to make each 9 changes with the shape of the boob
            size, but to make his life easier I decided to keep the 9 the same
            on all.
          </p>
          <p>
            <span className="tab" />
            You can see this change with the Space Suit more. It was more
            pronounced in older versions we had, like the circle and triangle
            would change shape under the boobs.
          </p>
          <p className="paper-title">Boob Size C</p>
          <StaticImage
            alt="img"
            placeholder="blurred"
            src="../images/doc/image064.png"
          />
          <p className="paper-title">Boob Size D</p>
          <StaticImage
            alt="img"
            placeholder="blurred"
            src="../images/doc/image066.png"
          />
          <p>
            <span className="tab" />
            This change was a lot more dramatic in the original drawings, but we
            decided to simplify it more.
          </p>
          <p className="paper-title">
            Challenge <span>#8</span>
          </p>
          <p>
            <span className="tab" />
            Powers was a late addition I added to Space Babez. I was throwing
            around the idea of creating Constellations (which I made, but
            Constellations became the Vortex. I knew it needed something on the
            sides but didn't know what. The first thing I tried was a signature
            which became constellations.)
          </p>
          <p>
            <span className="tab" />
            Powers was a fun idea but didn't come out as perfectly as I wanted.
            Mostly due to miscommunication and the large size of the project.
            (Basically, keeping track of everything in the project and going
            through each NFT.) I did have an overview of the output with
            Stats.json but didn't notice the low numbers of powers for certain
            ones.
          </p>
          <p>
            <span className="tab" />
            For example, Cleopatra power was supposed to be activated with
            Cleopatra hair or Cleopatra Helmet + Golden Whip, Snake Whip and
            White Laser Whip. Not totally a big deal but kind of wish I noticed
            that mistake. One thing I will take into consideration in future
            projects is take more time verifying the final output. Even though I
            spent 2 months working on the project to get it as perfect as I
            could I did overlook a few things I considered a mistake.
          </p>
          <p>
            <span className="tab" />
            Another problem was with Marilyn Power. It was supposed to be
            Marilyn Hair or Marilyn Helmet + Diamond Earrings or Diamond
            Bracelet. Diamond Bracelet some how became Emerald Earrings. Not too
            big of a deal but when you got OCD about things being perfect it is
            a bit annoying.
          </p>
          <p>
            <span className="tab" />
            To better understand the powers here is the explanation:
          </p>
          <p className="paper-title">Powers: 11</p>
          <ol type="i">
            <li>
              <strong>Style Power </strong>
              <br />
              Necklace + Gloves + Shoes + Earrings + Accessories
            </li>
            <li>
              <strong>Boob Power </strong>
              <br /> G Sized Boobs
            </li>
            <li>
              <strong>Heart Power </strong>
              <br /> Red Heart Earrings or Green Heart Earrings + Red heart
              glasses or Green Heart glasses or Heart Choker
            </li>
            <li>
              <strong>Spiked Power </strong>
              <br /> Spiked collar + Spiked Garters or Spiked gloves
            </li>
            <li>
              <strong>Latex Power </strong>
              <br /> Latex Outfit + Latex Gloves or Latex Boots
            </li>
            <li>
              <strong>Pussy Power </strong>
              <br /> Nude + No gloves (certain gloves, bracelets and stuff is
              fine)
            </li>
            <li>
              <strong>Leia Power </strong>
              <br /> Leia hair or Leia helmet + Red Devil Blade, Green Laser
              Sword, Blue Laser Sword, Pink Destiny Sword
            </li>
            <li>
              <strong>Space Power </strong>
              <br /> Space Helmet + Space Suit + Space Gloves or Space Gun or
              Space Boots
            </li>
            <li>
              <strong>Dorothy Power </strong>
              <br /> Dorothy hair or Dorothy Helmet + Ruby Slippers or Ruby
              earrings
            </li>
            <li>
              <strong>Marilyn Power </strong>
              <br /> Marilyn Hair or Marilyn Helmet + Diamond Earring or Emerald
              Earring
            </li>
            <li>
              <strong>Cleopatra Power </strong>
              <br /> Cleopatra Hair or Cleopatra Helmet + Golden Whip
            </li>
          </ol>
          <p className="paper-title">Conclusion</p>
          <p>
            <span className="tab" />
            This project was a lot of fun to work on but required a lot of
            effort and trial and error to pull off. I am excited for what the
            future of Space Babez might be. I do like creating things in this
            universe, so am grateful for all the support I have been getting for
            my project. Expect to see more of Space Babez in different mediums
            from storytelling, comics, toys and other forms of art on and off
            the blockchain. Who knows what the future hodls for Space Babez. But
            if you're a fan of what we've created so far. You should hang around
            some more and see where we can go together!
          </p>
          <p className="paper-title">Reference</p>
          <p>Categories: 16</p>
          <ul>
            <li>
              <strong>Accent Color </strong>
              <small>(Eyebrow, nail and lip color)</small>&mdash; 24
            </li>
            <li>
              <strong>Accessories </strong>
              <small>(Glasses, bubblegum and scouter)</small>&mdash; 18
            </li>
            <li>
              <strong>Alien Species </strong>
              <small>(body colors)</small>&mdash; 17
            </li>
            <li>
              <strong>Boob Size </strong>
              <small>(7 different boob sizes)</small>&mdash; 7
            </li>
            <li>
              <strong>Earrings </strong>
              &mdash; 18
            </li>
            <li>
              <strong>Gloves </strong>
              &mdash; 19
            </li>
            <li>
              <strong>Hair </strong>
              &mdash; 24
            </li>
            <li>
              <strong>Hairspray Bonus </strong>
              <small>(a bonus that appears 31% of the time)</small>&mdash; 2
            </li>
            <li>
              <strong>Helmets </strong>
              <small>(Appear 31% of the time)</small>&mdash; 2
            </li>
            <li>
              <strong>Necklace </strong>
              <small>
                (Necklaces go in front of some outfits and behind others)
              </small>
              &mdash; 18
            </li>
            <li>
              <strong>Outfits </strong>
              <small>
                (Outfits that change based on boob size, 126 outfits per alien
                species *outfit x alien species x boob size)
              </small>
              &mdash; 18
            </li>
            <li>
              <strong>Powers </strong>
              <small>
                (Colorful background behind the babez based on certain
                conditions)
              </small>
              &mdash; 11
            </li>
            <li>
              <strong>Shoes </strong>
              &mdash; 19
            </li>
            <li>
              <strong>Stars </strong>
              <small>(Programmatically generated stars)</small>&mdash; 7
            </li>
            <li>
              <strong>Vortex </strong>
              <small>(Animated GIF on the sides)</small>&mdash; 9
            </li>
            <li>
              <strong>Weapon </strong>
              <small>
                (Held in right hand, some weapons on both hands, and left hand
                *brass knuckles)
              </small>
              &mdash; 24
            </li>
          </ul>
          <p className="paper-title">Python Scripts</p>
          <p>
            <span className="tab" />
            If you clone our project or use our scripts, please give credit to{" "}
            <a href="https://anti.biz">Anti.biz</a>
          </p>
          <p>
            <a download href="/ft/scripts.zip" className="downloader">
              <i
                aria-hidden="true"
                className="large code fitted icon purple"
                style={{ color: "#9b6ede" }}
              ></i>
              &nbsp;&nbsp;Download
            </a>
          </p>
          <br />
          <p>Download all the Space Babez with our torrent here</p>
          <p>
            <a
              download
              href="/ft/SpaceBabez.torrent"
              className="downloader green"
            >
              <i
                aria-hidden="true"
                className="large magnet fitted icon green"
                style={{ color: "#9b6ede" }}
              ></i>
              &nbsp;&nbsp;Torrent Download
            </a>
          </p>
          <br />
          <p>
            <small>
              Copyright &copy; <a href="https://anti.biz">Anti.biz</a>
            </small>
          </p>
        </div>
      </Container>
      <div style={{ height: 20 }}></div>
    </>
  );
}
