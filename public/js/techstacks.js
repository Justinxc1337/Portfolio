document.addEventListener("DOMContentLoaded", function() {
    var x = document.getElementById("myLinks");
    
    x.style.display = "none";
});

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

const words = ['Coming Soon', 'Frontend', 'Language', 'Framework'];
let index = 0;

function animateText() {
    document.getElementById('caption1').textContent = words[index];
    // document.getElementById('caption2').textContent = words[index];
    index = (index + 1) % words.length;
}

setInterval(animateText, 1500);