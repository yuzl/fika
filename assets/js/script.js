var bubbles = document.getElementById('bubbles');

var active = 1;
var items = bubbles.getElementsByClassName("gallery-item");

bubbles.onscroll = function(event) {
    //items.classList = "gallery-item";
    items[active].classList = "gallery-item active";
    items[active-1].classList = "gallery-item previous";
    items[active+1].classList = "gallery-item next";
    
    
    if(this.scrollLeft > (items[active].offsetLeft - items[0].offsetWidth/2) ) {
        active++;
    }
    if(this.scrollLeft < (items[active-1].offsetLeft - items[0].offsetWidth/2) ) {
        active--;
    }
    
    var zoom = (this.scrollLeft - items[active-1].offsetLeft) / 100;
    document.body.style.setProperty('--zoom', zoom);
    console.log(zoom);
}






