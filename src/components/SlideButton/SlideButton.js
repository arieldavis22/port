import "./SlideButton.css";

const SlideButton = ({ onChangeDisplay }) => {
  return (
    <div className="slide-button__container">
      <div onClick={onChangeDisplay} className="slide-button__bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default SlideButton;
