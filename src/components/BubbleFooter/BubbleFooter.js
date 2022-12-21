import "./BubbleFooter.css";

const BubbleFooter = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const bubbleStartHandler = (e) => {
    e.target.style.left = `${randomIntFromInterval(10, 90)}%`;
    e.target.classList.add(`dummy_${randomIntFromInterval(0, 4)}`);
  };

  const bubbleChangeHandler = (e) => {
    e.target.style.left = `${randomIntFromInterval(1, 99)}%`;
  };

  return (
    <div className="bubble-footer__container">
      {arr.map((n) => (
        <div
          id={n}
          key={n}
          className="__bubble"
          onAnimationStart={bubbleStartHandler}
          onAnimationIteration={bubbleChangeHandler}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      ))}
    </div>
  );
};

export default BubbleFooter;
