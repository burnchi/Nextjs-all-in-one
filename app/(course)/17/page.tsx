"use client";
import { useState } from "react";
import styles from "./demo.module.scss";
import themes from "./theme.module.scss";

const SassPage = () => {
  const { container, primaryColor, textlg, themebtn } = styles;
  const [theme, setTheme] = useState("light");
  const { item } = themes;
  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className={container} data-theme={theme}>
      <span>nest span</span>
      <p className={item}>
        A variable declaration looks a lot like a property declaration: it’s
        written . Unlike a property, which can only be declared in a style rule
        or at-rule, variables can be declared anywhere you want. To use a
        variable, just include it in a value.
      </p>
      {/* use export variables */}
      <ul style={{ backgroundColor: primaryColor }}>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
      </ul>
      <p className={textlg}>Hello World</p>
      <button className={themebtn} onClick={changeTheme}>
        Change Theme
      </button>
    </div>
  );
};

export default SassPage;
