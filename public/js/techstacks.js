// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", function() {
    // Get the menu element
    var x = document.getElementById("myLinks");
    
    // Set the initial display to none
    x.style.display = "none";
});

// Toggle the menu's visibility
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
