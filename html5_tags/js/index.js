
function generateCanvas() {
  // generate random number
  var ranNum = Math.floor((Math.random() * 4) + 1); 
  
  // select what to draw
  switch(ranNum) {
    case 1: //draw line
      drawLine();
      break;
    case 2: // draw text
      drawText();
      break;
    case 3: // linear gradient
      drawGradient();
      break;
    default: // draw circle
      drawCircle();
  }
}

function drawLine() {
  console.log("In DrawLine");
  var canvas = document.getElementById("canvas1");
  var context = canvas.getContext("2d");
 
  context.moveTo(0,150);
  context.lineTo(75,75);
  context.stroke(); 
  // Description
  document.getElementById("description").innerHTML = "Description: A line has been drawn on the canvas.";
}

function drawText() {
  console.log("DrawText");
  var canvas = document.getElementById("canvas1");
  var context = canvas.getContext("2d");
  context.font = "20px Calibri";
  context.fillText("Text Drawn!",10,50);
  // Description
  document.getElementById("description").innerHTML = "Description: Text has been drawn to the canvas. It will not be visible with gradient.";
}

function drawGradient() {
  console.log("DrawGradient");
  var canvas = document.getElementById("canvas1");
  var context = canvas.getContext("2d");
  // gradient creation
  var gradient = context.createLinearGradient(0,0,150,0);
  gradient.addColorStop(0,"purple");
  gradient.addColorStop(1,"white");
  context.fillStyle = gradient;
  context.fillRect(0,0,150,150);
  // Description
  document.getElementById("description").innerHTML = "Description: We just drew a linear gradient.";
}


function drawCircle() {
  console.log("DrawCircle");
  var canvas = document.getElementById("canvas1");
  var context = canvas.getContext("2d");
  context.beginPath();
  context.arc(75,75,60,0,2*Math.PI);
  context.stroke();
  // Description
  document.getElementById("description").innerHTML = "Description: Drawing circles is pretty easy thanks to Pi.";
}