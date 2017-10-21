/***************************************
	changeColor
	Changes color of a style
***************************************/
function changeColor() {
  // paragraph to change
  var myPar = document.getElementById("p1");
  var color = myPar.style.color; // color of node
  // assign color
  if (color == "") // standard font color
     myPar.style.color = "blue";
  else if (color == "blue")
    myPar.style.color = "red";
  else if (color == "red")
    myPar.style.color = "green";
  else
    myPar.style.color = "blue";
}

/***************************************
	changeFont
	Changes font of style
***************************************/
function changeFont() {
   // font to change
  var myPar = document.getElementById("p2");
  var font = myPar.style.font; // font of node
  console.log(font);
  if (font == "") // standard font color
     myPar.style.font = "italic bold 20px arial,serif";
  else if (font == "italic bold 20px arial, serif")
    myPar.style.font = "italic bold 20px Georgia, serif";
  else if (font == "italic bold 20px Georgia, serif")
    myPar.style.font = "25px calibr, sans-serif";
  else
    myPar.style.font = ""; // back to default
}

/***************************************
	changeClass
	Applies changes to nodes with class "custom"
***************************************/
function changeClass() {
  var classList = document.getElementsByClassName("custom");
  // change color
  var myPar = document.getElementById("p1");
  var color = myPar.style.color; // style color
  var fontPar = document.getElementById("p2");
  var font = fontPar.style.font; // style font
  console.log(color);
  // change each item in class
  for (i = 0; i < classList.length; i++) {
    // change color
    classList[i].style.color = color;
    // change font
     classList[i].style.font = font;
  }
}