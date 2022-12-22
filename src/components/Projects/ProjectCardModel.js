import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ProjectCardModel = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.data.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.data.description}</p>
        {props.data.links.map((link) => (
          <>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
            <br />
          </>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectCardModel;
