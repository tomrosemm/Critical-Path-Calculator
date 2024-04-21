// Delete Row Button

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}



// IDK if it's obvious and I'm slow but I think using the clicking of the predecessor & successor dropdown menus as the 
// trigger to gather the appropriate elements to populate the menu would be a good methodology