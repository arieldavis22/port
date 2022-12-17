import "./Home.css";
import { useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import * as React from 'react';

const Home = React.forwardRef((props, ref) => {
  // useEffect(() => {
  //   console.log("?");
  //   props.compSlide()
  // }, [])
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const lnClickEventHandler = () => {
    window.open("https://www.linkedin.com/in/arieladavis/", "__blank");
  };

  const ghClickEventHandler = () => {
    window.open("https://github.com/arieldavis22", "__blank");
  };
  return (
    <div ref={ref} {...props} className="container">
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
  );
});

export default Home;
