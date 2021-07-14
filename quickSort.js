let exArray = [4, 8, 5, 7, 1, 6, 10, 2, 3, 9];
let exArray2 = [9, 7, 4, 2, 3, 8, 1, 5, 10, 6];

const sortPartition = (arr, lowPointI = 0, highPointJ = arr.length - 1) => {
  let pivotIndex = lowPointI + 1;
  while (pivotIndex < highPointJ) {
    console.log(arr, pivotIndex, lowPointI, highPointJ);
    const pivotValue = arr[pivotIndex];
    while (arr[lowPointI] < pivotValue) {
      lowPointI++;
    }
    while (arr[highPointJ] > pivotValue) {
      highPointJ--;
    }
    const temp = arr[lowPointI];
    arr[lowPointI] = arr[highPointJ];
    arr[highPointJ] = temp;
    console.log(arr);
    pivotIndex++;
  }
  console.log("FINISHED");
  return [arr, highPointJ];
};

const sortPartitionLast = (arr, lowPointI, highPointJ) => {
  let pivotIndex = lowPointI + 1;
  while (pivotIndex < arr.length) {
    console.log(arr, pivotIndex, lowPointI, highPointJ);
    const pivotValue = arr[pivotIndex];
    while (arr[lowPointI] < pivotValue) {
      lowPointI++;
    }
    while (arr[highPointJ] > pivotValue) {
      highPointJ--;
    }
    const temp = arr[lowPointI];
    arr[lowPointI] = arr[highPointJ];
    arr[highPointJ] = temp;
    console.log(arr);
    pivotIndex++;
  }
  console.log("FINISHED");
  return [arr, highPointJ];
};

const [firstPartitionArray, newJAfterFirst] = sortPartition(exArray);
console.log(firstPartitionArray, newJAfterFirst);
const [secondPartitionArray, newJAfterSecond] = sortPartition(
  exArray,
  (i = 0),
  (j = newJAfterFirst)
);
console.log(secondPartitionArray, newJAfterSecond);
const [finalArray, finalJ] = sortPartitionLast(
  exArray,
  (i = newJAfterFirst + 1),
  (j = exArray.length - 1)
);
console.log(finalArray, finalJ);

// const quickSort = (arr, i = 0, j = arr.length - 1) => {
//   let pivotIndex = Math.ceil((j - i) / 2);
//   let pivotValue = arr[pivotIndex];

//   let sortingComplete = false;
//   while (!sortingComplete) {
//     while (arr[i] < pivotValue) {
//       i++;
//     }
//     while (arr[j] > pivotValue) {
//       j--;
//     }
//     // swap values at i and j
//     const temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     if (i === j) {
//       sortingComplete = true;
//     }
//   }
//   // if (!sortingRightPartition) {
//   while (j > 0) {
//     j = j - 1;
//     quickSort(arr, (i = 0), j);
//   }
//   // }
//   console.log(arr);
//   return arr;
// };
// console.log(quickSort(exArray));
// i =

// if (!sortingRightPartition) {
//   j = Math.ceil((arr.length - 1) / 2) - 1;
//   console.log("j is ", j);
//   console.log("gets here");

// }

// sort right partition
// i = Math.ceil((arr.length - 1) / 2) + 1;
// while (i < arr.length - 1) {
//   if (i < Math.ceil((arr.length - 1) / 2) + 1) {
//     i = Math.ceil((arr.length - 1) / 2) + 1;
//   }
//   i = i + 1;
//   console.log("i is", i);
//   console.log(arr);
//   quickSort(
//     arr,
//     (i = i),
//     (j = arr.length - 1),
//     (sortingRightPartition = true)
//   );
// }

// i = Math.ceil((arr.length - 1) / 2);
// j = arr.length;
// while (i < arr.length) {
//   // let sortingRightPartition = true;
//   i = i + 1;
//   j = j - 1;

//   quickSort(arr, (i = i), (j = j), (sortingRightPartition = true));
// }
// console.log(arr);
// let sortingLeftPartition = true;
// while (sortingLeftPartition) {
//   j = j - 1;
//   quickSort(arr, (i = 0), j);
//   if (j === 0) {
//     sortingLeftPartition = false;
//   }
// }
// i = Math.ceil((arr.length - 1) / 2) + 1;
// i = Math.ceil((arr.length - 1) / 2) + 1;
// while (i < arr.length - 1) {
//   console.log("i is", i);
//   i = i + 1;
//   quickSort(arr, i);
//   console.log(arr);
// }
// return arr;
// console.log(arr);
// j = Math.ceil((arr.length - 1) / 2);
// while (i)
// console.log("gets to J");
// // j = Math.ceil(arr.length / 2);
// // j = j - 1;
// console.log("j is called with", j);
// quickSort(arr, (i = 0), j-1);
// console.log(arr);

// i = arr.length / 2 + 1;
// console.log("gets here");
// while (i < arr.length - 1) {
//   console.log("yo");
//   quickSort(arr, i + 1, (j = arr.length - 1));
//   console.log(arr);
// }
// Sort values to the left of pivot
// let sortingLeftOfPivotComplete = false;
// while (!sortingLeftOfPivotComplete) {
//   let newPivotValue = pivotValue - 1;
//   let i = 0;
//   let j = pivotIndex - 1;

//   while (exArray[i] < pivotValue) {
//     i++;
//     console.log(i);
//   }
//   while (exArray[j] > pivotValue) {
//     j--;
//     console.log(j);
//   }
// }

// let exArray = [4, 8, 5, 7, 1, 6, 10, 2, 3, 9];
// console.log(Math.ceil((exArray.length - 1) / 2) + 1);
