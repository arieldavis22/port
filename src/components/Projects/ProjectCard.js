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

  const projectStatusClass = `dot ${data.statusClass}`
  const isWIP = data.name === "WIP" ? '' : 'wip-hover'
  return (
    <>
      <div className={"project-card__container " + isWIP} onClick={modalClickHandler}>
        <div>{data.name}</div>
        <div className={projectStatusClass}></div>
        <span></span>
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
