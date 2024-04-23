// Delete Row Function

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}

// Add Row Function
$(document).ready(function(){

    function addNewRow() {
        var newRow = $("<tr>");
        newRow.append('<td><input type="text" article class="form-control" placeholder="Name"></td>');
        newRow.append('<td><select class="form-select presuc-input" placeholder="Predecessors" multiple><option>---</option></select></td>');
        newRow.append('<td><select class="form-select presuc-input" placeholder="Successors" multiple><option>---</option></select></td>');
        newRow.append('<td><input type="text" class="form-control" placeholder="Duration" size="6"></td>');
        newRow.append('<td><input type="text" class="form-control" placeholder="EST" disabled></td>');
        newRow.append('<td><input type="text" class="form-control" placeholder="EFT" disabled></td>');
        newRow.append('<td><input type="text" class="form-control" placeholder="LST" disabled></td>');
        newRow.append('<td><input type="text" class="form-control" placeholder="LFT" disabled></td>');
        newRow.append('<td><input type="text" class="form-control" placeholder="Slack" disabled></td>');
        newRow.append('<td><input type="button" class="btn btn-danger" value="Delete Row" onclick="deleteRow(this)"></td>');
        
        $(".possibleInputTable").append(newRow);
    }

    $("#addButton").click(function(){
        addNewRow();
    });
});

function showSpinner() {
    // Get the spinner element
    const spinner = document.querySelector('.spinner-grow');

    // Make sure the spinner element exists
    if (spinner) {
        // Show the spinner by removing the 'd-none' class
        spinner.classList.remove('d-none');
    }
}

//function deleteLogic(r) {
//    var i = r.parentNode.parentNode.rowIndex;
//    rowArray.pop(r);

//}



// IDK if it's obvious and I'm slow but I think using the clicking of the predecessor & successor dropdown menus as the 
// trigger to gather the appropriate elements to populate the menu would be a good methodology