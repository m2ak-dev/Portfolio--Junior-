document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menuItems = document.querySelector('.menu-items');

    menuIcon.addEventListener('click', function() {
        // Toggle the class to show/hide the menu items
        menuItems.classList.toggle('active');
    });
});

