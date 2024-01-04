import React from "react";
import "./Styles/Skills.css";
import html from "../Images/html.png";
import css from "../Images/CSS.png";
import JS from "../Images/js.png";
import ReactLogo from "../Images/react.png";
import ReduxLogo from "../Images/redux.png";
import nodeJS from "../Images/nodeJS.png";
import java from "../Images/java.jpeg";
import MongoDB from "../Images/mongodb.png";
import NPM from "../Images/npm.png";
import Git from "../Images/git.png";
import skills from "../Images/skills.png";
import Netlify from "../Images/netlify.png";
import DSA from "../Images/DSA.jpeg";
import Vercel from "../Images/vercel.png";
import VSCode from "../Images/VSCode.png"

export const Skills = () => {
  return (
    <div className="mainSkillDiv">
      <div id="skill">
        <div>
          <h1>My Technical Skills</h1>
        </div>
        <div className="teckdetails">
          <div>
            <div>
              <h1>Teck Stack</h1>
            </div>
            <div className="skillsDiv">
              <div className="skillsDivSection">
                <div>
                  <img src={html} alt="HTML" />
                </div>
                <h3>HTML</h3>
              </div>
              <div className="skillsDivSection">
                <div>
                  <img src={css} alt="CSS" />
                </div>
                <h3>CSS</h3>
              </div>
              <div className="skillsDivSection">
                <div>
                  <img src={JS} alt="JS" />
                </div>
                <h3>JavaScript</h3>
              </div>
              <div className="skillsDivSection">
                <div>
                  <img src={java} alt="java" />
                </div>
                <h3>Java</h3>
              </div>
              <div className="skillsDivSection">
                <div>
                  <img src={DSA} alt="DSA" style={{ borderRadius: "50%" }} />
                </div>
                <h3>DSA</h3>
              </div>
              <div className="skillsDivSection">
                <div>
                  <img src={ReactLogo} alt="React" />
                </div>
                <h3>React</h3>
              </div>
              <div className="skillsDivSection">
                <div>
                  <img src={ReduxLogo} alt="redux" />
                </div>
                <h3>Redux</h3>
              </div>
              <div className="skillsDivSection">
                <div>
                  <img src={nodeJS} alt="NodeJS" />
                </div>
                <h3>Node JS</h3>
              </div>
              <div className="skillsDivSection">
                <div>
                  <img src={MongoDB} alt="MongoDB" />
                </div>
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>
          <div className="skillImgDiv">
            {" "}
            {/*//vgrdvfgefc*/}
            <img src={skills} alt="SkillLogo" />
          </div>
          <div>
            <div>
              <h1>Tech Tools</h1>
            </div>
            <div className="skillsDiv">
              <div className="skillsDivSection">
                <div>
                  <img src={Git} alt="Git" />
                </div>
                <h3>Git</h3>
              </div>
              <div className="skillsDivSection">
                <div>
                  <img src={Netlify} alt="Netlify" />
                </div>
                <h3>Netlify</h3>
              </div>
              <div className="skillsDivSection">
                <div>
                  <img src={Vercel} alt="Vercel" />
                </div>
                <h3>Vercel</h3>
              </div>
              <div className="skillsDivSection">
                <div>
                  <img src={NPM} alt="NPM" />
                </div>
                <h3>NPM</h3>
              </div>
              <div className="skillsDivSection">
                <div>
                  <img src={VSCode} alt="VSCode" />
                </div>
                <h3>VS Code</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
