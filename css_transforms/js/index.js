
/***************************************
	doRotation
	Applies rotation to element
***************************************/
function doRotation() {
  var degrees = document.getElementById("rotate").value;
  var rotateCmd = "rotate(" + degrees + "deg)";
  var square = document.getElementById("div1");
  square.style.transform=rotateCmd;
}

/***************************************
	doScale
	Applies scale to element
***************************************/
function doScale() {
  var scale = document.getElementById("scale").value;
  var cmd = "scale(" + scale + "," + scale + ")";
  var square = document.getElementById("div1");
  square.style.transform=cmd;
}

/***************************************
	doTranslation
	Applies translation to element
***************************************/
function doTranslation() {
  var x = document.getElementById("translateX").value;
  var y = document.getElementById("translateY").value;
  console.log(x + ":" + y);
  var cmd = "translate(" + x + "px," + y + "px)";
  var square = document.getElementById("div1");
  square.style.transform=cmd;
}
/***************************************
	doSkew
	Applies x skew to element
***************************************/
function doSkew() {
  var skew = document.getElementById("skew").value;
  var cmd = "skew(" + skew + "deg" + ")";
  var square = document.getElementById("div1");
  square.style.transform=cmd;
  console.log(cmd);
}

/***************************************
	doMatrix
	performs every transform on element
***************************************/
function doMatrix() {
  var skew = document.getElementById("skew").value;
  var transX = document.getElementById("translateX").value;
  var transY = document.getElementById("translateY").value;
  var scale = document.getElementById("scale").value;
  var rotate = document.getElementById("rotate").value;
  //scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY()
  var cmd = "matrix(" + scale +"," + "0," + skew + "," + scale 
  + "," + transX + "," + transY + ")";
  
  var square = document.getElementById("div1");
  square.style.transform=cmd;
  console.log(cmd);
}