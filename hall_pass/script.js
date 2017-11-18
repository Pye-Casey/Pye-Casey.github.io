
function signOut() {
	console.log("Sign out");
}

function modalSettings() {
	var modal = document.getElementById('modalSettings');
	modal.style.display = "block";
}

function clearSettings() {
	var modal = document.getElementById('modalSettings');
	modal.style.display = "none";
}

function modalLate() {
	var modal = document.getElementById('modalLate');
	modal.style.display = "block";
}

function clearLate() {
	var modal = document.getElementById('modalLate');
	modal.style.display = "none";
}
function openNav() {
    document.getElementById("mySidenav").style.height = "60px";
}

function modalHistory() {
	var modal = document.getElementById('modalHistory');
	modal.style.display = "block";
}

function clearHistory() {
	var modal = document.getElementById('modalHistory');
	modal.style.display = "none";
}
function openNav() {
    document.getElementById("mySidenav").style.height = "60px";
}
function closeNav() {
    document.getElementById("mySidenav").style.height = "0";
}
function enlarge() {
  console.log("shrink");
  var menu = document.getElementById("topMenu");
  var img = document.getElementById("menu_icon");
  // enlarge menu
  menu.classList.add('enlarge');
  menu.classList.remove('shrink');
  // change img
  img.src = "images/arrow_up_big_white.png";
}

function shrink() {
  console.log("shrink");
  var menu = document.getElementById("topMenu");
  var img = document.getElementById("menu_icon");
  // change img
  img.src = "images/arrow_down_big_white.png";
  // shrink menu
  menu.classList.add('shrink');
  menu.classList.remove('enlarge');
  console.log(menu.classCnt);
  
}

function resizeMenu() {
	var menu = document.getElementById("topMenu");
	var height = menu.clientHeight;
	console.log(height);
	
	if (height == 30) 
		enlarge();
	else
		shrink();
}

/***************************************
	basicRequest
	Opens content from file and posts to page
***************************************/
function basicRequest() {
  var myArea = document.getElementById("area1");
  var fileName = "data/basic.txt" 
  var myRequest = new XMLHttpRequest(); // request object
  myRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { // response ready
      myArea.innerHTML = myRequest.responseText;
    }
  }
  myRequest.open("GET", fileName, true);
  myRequest.send();
}
/***************************************
	requestPet
	Request data from server using XMLHttpRequest
	NOTE: This will seem to error out when running on local machine.
	Runs correctly only on a configured server
***************************************/
function requestPet() {
  var petObj; // parse to this object
  var petStr; // entire string for testing
  var fileName = "data/pet.txt";
  // display object
  var myLocation = document.getElementById("area2");
  var xhttp = new XMLHttpRequest(); // create xmlhttprequest object
  xhttp.onreadystatechange = function() { 
  if (this.readyState == 4 && this.status == 200) { // readyState 4 means ready, status 200 request is ready
      // Get object from JSON parse
      petObj = JSON.parse(this.responseText);
      // display to page  
      myLocation.innerHTML = "Name: " + petObj.name + "\n";
      myLocation.innerHTML += "Species: " + petObj.species + "\n";
      myLocation.innerHTML += "Breed: " + petObj.breed + "\n";
      myLocation.innerHTML += "Temperment: " + petObj.temperment + "\n";
    }
  };
  xhttp.open("GET", fileName, true);
  xhttp.send();
}

/***************************************
	requestArray
	Requests a file with arrays
  Displays to page
***************************************/
function requestArray() {
  var myArea = document.getElementById("area3");
  var fileName = "data/studentArray.txt";
  var obj;
  var myRequest = new XMLHttpRequest(); // request object

  myRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { // response ready
      //myArea.innerHTML = myRequest.responseText;
      // Get object from JSON parse
      obj = JSON.parse(this.responseText);
      // Create explanation paragraph
      myArea.innerHTML = "Welcome to " + obj.className + ", " + obj.classTitle +". \n";
      myArea.innerHTML += "Your teacher is " + obj.teacher + ". This course is worth " + obj.credits +" credits.\n";
      // Count students
      var studentCnt = obj['students'].length;
      // Display info to page
      for (i = 0; i < studentCnt; i++) {
        // display name
        myArea.innerHTML += "\tStudent: " + obj['students'][i]['name'] + "\n";
        // display age
        myArea.innerHTML += "\t\tAge: " + obj['students'][i]['age'] + "\n";
        // display gpa
        myArea.innerHTML += "\t\tGPA: " + obj['students'][i]['gpa'] + "\n";
        // display class section
        myArea.innerHTML += "\t\tClasses: \n";
        // Get class count
        var classCnt = obj['students'][i]['classes'].length;
        console.log("Class count: " + classCnt);
        // Display classes taken by student
        for (e = 0; e < classCnt; e++) {
           myArea.innerHTML += "\t\t\t" + obj['students'][i]['classes'][e] + "\n";
        }
        /*var eachClass;
        for (eachClass in obj['students'][i]['classes']) {
          myArea.innerHTML += "\t\t\t" + eachClass + "\n";
        }*/
        
      } 
    }
  }
  myRequest.open("GET", fileName, true);
  myRequest.send();
}

