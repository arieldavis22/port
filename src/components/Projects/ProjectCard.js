import { useState } from "react";
import "./ProjectCard.css";

import ProjectCardModel from "./ProjectCardModel";

const ProjectCard = ({ data }) => {
  const [modalShow, setModalShow] = useState(false);

  const modalClickHandler = () => {
    if (data.name !== "WIP") {
      setModalShow(true);
    }
  };
  return (
    <>
      <div className="project-card__container" onClick={modalClickHandler}>
        <img className="project-card__img" src={data.img} alt="Filler" />
        <div className="project-card__overlay">{data.name}</div>
      </div>

      <ProjectCardModel
        data={data}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ProjectCard;
