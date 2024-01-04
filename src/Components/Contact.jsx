// import React from 'react'
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Styles/Contact.css";
import ContactMe from "../Images/Contact-Me.png";
// import styled from 'styled-components'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { GitHub, LinkedIn } from '@mui/icons-material';
import heart from "../Images/heart.png"
import {Box} from "@chakra-ui/react"

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8cto6xg",
        "template_z07756o",
        form.current,
        "qZwb3sXRjYiTZeMcS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="contactDiv">
      <div>
        <h1>Contact Me</h1>
      </div>
      <Box className="contactDivSection" alignContent="center">
        
          <img src={ContactMe} alt="ContactMe" className="center"/>
        
      </Box>
      <div className="middleSection">
        <div data-aos="fade-right" style={{ color: "white" }}>
        <a href="tel:+91-6203702628" rel="noreferrer" target="_blank"><PhoneIcon fontSize="large" /></a>
        <a href="tel:+91-6203702628" rel="noreferrer" target="_blank"><h1>Phone</h1><br/></a>
          {/* <p>Here is My Phone Number</p> */}
          <a href="tel:+91-6203702628" rel="noreferrer" target="_blank">
            <p>+91-6203702628</p>
          </a>
        </div>
        <div data-aos="fade-down" style={{ color: "white" }}>
        <a
            href="https://www.linkedin.com/in/swati-mandal-80a066132/"
            rel="noreferrer"
            target="_blank"
          ><LinkedIn fontSize="large" /></a>
          <a
            href="https://www.linkedin.com/in/swati-mandal-80a066132/"
            rel="noreferrer"
            target="_blank"
          ><h1>LinkedIn</h1><br/></a>
          {/* <p>Here is My LinkedIn</p> */}
          <a
            href="https://www.linkedin.com/in/swati-mandal-80a066132/"
            rel="noreferrer"
            target="_blank"
          >
            <p>swati-mandal-80a066132</p>
          </a>
        </div>
        <div data-aos="fade-up" style={{ color: "white" }}>
        <a
            href="https://github.com/swatii23"
            rel="noreferrer"
            target="_blank"
          ><GitHub fontSize="large" /></a>
          <a
            href="https://github.com/swatii23"
            rel="noreferrer"
            target="_blank"
          ><h1>Github</h1><br/></a>
          {/* <p>Here is My Github</p> */}
          <a
            href="https://github.com/swatii23"
            rel="noreferrer"
            target="_blank"
          >
            <p>swatii23</p>
          </a>
        </div>
        <div data-aos="fade-up" style={{ color: "white" }}>
        <a
            href="mailto:swati.m_2000@rediffmail.com"
            rel="noreferrer"
            target="_blank"
          ><EmailIcon fontSize="large" /></a>
          <a
            href="mailto:swati.m_2000@rediffmail.com"
            rel="noreferrer"
            target="_blank"
          ><h1>Email</h1></a>
          <br/>
          {/* <p>Send mail here</p> */}
          <a
            href="mailto:swati.m_2000@rediffmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <p>swati.m_2000@rediffmail.com</p>
          </a>
        </div>
      </div>
      <div className="endSection">
        <div><span>© 2023 swati mandal</span></div>
        <div><span>Made with <img src={heart} alt="heart" style={{height:"20px"}}/> in India</span></div>
      </div>
    </div>
  );
};

