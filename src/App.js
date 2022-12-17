import { useState } from "react";
import * as React from 'react';

import "./App.css";

import Home from "./components//Home/Home";
import Projects from "./components/Projects/Projects";
import ContactForm from "./components/ContactForm/ContactForm";
import SlideButton from "./components/SlideButton/SlideButton";

// import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';

/*
0 = Home
1 = Project
2 = Contact
*/

const App = () => {
  const [mainDisplay, setMainDisplay] = useState(0);
  const [componentSlide, setComponentSlide] = useState(true)

  const showLeft = mainDisplay > 0;
  const showRight = mainDisplay < 2;

  const increaseDisplayHandler = () => {
    setMainDisplay((prevState) => {
      return prevState + 1;
    });
  };

  const decreaseDisplayHandler = () => {
    setMainDisplay((prevState) => {
      return prevState - 1;
    });
  };

  // const componentSlideHandler = () => {
  //   console.log("hey");
  //   setComponentSlide((prevState) => {
  //     return !prevState
  //   })
  // }

  let main = <Home key={0}/>;

  switch (mainDisplay) {
    case 1:
      main = <Projects key={1}/>;
      break;
    case 2:
      main = <ContactForm key={2}/>;
      break;

    default:
      main = <Home key={0}/>;
      break;
  }

  return (
    <div className="App">
      <div className="app-navigate">
        {showLeft && <SlideButton onChangeDisplay={decreaseDisplayHandler} />}
      </div>
      <div className="app-main">
      <Slide direction="up" in={componentSlide} mountOnEnter unmountOnExit>
          {main}
        </Slide>
      </div>
      <div className="app-navigate">
        {showRight && <SlideButton onChangeDisplay={increaseDisplayHandler} />}
      </div>
    </div>
  );
};

export default App;
