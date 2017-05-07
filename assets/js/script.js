var bubbles = document.getElementById('bubbles');

var active = 1;
var items = bubbles.getElementsByClassName("gallery-item");

bubbles.onscroll = function(event) {
    items[active].classList = "gallery-item active";
    items[active-1].classList = "gallery-item previous";
    items[active+1].classList = "gallery-item next";
    
    if(this.scrollLeft > (items[active].offsetLeft - items[0].offsetWidth/2) ) {
        active++;
    }
    if(this.scrollLeft < (items[active-1].offsetLeft - items[0].offsetWidth/2) ) {
        active--;
    }
}






