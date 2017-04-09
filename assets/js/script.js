$(document).ready(function () {
    $('.user').slick({
        centerMode: true,
        slidesToShow: 5,
        arrows: false,
        infinite: false,
        adaptiveHeight: true,
        swipeToSlide: true,
        focusOnSelect: true,
        //centerPadding: '1%',
        variableWidth: true,
        touchThreshold: 100,
    });
});



$(".keyboard-numpad div").click(function(event){
    $('#amount').val($('#amount').val() + $(this).text());
});

$(".keyboard-save").click(function(event) {
    $(".keyboard").removeClass("open");
})

$(".transaction").click(function(event) {
    $(".keyboard").toggleClass("open");
})