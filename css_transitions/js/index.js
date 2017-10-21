
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

function toggleAnimation() {
  var animationObj = document.getElementById("toggleDiv");
  // add class to object
  animationObj.classList.add("animation4"); 
  // remove class just in case
  animationObj.classList.remove("animation5"); 
}

function stopAnimation() {
  var animationObj = document.getElementById("toggleDiv");
  // remove class
  animationObj.classList.remove("animation4"); 
  // add class to object
  animationObj.classList.add("animation5"); 
}