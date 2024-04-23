function calcestandeft(arr) {
  for (let i = 0; i <= arr; i++) {
    calcest(arr, i);
    calceft(arr, i);
  }
}

function calcest(arr, index) {
  if (index == 0) {
    arr[index].est = 0;
  }
}

function calceft(arr, index) {
  arr[index].eft = arr[index].est + arr[index].duration;
}