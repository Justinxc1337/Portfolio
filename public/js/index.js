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

document.addEventListener('DOMContentLoaded', (event) => {
    const sections = document.querySelectorAll('main > section');
    let currentSectionIndex = 0;

    function scrollToSection(index) {
        sections[index].scrollIntoView({ behavior: 'smooth' });
    }

    window.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
            // Scrolling down
            currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
        } else {
            // Scrolling up
            currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
        }
        scrollToSection(currentSectionIndex);
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowDown') {
            // Scrolling down
            currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
        } else if (event.key === 'ArrowUp') {
            // Scrolling up
            currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
        }
        scrollToSection(currentSectionIndex);
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    const swiper = new Swiper('.swiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        /* slidesPerView: 3,
        spaceBetween: 30, */
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        loop: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
});