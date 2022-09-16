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
    doMergeSortMain(array);
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
