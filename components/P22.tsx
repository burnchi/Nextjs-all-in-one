import styles from "./css/P22.module.scss";
const P22 = () => {
  const { container, box1, box2, box3, box4, box5, first, last } = styles;
  return (
    <div className={container}>
      <h1>等宽高</h1>
      <div className={box1}>
        <div>1fr</div>
        <div>1fr</div>
        <div>1fr</div>
        <div>11</div>
        <div>11</div>
        <div>11</div>
      </div>
      <h1>不等宽高</h1>
      <div className={box2}>
        <div>100px</div>
        <div>1fr</div>
        <div>30%</div>
        <div>11</div>
        <div>11</div>
      </div>
      <h1>控制最大最小</h1>
      <div className={box3}>
        <div>最小100px，不限宽</div>
        <div>11</div>
        <div>11</div>
        <div>11</div>
        <div>11</div>
      </div>
      <h1>改变item位置和所占单元格</h1>
      <div className={box4}>
        <div className={first}>first</div>
        <div>11</div>
        <div>11</div>
        <div>11</div>
        <div>11</div>
      </div>
      <h1>改变item自身大小,默认满宽</h1>
      <div className={box5}>
        <div>firstaaaaaaaaaaaaaccas</div>
        <div>11</div>
        <div>11</div>
        <div>11</div>
        <div className={last}>11</div>
      </div>
    </div>
  );
};

export default P22;
