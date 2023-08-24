$(document).ready(function () {
    $("a[href^='#']").on("click", function (event) {
        event.preventDefault();
        var hash = this.hash;
        $("html, body").animate({
                scrollTop: $(hash).offset().top,
            },
            800, // Adjust the scrolling speed if needed
            function () {
                window.location.hash = hash;
            }
        );
    });
});