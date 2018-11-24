$("li:nth-child(1) > a").click(function() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top - 150 /*(150) is height to leave from top*/
    }, 1000);
});

$("li:nth-child(2) > a").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top - 150 /*(150) is height to leave from top*/
    }, 1000);
});

$("li:nth-child(3) > a").click(function() {
    $('html, body').animate({
        scrollTop: $("#works").offset().top - 150 /*(150) is height to leave from top*/
    }, 1000);
});

$("li:nth-child(4) > a").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top - 150 /*(150) is height to leave from top*/
    }, 1000);
});