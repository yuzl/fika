var myElement = document.getElementById('myElement');

/*
// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(myElement);

// let the pan gesture support all directions.
// this will block the vertical scrolling on a touch-device while on the element

// listen to events...
mc.on("panleft panright", function(ev) {
    console.log(ev.type +" gesture detected.");
});

*/

myElement.onscroll = function(event) {
    var scrolled = this.scrollLeft;
    //document.body.style.setProperty('--bla', this.scrollLeft);
    console.log(scrolled);
    
    if(scrolled == 125) {
        this.classList.add('active');
    }
    else {
        this.classList.remove('active');
    }
}

//object.addEventListener("scroll", myScript);