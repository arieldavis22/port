import "./Home.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import { useSelector } from "react-redux";

import * as React from "react";

import Slide from "@mui/material/Slide";

const Home = () => {
  const slide = useSelector((state) => state.direction);
  const text = `
  Hello and welcome to my portfolio / playground. I am a full stack web developer with a passion for expansive learning.  
  I have experience in Ruby on Rails, JavaScript, React, Typescript, Java, 
  and Python tied to robotics and programming via work with the Technology Student Association (TSA). 
  I'm deeply invested in problem solving, user experience and possess strong skills in team-building, deadline management, 
  and communications that now fluently transfer into work as a developer. This website is made with React and Material UI.
  `;
  const lnClickEventHandler = () => {
    window.open("https://www.linkedin.com/in/arieladavis/", "__blank");
  };

  const ghClickEventHandler = () => {
    window.open("https://github.com/arieldavis22", "__blank");
  };
  return (
    <Slide direction={slide} in={true} mountOnEnter unmountOnExit>
      <div className="container">
        <div className="home__left">
          <h1>Ariel Davis</h1>
          <div className="home__socials">
            <div>
              <FaLinkedin onClick={lnClickEventHandler} />
            </div>
            <div>
              <FaGithub onClick={ghClickEventHandler} />
            </div>
          </div>
        </div>
        <div className="home__right">
          <div>{text}</div>
        </div>
      </div>
    </Slide>
  );
};

export default Home;
