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