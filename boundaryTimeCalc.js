function calcestandeft(arr) {
  for (let i = 0; i <= arr; i++) {
    calcest(arr, i);
    calceft(arr, i);
  }
}

function calcest(arr, index) {
  // Set initial activity est to 0
  if (index == 0) {
    arr[index].est = 0;
    return;
  }
  let max = -9999;
  // Loop through each other task
  for (let j = 0; j <= arr.length; j++) {
    // If our task has that task as a predecessor
    if (arr[index].predecessors.includes(arr[j].name)) {
      if (arr[j].eft > maximum) { // Set the new EST to that task's EFT
        maximum = arr[j].eft;
      // If we have multiple predecessors, set the task to the maximum predecessor EFT
      }
    }
  } 
}

function calceft(arr, index) {
  arr[index].eft = arr[index].est + arr[index].duration;
}