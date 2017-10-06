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

