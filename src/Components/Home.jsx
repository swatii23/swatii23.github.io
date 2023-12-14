import React from "react";
import Typical from "react-typical";
import { Heading, Image } from "@chakra-ui/react";
import "./Styles/Home.css"
import raj from "../Images/hero.jpg"
import Resume from "../Swati Mandal-resume.pdf"
// import { Link } from "react-scroll";

export const Home = () => {
  
  return (
    <div
      id="home"
      className="homeDiv"
    >
      <div style={{  textAlign: "center" }} >
        <Heading fontSize="60px">Hi I'm</Heading>
        <Heading fontSize="50px">Swati Mandal</Heading>
        <br></br>
        <h1 style={{ fontSize: "32px" , color:"blueviolet"}}>
        Full Stack Web Developer
          {/* <Typical
            loop={Infinity}
            steps={[
              "Full Stack Web Developer",
              1000,
              "MERN Stack Developer",
              1000,
              "React Developer",
              1000,
            ]}
          /> */}
        </h1>
        <button className="resumeBtn">
          <a 
            // href={Resume} download="Swati Mandal-resume.pdf" 
            onClick={()=>window.open('https://drive.google.com/file/d/1YdkZaPLVVhksp7U_k2yh8pxxxWyT6BE4/view?usp=sharing ')}
            style={{textDecoration:"none",color:"#fff"}}
          >
          Resume</a>
          </button>
      </div>
      <div className="homeDivImgMain">
        <Image className="homeDivImg"
          src={raj}
          alt="Swati"
        />
      </div>
    </div>
  );
};
