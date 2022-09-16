import React, { useEffect, useState } from "react";
import { doMergeSortMain } from "../sortingAlgorithms/sortingAlgorithms";
import "./SortingVisualizer.css";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const resetArray = () => {
    const a = [];
    for (let i = 0; i < 400; i++) {
      a.push(getRandomNumber(5, 730));
    }
    setArray(a);
  };

  useEffect(() => {
    resetArray();
  }, []);

  const mergeSort = () => {
    const animations = doMergeSortMain(array);
    const newAnimations = [];
    for (const animation of animations) {
      newAnimations.push(animation.comparison);
      newAnimations.push(animation.comparison);
      newAnimations.push(animation.swap);
    }
    for (let i = 0; i < newAnimations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const [barOneIdx, barTwoIdx] = newAnimations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const color = i % 3 === 0 ? "red" : "turquoise";
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 10);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = newAnimations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 10);
      }
    }
  };

  return (
    <>
      <div className="array-container">
        {array.map((value, idx) => {
          return (
            <div
              className="array-bar"
              key={idx}
              style={{ height: `${value}px` }}
            ></div>
          );
        })}
      </div>
      <div className="button-container">
        <button
          onClick={() => {
            resetArray();
          }}
        >
          Generate New Array
        </button>
        <button
          onClick={() => {
            mergeSort();
          }}
        >
          Call Merge Sort
        </button>
      </div>
    </>
  );
};

export default SortingVisualizer;
