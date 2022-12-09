import { useState } from "react";

import "./App.css";

import Home from "./components/Home";
import Projects from "./components/Projects/Projects";
import ContactForm from "./components/ContactForm";
import SlideButton from "./components/SlideButton";

/*
0 = Home
1 = Project
2 = Contact
*/

const App = () => {
  const [mainDisplay, setMainDisplay] = useState(0);

  const showLeft = mainDisplay > 0;
  const showRight = mainDisplay < 2;

  let main = <Home />;

  switch (mainDisplay) {
    case 1:
      main = <Projects />;
      break;
    case 2:
      main = <ContactForm />;
      break;

    default:
      main = <Home />;
      break;
  }

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
