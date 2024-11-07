import React from "react";
import style from "./theme.module.css";

function Theme({theme,setTheme}) {
        // Function to handle the switch click
        const handleThemeChange = (newTheme) => {
          setTheme(newTheme);
        };
  return (
    <div className={style.themeContainer}>
      <h2 className={`theme-${theme}`}>Calc</h2>
      <div className="theme-switcher">
        <span className={`text theme-${theme}`}>THEME</span>
        <div className="switch-container">
          <div className="numbers">
            <span className={`theme-${theme}`}>1</span>
            <span className={`theme-${theme}`}>2</span>
            <span className={`theme-${theme}`}>3</span>
          </div>
          <div className={`switch switch-${theme}`} onClick={() => handleThemeChange((theme % 3) + 1)}>
          <div className={`circle theme-${theme}`}></div>
        </div>
        </div>
       
      </div>
    </div>
  );
}

export default Theme;
