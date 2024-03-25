import styles from "./css/p24.module.scss";
const P24 = () => {
  const { container, btn, btn1, card, card1, card2, card3 } = styles;
  return (
    <div className={container}>
      <h1>font color and background color transition</h1>
      <button className={btn}>click</button>
      <h1>transform transition</h1>
      <div className={card}>translate</div>
      <div className={card1}>scale</div>
      <div className={card2}>rotate</div>
      <div className={card3}>skew</div>
      <button className={btn1}>hover me</button>
    </div>
  );
};

export default P24;
