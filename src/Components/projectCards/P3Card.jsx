import React from "react";
import "./Card.css";
import html from "../../Images/html.png";
import css from "../../Images/CSS.png";
import JS from "../../Images/js.png";
import ReactLogo from "../../Images/react.png";
import ReduxLogo from "../../Images/redux.png"
import p3 from "../../Images/p3.png";

const P3Card = () => {
  return (
    <div>
      <div className="firstProjectDisplay">
        <div className="firstProject1">
          <a
            target="blank"
            href="https://github.com/swatii23/wood-fans"
          >
            <img src={p3} alt="Wood Fans" className="projectImg1" />
          </a>
        </div>
        <div>
          <h2>Wood Fans</h2>
        </div>
        <div>
              <img src={ReactLogo} alt="React"/>
              <img src={ReduxLogo} alt="Redux" />
              <img src={JS} alt="JS"/>
            </div>
            <div>
            <p>React || Redux || JS </p>
              <br/>
          <p>
          Welcome to Wood Fans, your premier destination for exquisite and sustainable furniture.{" "}
          </p>
        </div>
        <div>
          <button>
            <a
              target="blank"
              href="https://obscene-clam-8417.vercel.app/"
            >
              Link
            </a>
          </button>
          <button>
            <a
              target="blank"
              href="https://github.com/swatii23/wood-fans"
            >
              Github
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default P3Card;
