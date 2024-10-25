// Input.jsx
import React from "react";
import style from "./input.module.css";

function Input({ input, setInput, theme }) {
  const handleChange = (e) => {
    setInput(e.target.value)
  };

  return (
    <div className={`${style.inputContainer} ${style[`theme-${theme}`]} `}>
      <input
        type="text"
        onChange={handleChange}
        value={input}
        readOnly
      />
    </div>
  );
}

export default Input;
