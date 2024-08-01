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

function toggleMenu() {
    const menu = document.querySelector('#headermobile .menu');
    const isMenuVisible = menu.style.display === 'flex';
    menu.style.display = isMenuVisible ? 'none' : 'flex';

if (!isMenuVisible) {
    document.addEventListener('click', closeMenuOnClickOutside);
    }
}

function closeMenuOnClickOutside(event) {
    const menu = document.querySelector('#headermobile .menu');
    const menuIcon = document.querySelector('#headermobile .menu-icon');

    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
    menu.style.display = 'none';
    document.removeEventListener('click', closeMenuOnClickOutside);
    }
}