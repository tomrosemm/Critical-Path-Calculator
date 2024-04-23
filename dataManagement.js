// Class for TableInputRow

class TableInputRow {
    constructor(name, predecessors, successors, duration, est, eft, lst, lft, slack) {
        this.id = TableInputRow.incrementId();
        this.name = name;
        this.predecessors = predecessors;
        this.successors = successors;
        this.duration = duration;
        this.est = est;
        this.eft = eft;
        this.lst = lst;
        this.lft = lft;
        this.slack = slack;
    }

    static incrementId() {
        if (!this.latestId) {
            this.latestId = 0;
        } else {
            this.latestId++;
        }
        return this.latestId;
    }
}

// Define an array to store TableInputRow objects
const rowArray = [];

// Create a new sample TableInputRow object
const tableInputRow0 = new TableInputRow("", [""], [""], "", "", "", "", "", "");

//const tableInputRow1 = new TableInputRow("Task 1", ["Task 0"], ["Task 2"], 5, "", "", "", "", "");

// Push the TableInputRow object to the rowArray
rowArray.push(tableInputRow0);
//rowArray.push(tableInputRow1);

// Event listener for the "Add Row" button
document.getElementById("addButton").addEventListener("click", function() {
    const newRow = new TableInputRow("", ["---"], ["---"], "", "", "", "", "", "");
    rowArray.push(newRow); // Push the new TableInputRow object to the rowArray
    updateOutputBox(); // Update the output box to display the new row
    bindEventListenersForRow(); // Bind event listeners for the new row
});

// Function to bind event listeners rows
function bindEventListenersForRow() {
    const inputs = document.querySelectorAll('input[type="text"]');
    const selects = document.querySelectorAll('select');

    inputs.forEach(input => {
        input.addEventListener('input', updateTableRow);
    });

    selects.forEach(select => {
        select.addEventListener('change', updateTableRow);
    });
}

bindEventListenersForRow();

// Add event listeners to input elements
//document.querySelectorAll('input[type="text"]').forEach(input => {
//    input.addEventListener('input', updateTableRow);
//});

// Add event listeners to select elements
//document.querySelectorAll('select').forEach(select => {
//    select.addEventListener('change', updateTableRow);
//});

// Function to update TableInputRow object when input or select changes
function updateTableRow(event) {
    const inputElement = event.target;
    const rowIndex = inputElement.parentElement.parentElement.rowIndex - 1; // Get row index
    const property = inputElement.getAttribute('placeholder'); // Get property name from placeholder
    rowArray[rowIndex][property.toLowerCase()] = inputElement.value; // Update TableInputRow object
    updateOutputBox(); // Update output box
}

// Function to update output box
function updateOutputBox() {
    outputBox.innerHTML = ""; // Clear output box
    for (let i = 0; i < rowArray.length; i++) {
        outputBox.innerHTML += Object.values(rowArray[i]) + "<br>"; // Update output box with latest data
    }
}

updateOutputBox(); // Initial update to output box

// Access the outputBox element and set its innerHTML
//const outputBox = document.getElementById("outputBox");
//for (let i = 0; i < rowArray.length; i++) {
    outputBox.innerHTML += Object.values(rowArray[i]) + "<br>";
//}