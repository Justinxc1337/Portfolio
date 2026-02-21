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

// Loads header to all pages for cleanup and easier maintenance
fetch("header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header-placeholder").innerHTML = data;
});