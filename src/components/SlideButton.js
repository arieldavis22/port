import "./SlideButton.css";

const SlideButton = ({ onChangeDisplay }) => {
  return (
    <div className="slide-button__container">
      <span onClick={onChangeDisplay} className="slide-button__dot"></span>
    </div>
  );
};

export default SlideButton;
