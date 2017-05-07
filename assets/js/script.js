var bubbles = document.getElementById('bubbles');

var active = 1;
var items = bubbles.getElementsByClassName("gallery-item");
var zoomfactor = 0.5;

bubbles.onscroll = function(event) {
    //items.classList = "gallery-item";
    
    for (var i=0;i<items.length; i++) {
        items[i].classList = "gallery-item";
    }
    
    items[active].classList = "gallery-item active";
    items[active-1].classList = "gallery-item previous";
    items[active+1].classList = "gallery-item next";
    
    
    if(this.scrollLeft > (items[active].offsetLeft - items[active].offsetWidth/2) ) {
        active++;
    }
    if(this.scrollLeft <= (items[active-1].offsetLeft - items[active].offsetWidth/2) ) {
        active--;
    }
    
    var zoom = 1 - (1-zoomfactor) * Math.abs(this.scrollLeft - items[active-1].offsetLeft) / (items[active].offsetWidth/2);
    var zoomnext = ( 0.5 + (1-zoomfactor) * (this.scrollLeft - items[active-1].offsetLeft) / (items[active].offsetWidth/2) ) / 2;
    var zoomprev = ( 0.5 - (1-zoomfactor) * (this.scrollLeft - items[active-1].offsetLeft) / (items[active].offsetWidth/2) ) / 2;
    console.log(zoomnext + " " + zoom);
    document.body.style.setProperty('--zoom', zoom);
    document.body.style.setProperty('--zoom-next', (zoomnext));
    document.body.style.setProperty('--zoom-prev', (zoomprev));
}