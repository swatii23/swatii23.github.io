import React from "react";
import "./Card.css";
import html from "../../Images/html.png";
import css from "../../Images/CSS.png";
import JS from "../../Images/js.png";
import Git from "../../Images/git.png";
import p4 from "../../Images/p4.png";
import ReactLogo from "../../Images/react.png";


const P4Card = () => {
  return (
    <div>
      <div className="firstProjectDisplay">
        <div className="firstProject1">
          <a
            target="blank"
            href="https://github.com/swatii23/swatii23.github.io"
          >
            <img src={p4} alt="Portfolio" className="projectImg1" />
          </a>
        </div>
        <div>
          <h2>Portfolio</h2>
        </div>
        <div>
          <img src={ReactLogo} alt="React" />
          <img src={JS} alt="JS" />
          <img src={Git} alt="GitHub" />
        </div>
        <div>
          <p>HTML || JS || Git</p>
          <br />
          <p>
          This is my portfolio project! This project contains all the valuable insights of me.{" "}
          </p>
        </div>
        <div>
          <button>
            <a
              target="blank"
              href="https://swatii23.github.io/"
            >
              Link
            </a>
          </button>
          <button>
            <a
              target="blank"
              href="https://github.com/swatii23/swatii23.github.io"
            >
              Github
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default P4Card;
