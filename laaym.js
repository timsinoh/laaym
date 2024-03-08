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

document.addEventListener('DOMContentLoaded', function() {
    // Get all testimonials
    var testimonials = document.querySelectorAll('.testimonial');

    // Set the index of the active testimonial
    var currentIndex = 0;

    // Display the first testimonial
    testimonials[currentIndex].classList.add('active');

    // Function to display the next testimonial
    function nextTestimonial() {
        testimonials[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % testimonials.length;
        testimonials[currentIndex].classList.add('active');
    }

    // Automatically change testimonials every 5 seconds
    setInterval(nextTestimonial, 5000);
});
function search() {
    // Get the input value
    var query = document.getElementById("searchInput").value;
    
    // Perform search functionality (e.g., redirect to search results page)
    // Replace this with your actual search functionality
    alert("Searching for: " + query);
}



//https://www.youtube.com/watch?v=thyHHCj0CZk