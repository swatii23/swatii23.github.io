import React from "react";
import "./Card.css";
import html from "../../Images/html.png";
import css from "../../Images/CSS.png";
import JS from "../../Images/js.png";
import ReactLogo from "../../Images/react.png";
import ReduxLogo from "../../Images/redux.png";
import bootstrap from "../../Images/bootstrap.png";
import p1 from "../../Images/p1.png";

const P1Card = () => {
  return (
    <div>
      <div className="firstProjectDisplay">
        <div className="firstProject1">
          <a
            target="blank"
            href="https://github.com/swatii23/Bed-Bath-Beyond"
          >
            <img src={p1} alt="Bed-Bath-Beyond" className="projectImg1" />{" "}
          </a>
        </div>
        <div>
          <h2>Bed Bath & Beyond clone</h2>
        </div>
        <div>
          <img src={html} alt="HTML" />
          <img src={css} alt="CSS" />
          <img src={JS} alt="JS" />
        </div>
        <div>
          <p> HTML || CSS || JS </p>
          <br />
          <p>
          Bed Bath & Beyond is a popular retail chain in the United States that specializes in home goods and furnishings.
          </p>
        </div>
        <div>
          <button>
            <a
              target="blank"
              href="https://6509b685de9fe80cfc50d9a3--velvety-hotteok-be9bd4.netlify.app/"
            >
              Link
            </a>
          </button>
          <button>
            <a
              target="blank"
              href="https://github.com/swatii23/Bed-Bath-Beyond"
            >
              Github
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default P1Card;
