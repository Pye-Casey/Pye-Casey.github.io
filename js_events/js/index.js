var cntClick = 0;
var cntIt = 0;

function letsLoad() {
  console.log("Load event");
  document.getElementById("p1").innerHTML = "This paragraph is populated when the page loads.";
  // touch load
  loadTouch();
  // load transitions
  loadTransition();
  // load animation
  loadAnimation();
}

function mouseOver() {
  document.getElementById("mouse").innerHTML = "Over the objects";
}

function mouseOut() {
  document.getElementById("mouse").innerHTML = "Out of the object";
}

function clicker() {
  cntClick = cntClick + 1;
  document.getElementById("onclick").innerHTML = "Click count: " + cntClick;
}

function loadTouch() {
  console.log("Adding listenters");
  // set up listeners
  document.getElementById("touch").addEventListener("touchstart", startTouch);
  document.getElementById("touch").addEventListener("touchmove", function(){
    document.getElementById("touch").innerHTML = "Touch move activated!";
  })
  document.getElementById("touch").addEventListener("touchend", function(){
    document.getElementById("touch").innerHTML = "Touch End activated!";
  })
  document.getElementById("touch").addEventListener("touchcancel", function(){
    document.getElementById("touch").innerHTML = "Touch Cancel activated!";
  })
  document.getElementById("touch").addEventListener("touchenter", function(){
    document.getElementById("touch").innerHTML = "Touch Enter activated!";
  })
  document.getElementById("touch").addEventListener("touchleave", function(){
    document.getElementById("touch").innerHTML = "Touch Leave activated!";
  })
}

function startTouch() {
  document.getElementById("touch").innerHTML = "Start Touch activated!";
}

function enlargeBox() {
  var box = document.getElementsByClassName('trigger')[0];  // only want to trigger the first one
  // start enlargment
  box.classList.add('triggerEnlarge'); 
  // undo shrinking if necessary
  box.classList.remove('triggerSmall');
}

function smallBox() {
  var box = document.getElementsByClassName('trigger')[0]; // only want to trigger the first one
  box.classList.add('triggerSmall');
  box.classList.remove('triggerEnlarge');
}

function loadTransition(event) {
	console.log("transition load");
	document.getElementById("trigger").addEventListener("transitionend", getPropertyEnd);
}
function getPropertyEnd(event) {
	document.getElementById("pTrans").innerHTML = "Transition property name: " +  event.propertyName + "<br>";
	document.getElementById("pTrans").innerHTML += "Transition elapsed time: " +  event.elapsedTime ;
}

function loadAnimation(event) {
	document.getElementById("animation").addEventListener("animationend", getAnimationEnd);
	document.getElementById("animation").addEventListener("animationiteration", animationIter);
	//document.getElementById("animation").addEventListener("animationstart", getAnimationStart);
}

function animationIter(event) {
	cntIt = cntIt + 1;
	document.getElementById("pAnimation").innerHTML = "Animation iteration count: " + cntIt;
}

function getAnimationEnd(event) {
	document.getElementById("pAnimation").innerHTML += "<br>Animation has ended.";
}
