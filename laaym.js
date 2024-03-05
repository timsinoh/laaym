document.addEventListener('DOMContentLoaded', function() {
    // Get the "Read More" link, the "Read Less" link, and the additional content
    var readMoreLink = document.getElementById('read-more');
    var readLessLink = document.getElementById('read-less');
    var moreContent = document.getElementById('more-content');

    // Add click event listener to the "Read More" link
    readMoreLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Hide the "Read More" link
        readMoreLink.style.display = 'none';
        
        // Display the additional content
        moreContent.style.display = 'block';
    });

    // Add click event listener to the "Read Less" link
    readLessLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Hide the additional content
        moreContent.style.display = 'none';
        
        // Display the "Read More" link
        readMoreLink.style.display = 'inline'; // or 'block' if it was originally a block element
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Get the menu icon, close icon, and the nav menu
    var menuIcon = document.getElementById('menu-icon');
    var closeIcon = document.getElementById('close-icon');
    var navMenu = document.getElementById('nav-menu');

    // Add click event listener to the menu icon
    menuIcon.addEventListener('click', function() {
        // Toggle the display of the nav menu
        if (navMenu.classList.contains('menu-open')) {
            navMenu.classList.remove('menu-open');
        } else {
            navMenu.classList.add('menu-open');
        }
    });

    // Add click event listener to the close icon
    closeIcon.addEventListener('click', function() {
        navMenu.classList.remove('menu-open');
    });
});

