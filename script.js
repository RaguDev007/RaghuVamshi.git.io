document.addEventListener("DOMContentLoaded", function() {
    var cardsContainer = document.getElementById('cardsContainer');
    var scrollAmount = 200; // Adjust this value to control scroll amount

    document.getElementById('scrollLeft').addEventListener('click', function() {
        cardsContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    document.getElementById('scrollRight').addEventListener('click', function() {
        cardsContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var cardsContainer = document.getElementById('cardsContainer');

    // Handle mouse wheel scroll
    cardsContainer.addEventListener('wheel', function(event) {
        event.preventDefault();
        var scrollAmount = event.deltaY;
        cardsContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
});



////////////////////////////Ajax////////////////////////////////////
$(document).ready(function() {
    // Function to load page content via AJAX
    function loadPage(page) {
        $.ajax({
            url: page + '.html',
            success: function(data) {
                $('#content').html(data);
            },
            error: function() {
                $('#content').html('<p>Error loading page.</p>');
            }
        });
    }

    // Handle clicks on navigation links
    $('.nav-link').on('click', function(e) {
        e.preventDefault();
        var page = $(this).data('page');
        loadPage(page);
    });

    // Load default page content
    loadPage('home');
});


document.addEventListener("DOMContentLoaded", function() {
    console.log("Homepage Loaded");
});
