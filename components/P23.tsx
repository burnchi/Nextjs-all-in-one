import styles from "./css/P23.module.scss";

const P23 = () => {
  const {
    container,
    box1,
    box2,
    box3,
    box4,
    box5,
    prev1,
    prev2,
    arrow1,
    arrow2,
    arrow3,
    arrow4,
    arrow5,
    arrow6,
    arrow7,
    arrow8,
    rotate,
    skew1,
    skew2,
    skew3,
    skew4,
  } = styles;
  return (
    <div className={container}>
      <div>
        <h4>box1</h4>
        <div className={box1}>平移x50px，y50px</div>
      </div>
      <div>
        <h4>box2</h4>
        <div className={box2}>x-50%，y0%,left50%,top100%</div>
      </div>
      <div className={box3}>
        <h4>popover + arrow</h4>
        <div className={arrow1} />
        <div className={arrow2} />
        <div className={arrow3} />
        <div className={arrow4} />
        <div className={arrow5} />
        <div className={arrow6} />
        <div className={arrow7} />
        <div className={arrow8} />
      </div>
      <div className={box4}>
        <h4>rotate</h4>
        <div className={rotate}></div>
      </div>
      <div className={box5}>
        <h4>skew</h4>
        <div className={skew1}></div>
        <div className={skew2}></div>
        <div className={skew3}></div>
        <div className={skew4}></div>
      </div>
    </div>
  );
};

export default P23;
