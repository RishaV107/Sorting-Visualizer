export const doMergeSortMain = (array) => {
  const animations = [];
  if (array.length <= 1) return array;
  const auxolaryArray = array.slice();
  doMergeSort(auxolaryArray, 0, array.length - 1, animations);
  return animations;

  //test-algo
  // const a = [7, 3, 4, 1, 2, 6, 5];
  // console.log(a);
  // doMergeSort(a, 0, a.length - 1, animations);
  // console.log(a);
};

const doMergeSort = (mainArray, startIdx, endIdx, animations) => {
  if (startIdx === endIdx) return;
  if (startIdx < endIdx) {
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    doMergeSort(mainArray, startIdx, middleIdx, animations);
    doMergeSort(mainArray, middleIdx + 1, endIdx, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, animations);
  }
};

const doMerge = (mainArray, startIdx, middleIdx, endIdx, animations) => {
  const n1 = middleIdx - startIdx + 1;
  const n2 = endIdx - middleIdx;
  const L = [];
  const R = [];
  for (let i = 0; i < n1; i++) L.push(mainArray[startIdx + i]);

  for (let j = 0; j < n2; j++) R.push(mainArray[j + middleIdx + 1]);

  let i = 0;
  let j = 0;
  let k = startIdx;
  while (i < n1 && j < n2) {
    const animation = {};
    animation.comparison = [i, j];
    if (L[i] <= R[j]) {
      animation.swap = [k, i];
      mainArray[k++] = L[i++];
    } else {
      animation.swap = [k, j];
      mainArray[k++] = R[j++];
    }
    animations.push(animation);
  }
  while (i < n1) {
    animations.push({
      comparison: [i, i],
      swap: [k, i],
    });
    mainArray[k++] = L[i++];
  }
  while (j < n2) {
    animations.push({
      comparison: [j, j],
      swap: [k, j],
    });
    mainArray[k++] = R[j++];
  }
};

// export const mergeSort = (array) => {
//   const animations = [];
//   if (array.length <= 1) return array;
//   const auxolaryArray = array.slice();
//   mergeSortHelper(array, 0, array.length - 1, auxolaryArray, animations);
//   return animations;
// };

// const mergeSortHelper = (
//   mainArray,
//   startIdx,
//   endIdx,
//   auxolaryArray,
//   animations
// ) => {
//   if (startIdx < endIdx) {
//     const middleIdx = Math.floor((startIdx + endIdx) / 2);
//     mergeSortHelper(auxolaryArray, startIdx, middleIdx, mainArray, animations);
//     mergeSortHelper(
//       auxolaryArray,
//       middleIdx + 1,
//       endIdx,
//       mainArray,
//       animations
//     );
//     merge(mainArray, startIdx, middleIdx, endIdx, auxolaryArray, animations);
//   }
// };

// const merge = (
//   mainArray,
//   startIdx,
//   middleIdx,
//   endIdx,
//   auxolaryArray,
//   animations
// ) => {
//   let i = startIdx;
//   let j = middleIdx + 1;
//   let k = startIdx;

//   while (i <= middleIdx && j <= endIdx) {
//     const animation = {};
//     animation.comparison = [i, j];
//     if (auxolaryArray[i] <= auxolaryArray[j]) {
//       animation.swap = [k, i];
//       mainArray[k++] = auxolaryArray[i++];
//     } else {
//       animation.swap = [k, j];
//       mainArray[k++] = auxolaryArray[j++];
//     }
//   }
//   while (i <= middleIdx) {}
// };
