// selection sort - 가장 작은것을 선택해서 제일 앞으로 보내는 것.

function SelectionSort() {
  let numArray = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
  let temp = null;
  for (let i = 0; i < numArray.length; i++) {
    for (let j = i; j < numArray.length; j++) {
      if (numArray[i] > numArray[j]) {
        temp = numArray[i];
        numArray[i] = numArray[j];
        numArray[j] = temp;
      }
    }
  }
  console.log(numArray);
}

SelectionSort();
