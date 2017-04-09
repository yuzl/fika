$(document).ready(function () {
    
});

$(".keyboard-numpad div").click(function(event){
    $('#amount').val($('#amount').val() + $(this).text());
});