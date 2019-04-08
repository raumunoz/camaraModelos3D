var canvasToutch = document.getElementById('renderCanvas');
var mc = new Hammer(canvasToutch);

mc.on("panleft panright tap press panup pandown ", function(event) {
    event.gesture.preventDefault();
    console.log(event.type +" gesture detected.");
});
/*
function hammerTime(ev) {
    switch(ev.type) {
      case 'panmove': 
        updateContainerOffsetX(ev.deltaX, ev.direction);
        break;
      case 'swipeleft':
        self.next();
        break;
      case 'swiperight':
        self.prev();
        break;
    }
  }
  */