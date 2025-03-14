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
// 예시로 알 수 있듯, 정렬 횟수는 10 * (10 + 1)/2 = 55 즉 55번이다. 이는 N * (N + 1)/2 와 같으며 빅오표기법으로 O(N^2)의 시간복잡도를 가진다.
// 쉽게 N^2 만큼 오래걸린다 라고 생각하면 편하다.
