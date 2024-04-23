function calcbtc(arr) {
  calcestandeft(arr)
  calclstandlft(arr)
  calcslack(arr)
}

function calcestandeft(arr) {
  for (let i = 0; i < arr.length; i++) {
    calcest(arr, i);
    calceft(arr, i);
  }
}

function calclstandlft(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    calclft(arr, i);
    calclst(arr, i);
  }
}

function calcslack(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].slack = arr.lst - arr.est;
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
  for (let j = 0; j < arr.length; j++) {
    // If our task has that task as a predecessor
    if (arr[index].predecessors.includes(arr[j].name)) {
      if (arr[j].eft > max) { // Set the new EST to that task's EFT
        max = arr[j].eft;
      // If we have multiple predecessors, set the task to the maximum predecessor EFT
      }
    }
  }
  arr[index].est = max;
}

function calceft(arr, index) {
  arr[index].eft = arr[index].est + arr[index].duration;
}

function calclst(arr, index) {
  arr[index].lst = arr[index].lft - arr[index].duration;
}

function calclft(arr, index) {
  // Set final activity est to be the EFT of the final task
  if (index == 0) {
    arr[index].lft = arr[index].eft;
    return;
  }
  let min = 9999;
  // Loop through each other task
  for (let j = 0; j < arr.length; j++) {
    // If our task has that task as a predecessor
    if (arr[index].successors.includes(arr[j].name)) {
      if (arr[j].lst < min) { // Set the new EST to that task's EFT
        min = arr[j].lst;
      // If we have multiple predecessors, set the task to the maximum predecessor EFT
      }
    }
  }
  arr[index].lft = max;
}