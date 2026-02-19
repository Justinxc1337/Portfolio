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

/* document.addEventListener('DOMContentLoaded', (event) => {
    const sections = document.querySelectorAll('main > section');
    const pageIndicator = document.getElementById('page-indicator');
    let currentSectionIndex = 0;

    // Create circles for each section
    sections.forEach((section, index) => {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        if (index === 0) {
            circle.classList.add('active');
        }
        pageIndicator.appendChild(circle);
    });

    const circles = document.querySelectorAll('.page-indicator .circle');

    function updatePageIndicator(index) {
        circles.forEach((circle, i) => {
            if (i === index) {
                circle.classList.add('active');
            } else {
                circle.classList.remove('active');
            }
        });
    }

    function scrollToSection(index) {
        sections[index].scrollIntoView({ behavior: 'smooth' });
        updatePageIndicator(index);
    }

    window.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
            currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
        } else {
            currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
        }
        scrollToSection(currentSectionIndex);
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowDown') {
            currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
        } else if (event.key === 'ArrowUp') {
            currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
        }
        scrollToSection(currentSectionIndex);
    });
}); */

document.addEventListener('DOMContentLoaded', (event) => {
    const swiper = new Swiper('.swiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
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
        breakpoints: {
            480: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                }
            }
        }
    });
});