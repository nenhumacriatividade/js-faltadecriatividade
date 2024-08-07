function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    
    stroke("blue")
    fill("yellow")
    
    //console.log(mouseIsPressed);
    
    if(mouseIsPressed) {
      rect(mouseX, mouseY, 26, 35);
     }
  }
  