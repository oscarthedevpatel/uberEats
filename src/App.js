import "./App.css";
import React from "react";
import Navigation from "./components/Navbar/MyNavbar";
import FallingImages from "./components/FallingImages";

class App extends React.Component {
  render() {
    return (
      <div className="background custom-cursor">
        <FallingImages />

        <div>
          <Navigation />
        </div>

        {/* <div className="d-flex justify-content-center rotating-image">
       
          <img
            src={process.env.PUBLIC_URL + "/images/circleLogo.png"}
            style={{ width: "90%", height: "auto" }}
          />
        </div> */}

        <div className="access">
          <div className="access">
            The official page of: I’m serious but id rather try to turn $50 into
            7 figures than get a job ($UBEREATS)
          </div>
        </div>
        <div className="square">
          <p className="textMain">
            <div className="warning">WARNING</div>
            <div className="warningSub">
              Before prodceeding please make sure you:{" "}
            </div>
            <ul>
              <li> quit your job </li>
              <li> dump your girl </li>
              <li> litter in public </li>
              <li> punch a postmates user in the mouth </li>
            </ul>
          </p>
        </div>
        <br />
        <div className="square">
          <p className="textMain">
            <div id="utility" className="headerBox">
              How to Order UBEREATS
            </div>
            <ul>
              <li> Download metamask and create an account </li>
              <li>
                {" "}
                Connect metamask to uniswap or dexView and aquire some @Coinbase{" "}
              </li>
              <li>
                {" "}
                CONTRACT ADDRESS: 0x367cC5042E8eb850fE0e78a84b2f0df2A6aa027a
              </li>
              <li> become a 7 figure man</li>
            </ul>
          </p>
        </div>
        <br />

        <div className="image-container">
          {/* <div className="center-img">
            <img
              src={process.env.PUBLIC_URL + "/images/pepe-red-pill.gif"}
              style={{ width: "80%", height: "auto" }}
            />
          </div>
          <div className="center-img">
            <img
              src={process.env.PUBLIC_URL + "/images/pepered.jpg"}
              style={{ width: "90%", height: "auto" }}
            />
          </div> */}
        </div>

        <div className="square">
          <p className="textMain">
            <div id="utility" className="headerBox">
              Our Core Values
            </div>
            <ul>
              <li> DoorDash eats your fries </li>
              <li> Postmates tries your bev </li>
              <li> Seamless is for NPCs </li>
              <li> Don't even ask about GrubHub </li>

              {/* <li>
                {" "}
                donald trump{" "}
                <audio controls autoPlay>
                  <source
                    src={process.env.PUBLIC_URL + "/really-rich.mp3"}
                    type="audio/mpeg"
                  />
                </audio>
              </li> */}
            </ul>
          </p>
        </div>
        {/* <div className="center-img">
          <img
            src={process.env.PUBLIC_URL + "/images/thread.png"}
            style={{ width: "100%", height: "auto" }}
          />
        </div> */}

        <br />
        <div className="square">
          <p className="textMain">
            <div id="utility" className="headerBox">
              Our Story
            </div>
            Ladies and gentlemen, gather 'round, because we have a
            groundbreaking new token that's about to revolutionize the way you
            think about financial success. Presenting UBEREATS, the
            cryptocurrency for the ambitious souls who believe that getting a
            "real" job is for the birds. Why work tirelessly at a 9-to-5 when
            you can HODL your way to 7 figures? It's simple, really. With
            UBEREATS, we've combined the art of doing absolutely nothing
            productive with the science of financial speculation. Are you tired
            of those pesky job interviews and résumé-building exercises? Say
            goodbye to dressing up in suits and ties and hello to your trusty
            sweatpants and bunny slippers. UBEREATS empowers you to invest in
            your future from the comfort of your living room. And let's not
            forget about the noble quest of turning $50 into 7 figures. Why
            settle for a salary when you can dream big? With UBEREATS, we
            encourage you to reach for the stars and probably overshoot to
            another galaxy altogether. Now, you might be wondering, what does
            UBEREATS bring to the table in terms of technology? Well, we've
            harnessed the incredible power of daydreaming and mixed it with a
            sprinkle of wishful thinking. It's a blockchain that's as strong as
            your conviction that Dogecoin will take you to the moon. UBEREATS is
            not just a token; it's a lifestyle choice. The next time someone
            asks you about your career, proudly tell them you're a full-time
            crypto enthusiast, courtesy of UBEREATS. Whether you're on the brink
            of financial greatness or spiraling into the abyss of debt, remember
            that UBEREATS has your back... or maybe not. But hey, who needs a
            safety net when you've got crypto dreams? So, why work for a living
            when you can HODL for a fortune? UBEREATS: because "I’m serious but
            I'd rather try to turn $50 into 7 figures than get a job" is more
            than just a name; it's a philosophy.
          </p>
        </div>
        {/* <div className="center-img">
          <img
            src={process.env.PUBLIC_URL + "/images/erectile.gif"}
            style={{ width: "85%", height: "auto" }}
          />
        </div>
        <br /> */}

        {/* <div className="square">
          <p className="textMain">
            <div id="utility" className="headerBox">
              Testimonials
            </div>

            <audio controls>
              <source
                src={process.env.PUBLIC_URL + "/getsmegoing.mp3"}
                type="audio/mpeg"
              />
            </audio>
            <audio controls>
              <source
                src={process.env.PUBLIC_URL + "/vaxed.mp3"}
                type="audio/mpeg"
              />
            </audio>
            <audio controls>
              <source
                src={process.env.PUBLIC_URL + "/oldfree.mp3"}
                type="audio/mpeg"
              />
            </audio>
          </p>
        </div> */}

        <br />
        <div className="image-container">
        <div className="center-img">
          <img
            src={process.env.PUBLIC_URL + "/images/fires.png"}
            style={{ width: "50%", height: "auto" }}
          />
        </div>
        <div className="center-img">
          <img
            src={process.env.PUBLIC_URL + "/images/EBT.png"}
            style={{ width: "50%", height: "auto" }}
          />
        </div>
        <div className="center-img">
          <img
            src={process.env.PUBLIC_URL + "/images/hot.jpeg"}
            style={{ width: "50%", height: "auto" }}
          />
        </div>
        <div className="center-img">
          <img
            src={process.env.PUBLIC_URL + "/images/anime.jpeg"}
            style={{ width: "50%", height: "auto" }}
          />
        </div>
        <div className="center-img">
          <img
            src={process.env.PUBLIC_URL + "/images/wojack.png"}
            style={{ width: "50%", height: "auto" }}
          />
        </div>
        {/* floating ponies */}
        <div className="parent">
          <div className="floating-img top-left">
            <img
              src={process.env.PUBLIC_URL + "/images/pony.gif"}
              style={{ width: "100px", height: "auto", opacity: 0.8 }}
            />
          </div>
          <div className="floating-img top-right">
            <img
              src={process.env.PUBLIC_URL + "/images/pony.gif"}
              style={{ width: "100px", height: "auto", opacity: 0.8 }}
            />
          </div>
        </div>
        </div>
      </div>
    );
  }
}
export default App;
