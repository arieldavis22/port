import "./Home.css";

import { FaLinkedin, FaGithub } from "react-icons/fa";
const Home = () => {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <div className="container">
      <div className="home__left">
        <h1>Ariel Davis</h1>
        <div className="home__socials">
          <div>
            <FaLinkedin />
          </div>
          <div>
            <FaGithub />
          </div>
        </div>
      </div>
      <div className="home__right">
        <div>{text}</div>
      </div>
    </div>
  );
};

export default Home;
