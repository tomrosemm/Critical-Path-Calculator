// Class for TableInputRow

class TableInputRow {
    static latestId = 0; // Initialize latestId

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
        TableInputRow.latestId++; // Increment latestId
        return TableInputRow.latestId;
    }
}

// Define an array to store TableInputRow objects
const rowArray = [];

// Create a new sample TableInputRow object
const tableInputRow0 = new TableInputRow("", [""], [""], "", "", "", "", "", "");

// Push the TableInputRow object to the rowArray
rowArray.push(tableInputRow0);

// Event listener for the "Add Row" button
document.getElementById("addButton").addEventListener("click", function() {
    const newRow = new TableInputRow("", ["---"], ["---"], "", "", "", "", "", "");
    rowArray.push(newRow); // Push the new TableInputRow object to the rowArray
    updateOutputBox(); // Update the output box to display the new row
    bindEventListenersForRow(); // Bind event listeners for the new row
});

// Function to bind event listeners for rows
function bindEventListenersForRow() {
    const table = document.querySelector('table.possibleInputTable');

    table.addEventListener('input', function(event) {
        const target = event.target;
        if (target.matches('input[type="text"]') || target.matches('select')) {
            updateTableRow(event);
        }
    });
}

bindEventListenersForRow();

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