let exArray = [4, 8, 5, 7, 1, 6, 10, 2, 3, 9];
// const pivotIndex = exArray.length / 2;
// const pivotValue = exArray[pivotIndex];
// let sortingComplete = false;

// All values less than pivot on left of pivot and
// all values greater than pivot on the right
const quickSort = (
  arr,
  i = 0,
  j = arr.length - 1,
  pivotInitialSort = false,
  sort
) => {
  console.log("begin function");
  let pivotIndex = arr.length / 2;
  let pivotValue = arr[pivotIndex];

  let sortingComplete = false;
  while (!sortingComplete) {
    while (arr[i] < pivotValue) {
      i++;
      console.log("i is now", i);
    }
    while (arr[j] > pivotValue) {
      j--;
      console.log("j is now", j);
    }
    // swap values at i and j
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    console.log(arr);
    if (i === j) {
      sortingComplete = true;
    } else {
      quickSort(arr, i, j);
    }
  }
};
quickSort(exArray);

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
