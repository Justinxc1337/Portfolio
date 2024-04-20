function darkMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.style.color = "#f4d58dff";
    content.innerText = "Dark Mode is ON";
}

function lightMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.style.color = "#f4d58dff";
    content.innerText = "Dark Mode is OFF";
}

document.addEventListener('DOMContentLoaded', (event) => {
    let darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.checked = true;
    darkModeToggle.addEventListener('change', function() {
        if (this.checked) {
            darkMode();
        } else {
            lightMode();
        }
    });
});

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
