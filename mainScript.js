// Delete Row Button

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}

$(document).ready(function(){

    function addNewRow() {
        var newRow = $("<tr>");
        newRow.append('<td><input type="text" article class="form-control" placeholder="Name"></td>');
        newRow.append('<td><select class="form-select" placeholder="Predecessors"><option>---</option><option>1</option><option>2</option><option>3</option></select></td>');
        newRow.append('<td><select class="form-select" Placeholder="Successors"><option>---</option><option>1</option><option>2</option><option>3</option></select></td>');
        newRow.append('<td><input type="text" class="form-control" placeholder="Duration"></td>');
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



// IDK if it's obvious and I'm slow but I think using the clicking of the predecessor & successor dropdown menus as the 
// trigger to gather the appropriate elements to populate the menu would be a good methodology