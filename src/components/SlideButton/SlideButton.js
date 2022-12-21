import "./SlideButton.css";

const SlideButton = ({ onChangeDisplay }) => {
  return (
    <div className="slide-button__container">
      <div onClick={onChangeDisplay} className="__bubble">
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
