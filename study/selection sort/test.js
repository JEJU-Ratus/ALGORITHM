// selection sort - 가장 작은것을 선택해서 제일 앞으로 보내는 것.

function SelectionSort() {
  let numArray = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
  let temp = null,
    index = null;

  for (let i = 0; i < numArray.length; i++) {
    let min = numArray[i];
    index = i;
    for (let j = i + 1; j < numArray.length; j++) {
      if (min > numArray[j]) {
        min = numArray[j];
        index = j;
      }
    }
    temp = numArray[i];
    numArray[i] = min;
    numArray[index] = temp;
  }
  console.log(numArray);
}

SelectionSort();

// 선택 정렬은 원래 다른 정렬에 비해 비효율 적이지만, 그럼에도 효율을 위해 swap이 적게 일어나도록 해야함.(중요포인트)
