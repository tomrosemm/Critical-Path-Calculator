// Class for TableInputRow
class TableInputRow {
    constructor(name, predecessors, successors, duration, est, eft, lst, lft, slack) {
        this.id = TableInputRow.incrementId() - 1;
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
            this.latestId = 1;
        } else {
            this.latestId++;
        }
        return this.latestId;
    }
}

// Define an array to store TableInputRow objects
const rowArray = [];

// Create a new sample TableInputRow object
const tableInputRow = new TableInputRow("Task 1", ["Task 0"], ["Task 2"], 5, "", "", "", "", "");

// Push the TableInputRow object to the rowArray
rowArray.push(tableInputRow);

// Access the outputBox element and set its innerHTML
const outputBox = document.getElementById("outputBox");
for (let i = 0; i < rowArray.length; i++) {
    outputBox.innerHTML += Object.values(rowArray[i]) + "<br>";
}