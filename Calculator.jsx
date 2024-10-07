import React, { useRef } from "react";
import styles from "./Calculator.module.css";

function Calculator() {
  const displayRef = useRef(null);

  function appendToDisplay(input) {
    displayRef.current.value += input;
  }

  function clearDisplay() {
    displayRef.current.value = "";
  }

  function calculate() {
    try {
      displayRef.current.value = eval(displayRef.current.value);
    } catch {
      displayRef.current.value = "Error";
    }
  }

  return (
    <section className={styles.calculatorContainer}>
      <div id="calculator" className={styles.calculator}>
        <input
          id="display"
          ref={displayRef}
          className={styles.display}
          readOnly
        />
        <div id="keys" className={styles.keys}>
          <button
            onClick={() => appendToDisplay("+")}
            className={styles.operatorBtn}
          >
            +
          </button>
          <button
            onClick={() => appendToDisplay("7")}
            className={styles.calculatorBtns}
          >
            7
          </button>
          <button
            onClick={() => appendToDisplay("8")}
            className={styles.calculatorBtns}
          >
            8
          </button>
          <button
            onClick={() => appendToDisplay("9")}
            className={styles.calculatorBtns}
          >
            9
          </button>
          <button
            onClick={() => appendToDisplay("-")}
            className={styles.operatorBtn}
          >
            -
          </button>
          <button
            onClick={() => appendToDisplay("4")}
            className={styles.calculatorBtns}
          >
            4
          </button>
          <button
            onClick={() => appendToDisplay("5")}
            className={styles.calculatorBtns}
          >
            5
          </button>
          <button
            onClick={() => appendToDisplay("6")}
            className={styles.calculatorBtns}
          >
            6
          </button>
          <button
            onClick={() => appendToDisplay("*")}
            className={styles.operatorBtn}
          >
            *
          </button>
          <button
            onClick={() => appendToDisplay("1")}
            className={styles.calculatorBtns}
          >
            1
          </button>
          <button
            onClick={() => appendToDisplay("2")}
            className={styles.calculatorBtns}
          >
            2
          </button>
          <button
            onClick={() => appendToDisplay("3")}
            className={styles.calculatorBtns}
          >
            3
          </button>
          <button
            onClick={() => appendToDisplay("/")}
            className={styles.operatorBtn}
          >
            /
          </button>
          <button
            onClick={() => appendToDisplay("0")}
            className={styles.calculatorBtns}
          >
            0
          </button>
          <button
            onClick={() => appendToDisplay(".")}
            className={styles.calculatorBtns}
          >
            .
          </button>
          <button onClick={calculate} className={styles.equalsBtn}>
            =
          </button>
          <button onClick={clearDisplay} className={styles.operatorBtn}>
            C
          </button>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
