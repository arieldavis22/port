import "./Projects.css";

import { useSelector } from "react-redux";

import ProjectCard from "./ProjectCard";

import * as React from "react";

import Slide from "@mui/material/Slide";

const Projects = () => {
  const slide = useSelector((state) => state.direction);
  const projectData = [
    {
      id: 0,
      name: "Luck of Die",
      statusClass: "wip",
      links: [
        {
          name: "Github",
          url: "https://github.com/arieldavis22/luck_of_die",
        },
      ],
      description: `
      Luck of Die is a small web based game that test the luck of the user! 
      This project was created as my second project at Flatiron School, 
      testing my skills with Ruby on Rails, HTML, and CSS.
      `,
    },
    {
      id: 1,
      name: "Gem Trader",
      statusClass: "wip",
      links: [
        {
          name: "Github",
          url: "https://github.com/arieldavis22/gem_trader",
        },
      ],
      description: `
      Gem Trader is a simple game for collecting and selling cards. 
      Cards are themed with various gems. A player can buy a box of cards and hope for the rarest, most highly-valued gem cards.
      Ariel Davis and Laura Archambault created this app while students at Flatiron School, Atlanta campus. The project assignment was to create a 
      Rails application, both front- and backend using 5 models. Students were to demonstrate an understanding of ActiveRecord and the MVC pattern.
      `,
    },
    {
      id: 2,
      name: "Forecast Planner",
      statusClass: "wip",
      links: [
        {
          name: "Github (Frontend)",
          url: "https://github.com/arieldavis22/forecast_planner_client",
        },
        {
          name: "Github (Backend)",
          url: "https://github.com/arieldavis22/forecast_planner_api",
        },
      ],
      description: `
      The purpose of the Forecast Planner application is to provide users with the tools to plan events and be provided with special notices 
      depending on the weather for that day. Using the WeatherIO API, based off of the information that the user gives, an event is created and these 
      notices are shown on your listing of events.
      `,
    },
    {
      id: 3,
      name: "Dev Learning",
      statusClass: "wip",
      links: [
        {
          name: "Github (Frontend)",
          url: "https://github.com/arieldavis22/dev-learning-frontend",
        },
        {
          name: "Github (Backend)",
          url: "https://github.com/arieldavis22/dev-learning-backend",
        },
      ],
      description: `
      The goal of Dev Learning is to provide users with a high school stuctured way to learn about programming. 
      Split into Teacher based user experince and Student based user experince, 
      Dev Learning stives to make a complete high school setting.
      `,
    },
    {
      id: 4,
      name: "WIP",
      statusClass: "wip",
      links: [
        {
          url: "",
        },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 5,
      name: "WIP",
      statusClass: "wip",
      links: [
        {
          url: "",
        },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  return (
    <Slide direction={slide} in={true} mountOnEnter unmountOnExit>
      <div className="container">
        <div>
          <h2>Projects</h2>
          <div className="main-projects__container">
            {projectData.map((project) => (
              <ProjectCard key={project.id} data={project} />
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Projects;
