import React from 'react'
import "./Styles/Project.css"
import p1 from "../Images/p1.png"
import p2 from "../Images/p2.png"
import p3 from "../Images/p3.png"
import p4 from "../Images/p4.png"

import html from "../Images/html.png"
import css from "../Images/CSS.png"
// import Chakra from "../Images/chakra.jpg"
import JS from "../Images/js.png"
import ReactLogo from "../Images/react.png"
import ReduxLogo from "../Images/redux.png"
// import nodeJS from "../Images/nodeJS.png"
import Git from "../Images/git.png"
import bootstrap from "../Images/bootstrap.png"

import P1Card from "./projectCards/P1Card"
import P2Card from "./projectCards/P2Card"
import P3Card from "./projectCards/P3Card"
import P4Card from "./projectCards/P4Card"

const Projects = () => {
  return (
    <div id="project" className='projectMainDiv'>
      <div>
        <h1>Projects</h1>
      </div>
      <div className='projectSecondDiv'>
        <div className='projectDiv'>
          <div className='firstProject'>
              <a target="blank" href="https://github.com/swatii23/Bed-Bath-Beyond"><img src={p1} alt="Bed-Bath-Beyond" className='projectImg'/> </a>
          </div>
          <div className='firstProjectDis'>
            <div>
              <h2>Bed Bath Beyond</h2>
            </div>
            <div>
              <img src={html} alt="HTML"/>
              <img src={css} alt="CSS"/>
              <img src={JS} alt="JS"/>
            </div>
            <div>
              <p>HTML || CSS || JS </p>
              <br/>
              <p>Bed Bath & Beyond is a popular retail chain that specializes in home goods and furnishings.</p>
            </div>
            <div>
              <button><a target="blank" href='https://6509b685de9fe80cfc50d9a3--velvety-hotteok-be9bd4.netlify.app/'>Link</a></button>
              <button><a target="blank" href='https://github.com/swatii23/Bed-Bath-Beyond'>Github</a></button>
            </div>
          </div>
          <div className='firstProjectDis'>
          <div>
              <h2>Gordon Resort Hotel</h2>
            </div>
            <div>
              <img src={html} alt="HTML"/>
              <img src={css} alt="CSS"/>
              <img src={JS} alt="JS"/>
            </div>
            <div>
            <p>HTML || CSS || JS </p>
              <br/>
              <p>Our hotel website is a showcase of sophistication and convenience. </p>
            </div>
            <div>
              <button><a target="blank" href='https://653652c73f8e7f008122786e--elegant-pudding-10faed.netlify.app'>Link</a></button>
              <button><a target="blank" href='https://github.com/swatii23/glorious-calendar-2511'>Github</a></button>
            </div>
          </div>
          <div className='firstProject'>
              <a target="blank" href="https://github.com/swatii23/glorious-calendar-2511"><img src={p2} alt="gordon resort" className='projectImg'/></a>
          </div>
          <div className='firstProject'>
          <a target="blank" href='https://github.com/swatii23/wood-fans'><img src={p3} alt="Wood Fans" className='projectImg'/></a>
          </div>
          <div className='firstProjectDis'>
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
              <p>Welcome to Wood Fans, your premier destination for exquisite and sustainable furniture. </p>
            </div>
            <div>
              <button><a target="blank" href='https://obscene-clam-8417.vercel.app/'>Link</a></button>
              <button><a target="blank" href='https://github.com/swatii23/wood-fans'>Github</a></button>
            </div>
          </div>
          {/* <div className='firstProjectDis'>
          <div>
              <h2>Portfolio</h2>
            </div>
            <div>
              <img src={ReactLogo} alt="React"/>
              <img src={JS} alt="JS"/>
            </div>
            <div>
            <p>React || JS </p>
              <br/>
              <p>This is my portfolio project! This project contains all the valuable insights of me. </p>
            </div>
            <div>
              <button><a  target="blank" href='https://swatii23.github.io/'>Link</a></button>
              <button><a target="blank" href='https://github.com/swatii23/swatii23.github.io'>Github</a></button>
            </div>
          </div>
          <div className='firstProject'>
          <a target="blank" href='https://github.com/swatii23/swatii23.github.io'><img src={p4} alt="Portfolio" className='projectImg'/></a>
          </div> */}
        </div>
      </div>
      <div className='projectMinScrDiv'>
        <P1Card/>
        <P2Card/>
        <P3Card/>
        <P4Card/>
      </div>
    </div>
  )
}

export default Projects