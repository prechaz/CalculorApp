import React, { useState } from "react";
import style from "./button.module.css";

function Button({ input, setInput, theme }) {
  const [operator, setOperator] = useState("");
  const [prevInput, setPrevInput] = useState("");

  const keypads = [
    { id: 1, value: "7" },
    { id: 2, value: "8" },
    { id: 3, value: "9" },
    { id: 4, value: "DEL" },
    { id: 5, value: "4" },
    { id: 6, value: "5" },
    { id: 7, value: "6" },
    { id: 8, value: "+" },
    { id: 9, value: "1" },
    { id: 10, value: "2" },
    { id: 11, value: "3" },
    { id: 12, value: "-" },
    { id: 13, value: "." },
    { id: 14, value: "0" },
    { id: 15, value: "/" },
    { id: 16, value: "x" },
  ];

  const evalKeypads = [
    { id: 1, value: "RESET" },
    { id: 2, value: "=" },
  ];

  const formatNumber = (value) => {
    const rawValue = value.replace(/\s+/g, "").replace(/,/g, "");
    return rawValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const HandleClick = (KeyValue) => {
    if (!isNaN(KeyValue)) {
      setInput(formatNumber(input + KeyValue));
    } else if (["+", "-", "x", "/"].includes(KeyValue)) {
      setPrevInput(input);
      setOperator(KeyValue);
      setInput("");
    } else if (KeyValue === "." && !input.includes(".")) {
      setInput(input === "" ? "0." : input + KeyValue);
    } else if (KeyValue === "=") {
      const result = calculate(prevInput, input, operator);
      setInput(formatNumber(result));
      setPrevInput("");
      setOperator("");
    } else if (KeyValue === "RESET") {
      setInput("");
      setPrevInput("");
      setOperator("");
    } else if (KeyValue === "DEL") {
      setInput(input.slice(0, -1));
    }
  };

  const calculate = (num1, num2, operator) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    switch (operator) {
      case "+":
        return (number1 + number2).toString();
      case "-":
        return (number1 - number2).toString();
      case "x":
        return (number1 * number2).toString();
      case "/":
        return number2 !== 0 ? (number1 / number2).toString() : "Error";
      default:
        return "";
    }
  };

  return (
    <div className={`${style.container} ${style[`themeContainer-${theme}`]}`}>
      <div className={style.keypadContainer}>
        {keypads.map((keypad) => (
          <button
            key={keypad.id}
            onClick={() => HandleClick(keypad.value)}
            className={`${style.btn} ${style[`theme-${theme}`]}`}
          >
            {keypad.value}
          </button>
        ))}
      </div>
      <div className={style.keypadContainer}>
        {evalKeypads.map((keypad) => (
          <button
            key={keypad.id}
            onClick={() => HandleClick(keypad.value)}
            className={`${style.btn} ${style.eval} ${style[`evalTheme-${theme}`]}`}
          >
            {keypad.value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Button;
