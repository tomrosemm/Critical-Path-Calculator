// Plus Button Modal

// Get the modal
var modal = document.getElementById("plusModal");

// Get the button that opens the modal
var btn = document.getElementById("plusButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// IDK if it's obvious and I'm slow but I think using the clicking of the predecessor & successor dropdown menus as the 
// trigger to gather the appropriate elements to populate the menu would be a good methodology