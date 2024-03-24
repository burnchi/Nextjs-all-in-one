import styles from "./css/p8.module.scss";

const P8 = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.textbox}>
          <h2>
            i&apos;m &nbsp;
            <span style={{ "--i": 0 } as any} data-text="Designer">
              Designer
            </span>
            <span style={{ "--i": 1 } as any} data-text="Coder">
              Coder
            </span>
            <span style={{ "--i": 2 } as any} data-text="Youtuber">
              Youtuber
            </span>
          </h2>
        </div>
      </div>
      <div className={styles.showbox}>
        <h1>基本样式</h1>
        <p>我爱学习 大小30px</p>
        <p>我爱学习 字距16px</p>
        <p>我爱学习 粗细600</p>
        <p>我爱学习 行高30px</p>
        <p>我爱学习 斜体</p>
      </div>
      <div className={styles.fontfamily}>
        <h1>字体类型</h1>
        <p>我爱学习 fangsong</p>
        <p>我爱学习 cursive</p>
        <p>我爱学习 monospace</p>
        <p>我爱学习 Fira Sans or serif</p>
        <p>我爱学习 fantasy</p>
        <p>我爱学习 system-ui</p>
        <p>我爱学习 ui-serif</p>
        <p>我爱学习 ui-sans-serif</p>
        <p>我爱学习 ui-monospace</p>
        <p>我爱学习 Bitstream Vera Serif Bold or serif</p>
      </div>

      <div className={styles.paragraph1}>
        <h1>段落文字+br</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae
          dolor, optio voluptatibus magnam iure esse tempora beatae. A suscipit
          eos.
          <br />
          voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
      </div>
      <div className={styles.paragraph}>
        <h1>段落文字no br</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae
          dolor, optio voluptatibus magnam iure esse tempora beatae. A suscipit
          eos.
        </p>
        <p>
          voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
      </div>
    </>
  );
};

export default P8;
