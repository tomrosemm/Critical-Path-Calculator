// Define rowArray and push tableInputRow into it
const rowArray = [];

const tableInputRow = {
    name: "Task 1",
    predecessors: "Task 0",
    successors: "Task 2",
    duration: 5
};

rowArray.push(tableInputRow);

// Use Object.values to convert the object to an array and display it easily
const tableInputAsArray = Object.values(tableInputRow);

document.getElementById("outputBox").innerHTML = Object.values(rowArray[0])