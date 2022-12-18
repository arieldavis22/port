import { useState } from "react";
import * as React from "react";

import { useDispatch } from "react-redux";

import { slideActions } from "./store/index";

import "./App.css";

import Home from "./components//Home/Home";
import Projects from "./components/Projects/Projects";
import ContactForm from "./components/ContactForm/ContactForm";
import SlideButton from "./components/SlideButton/SlideButton";

/*
0 = Home
1 = Project
2 = Contact
*/

const App = () => {
  const dispatch = useDispatch();
  const [mainDisplay, setMainDisplay] = useState(0);

  const showLeft = mainDisplay > 0;
  const showRight = mainDisplay < 2;

  const increaseDisplayHandler = () => {
    dispatch(slideActions.goRight());
    setMainDisplay((prevState) => {
      return prevState + 1;
    });
  };

  const decreaseDisplayHandler = () => {
    dispatch(slideActions.goLeft());
    setMainDisplay((prevState) => {
      return prevState - 1;
    });
  };

  let main = <Home key={0} />;

  switch (mainDisplay) {
    case 1:
      main = <Projects key={1} />;
      break;
    case 2:
      main = <ContactForm key={2} />;
      break;

    default:
      main = <Home key={0} />;
      break;
  }

  return (
    <div className="App">
      <div className="app-navigate">
        {showLeft && <SlideButton onChangeDisplay={decreaseDisplayHandler} />}
      </div>
      <div className="app-main">{main}</div>
      <div className="app-navigate">
        {showRight && <SlideButton onChangeDisplay={increaseDisplayHandler} />}
      </div>
    </div>
  );
};

export default App;
