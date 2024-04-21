// Displaying object properties

export const tableInputRow = {
    name: "Task 1",
    predecessors: "Task 0",
    successors: "Task 2",
    duration: 5
};

// Use Object.values to convert the object to an array and display it easily
const tableInputAsArray = Object.values(tableInputRow)
document.getElementById("outputBox").innerHTML = tableInputAsArray