import "./ProjectCard.css";

const ProjectCard = ({ data }) => {
  return (
    <div className="project-card__container">
      <img className="project-card__img" src={data.img} alt="Filler" />
      <div className="project-card__overlay">{data.name}</div>
    </div>
  );
};

export default ProjectCard;
