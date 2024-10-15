const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    toggle.addEventListener('click', () => {
        // Adiciona a classe show-menu ao menu de navegação
        nav.classList.toggle('show-menu');

        // Adiciona a classe show-icon para mostrar e esconder o ícone do menu
        toggle.classList.toggle('show-icon');
    });
};

showMenu('nav-toggle', 'nav-menu');

document.addEventListener('DOMContentLoaded', () => {
    const toggleDropdown = (dropdown) => {
        const dropdownMenu = dropdown.querySelector('.dropdown__menu');
        const arrow = dropdown.querySelector('.dropdown__arrow');
        if (dropdownMenu.style.maxHeight) {
            dropdownMenu.style.maxHeight = null;
            arrow.style.transform = 'rotate(0deg)';
        } else {
            dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + "px";
            arrow.style.transform = 'rotate(180deg)';
        }
    };

    const toggleSubmenu = (submenu) => {
        const dropdownSubmenu = submenu.querySelector('.dropdown__submenu');
        const addIcon = submenu.querySelector('.dropdown__add');
        if (dropdownSubmenu.style.maxHeight) {
            dropdownSubmenu.style.maxHeight = null;
            addIcon.style.transform = 'rotate(0deg)';
        } else {
            dropdownSubmenu.style.maxHeight = dropdownSubmenu.scrollHeight + "px";
            addIcon.style.transform = 'rotate(45deg)';
        }
    };

    const dropdowns = document.querySelectorAll('.dropdown__item');
    dropdowns.forEach((dropdown) => {
        const dropdownLink = dropdown.querySelector('.nav__link');
        dropdownLink.addEventListener('click', () => {
            toggleDropdown(dropdown);
        });
    });

    const submenus = document.querySelectorAll('.dropdown__subitem');
    submenus.forEach((submenu) => {
        const submenuLink = submenu.querySelector('.dropdown__link');
        submenuLink.addEventListener('click', (event) => {
            event.stopPropagation();
            toggleSubmenu(submenu);
        });
    });
});
