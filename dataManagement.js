// Class for TableInputRow

class TableInputRow {
    static latestId = -1; // Initialize latestId

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

function deleteRow(button) {
    const row = button.closest('tr'); // Get the closest row element
    const rowIndex = row.rowIndex - 1; // Get the index of the row to delete

    // Decrement IDs of all rows that come after the deleted row
    for (let i = rowIndex + 1; i < rowArray.length; i++) {
        rowArray[i].id--;
    }

    // Decrement latestId
    TableInputRow.latestId--;

    // Remove the row from the HTML table
    row.remove();

    // Remove the deleted row object from the rowArray
    rowArray.splice(rowIndex, 1);

    // Remove the row name from options in predecessor and successor dropdowns
    const deletedRowName = rowArray[rowIndex].name;
    updateAllDropdownOptions();

    // Update output box
    updateOutputBox();
}

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

bindEventListenersForRow(); // Initial event listeners bind

// Function to update TableInputRow object when input or select changes
function updateTableRow(event) {
    const inputElement = event.target;
    const rowIndex = inputElement.parentElement.parentElement.rowIndex - 1; // Get row index
    const placeholder = inputElement.getAttribute('placeholder'); // Get placeholder value
    const value = inputElement.value; // Get input value

    if (placeholder === 'Name') {
        // Update the name of the row
        rowArray[rowIndex].name = value;
        // Update the options of predecessor and successor dropdowns for all rows
        updateAllDropdownOptions();
    } else {
        // Update other properties
        rowArray[rowIndex][placeholder.toLowerCase()] = value;
    }

    updateOutputBox(); // Update output box
}

// Function to update the options of predecessor and successor dropdowns for all rows
function updateAllDropdownOptions() {
    const names = rowArray.map(row => row.name); // Get all names

    // Update the options of predecessor and successor dropdowns for all rows
    const dropdowns = document.querySelectorAll('.presuc-input');
    dropdowns.forEach((dropdown) => {
        updateDropdownOptions(dropdown, names);
    });
}

// Function to update the options of a specific dropdown
function updateDropdownOptions(dropdown, names) {
    // Clear existing options
    dropdown.innerHTML = '<option>---</option>';

    // Add options for all names
    names.forEach((name) => {
        const option = document.createElement('option');
        option.text = name;
        option.value = name;
        dropdown.add(option);
    });
}

// Function to update output box
function updateOutputBox() {
    outputBox.innerHTML = ""; // Clear output box
    for (let i = 0; i < rowArray.length; i++) {
        outputBox.innerHTML += Object.values(rowArray[i]) + "<br>"; // Update output box with latest data
    }
}

updateOutputBox(); // Initial update to output box