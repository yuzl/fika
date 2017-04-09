$(document).ready(function () {
    
});

$(".keyboard-numpad div").click(function(event){
    $('#amount').val($('#amount').val() + $(this).text());
});

$(".keyboard-save").click(function(event) {
    $(".keyboard").removeClass("open");
})

$(".transaction").click(function(event) {
    $(".keyboard").addClass("open");
})