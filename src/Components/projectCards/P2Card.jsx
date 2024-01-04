import React from "react";
import "./Card.css";
import html from "../../Images/html.png";
import css from "../../Images/CSS.png";
import JS from "../../Images/js.png";
import Git from "../../Images/git.png"
import p2 from "../../Images/p2.png";

const P2Card = () => {
  return (
    <div>
      <div className="firstProjectDisplay">
        <div className="firstProject1">
          <a
            target="blank"
            href="https://github.com/swatii23/glorious-calendar-2511"
          >
            <img src={p2} alt="gordon resort" className="projectImg1" />
          </a>
        </div>
        <div>
          <h2>Gordon Resort Hotel</h2>
        </div>
        <div>
          <img src={html} alt="HTML" />
          <img src={css} alt="CSS" />
          <img src={JS} alt="JS" />
        </div>
        <div>
          <p>HTML || CSS || JS t</p>
          <br />
          <p>
          Our hotel website is a showcase of sophistication and convenience.
          </p>
        </div>
        <div>
          <button>
            <a
              target="blank"
              href="https://653652c73f8e7f008122786e--elegant-pudding-10faed.netlify.app"
            >
              Link
            </a>
          </button>
          <button>
            <a
              target="blank"
              href="https://github.com/swatii23/glorious-calendar-2511"
            >
              Github
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default P2Card;
