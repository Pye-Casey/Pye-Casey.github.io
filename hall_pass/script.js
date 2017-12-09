var StudentsOut = [];
var ClassList = ["Bobby James","Sally Steward","Sam Patel"];
var ClassStudents = [];
var History = [];
var lateTime = 60;
var callingId = 0; // used to find student and object that called signout

function Student(name, destination) {
	this.name = name;
	this.destination = destination;
	this.id= Math.floor((Math.random() * 9999) + 1000);
	this.leaveDate;
	this.returnDate;
	this.setReturnDate = function() { // sets the time returned
		this.returnDate = Date.now();
	}
	this.setLeaveDate = function() { // sets leave date 
		this.leaveDate = Date.now();
	}
	var myTime = new Date();
	var timeOut = Date.now();
	var hour;
	var minute = myTime.getMinutes();
	
	minute = minute.toFixed(2); // force minutes to 2 digits
	// convert hours to standard time
	if (myTime.getHours() > 12)
		hour = myTime.getHours() - 12;
	else
		hour = myTime.getHours();
}

function modalReturn() {
	var modal = document.getElementById('modalReturn');
	modal.style.display = "block";
	
	
}

function updateReturnModal() {
	// display pertinent info
	var header = document.getElementById("returnHeading");
	var student = getStudentById(callingId);
	var msg = "Welcome back " + student.name + "!";
	header.innerHTML = msg; // welcome message
	// display time gone
	console.log("Student return:" + student.name);
	var leaveTime = student.leaveDate;
	console.log("Time: " + leaveTime);
	//var leaveHr = leaveTime.getHours();
	/*var leaveMin = leaveTime.getMinutes();
	var returntime = student.returnDate;
	var returnHr = returntime.getHours();
	var returnMin = returntime.getMinutes();
	var diffHour = returnHr - leaveHr;
	console.log("Hours gone:" + diffHour);
	var diffMin = returnMin - leaveMin;
	console.log("Min gone:" + diffMin);
	var timeMsg; */
}

function startReturn(elem){
	// assign id 
	callingId = elem.id;
	// update return modal
	updateReturnModal();
	
	// display return form
	modalReturn();
}

function signIn() {
	// find student
	var myStudent = getStudentById(callingId);
	console.log("My student from id: " + myStudent.name);
	
	if (myStudent !== null && typeof myStudent !== "undefined") {
		// update return date for student
		myStudent.setReturnDate();
		// add to history
		History.push(myStudent);
		// delete from student out list
		removeStudentOut(callingId);
	}
	// destroy element 
	var parentEl = document.getElementById("content");
	var child = document.getElementById(callingId);
	parentEl.removeChild(child);
}

function okReturn() {
	signIn(callingId);
	clearReturn();
}

/****************************************
	removeStudentOut
	Removes a student from StudentOut array
	given an id
****************************************/
function removeStudentOut(stuID) {
	for (i = 0; i < StudentsOut.length; i++){
		var s = StudentsOut[i];
		try{
			if (s.id == stuID){ // student already checked out
				// remove student from student out list
				delete StudentsOut[i];
			}
		} catch(err){
			console.log(err.message);
		}
	}
}

/****************************************
	getStudentById
	Finds student in StudentsOut array
	given an id number
****************************************/
function getStudentById(stuID) {
	console.log("Get student by id - id:" + stuID);
	var myStudent = new Student;
	for (i = 0; i < StudentsOut.length; i++){
		var s = StudentsOut[i];
		try{
			if (s.id == stuID){ // student already checked out
				myStudent = s;
				
			}
		} catch(err){
			console.log(err.message);
		}
	}
	console.log("Get student by id: " + myStudent.name);
	return myStudent;
	
}

/****************************************
	loadCode
	Loads code on load
****************************************/
function loadCode() {
	// load class list
	loadClassList();

	// get settings
	getSettings();
	// set transition time
	
}

/****************************************
	setTransition
	Sets transition time for class
	NOT WORKING YET
****************************************/
function setTransition(elementID) {
	console.log("ID: " + elementID + ". Time:" + lateTime);
	var topName = elementID + "_top";
	var trans = "background-color " + lateTime + "s;";
	var obj = document.getElementById(topName);
	//obj.style.transitionDuration = lateTime + "s";
	//obj.style.transitionDuration = "10s";
	//obj.style.transition = trans;
	//obj.style.transitionProperty = "background-color";
	//obj.style.backgroundColor = "red";
	//console.log("Transition duration:" + obj.style.transitionDuration);
	//console.log("Transition property:" + obj.style.transitionProperty);
	
	// start transition
	//obj.classList.add('late');
	
	
}

function getSettings() {
	if (typeof(Storage) !== "undefined") {
		// local storage available
		// get time
		var time = localStorage.getItem("lateTime");
		console.log(time);
		if (time == "") {
			console.log("Late time not found");
			// create local storage
			localStorage.setItem("lateTime","300");
		}
		else { // time set
			lateTime = time;
			console.log("Late time found: " + time);
		}
		
	} else {
		console.log("Browser not supported");
		// TESTING ONLY
		lateTime = 300; // 5 minute default
	}
	// TESTING ONLY
	lateTime = 30;
	
}

function signOut() {
	var name;
	var destination = document.getElementById("destination").value;
	var isNewStudent;
	// get name
	if (document.getElementById("classList").value == "NULL") {
		// try custom name
		name = document.getElementById("studentName").value;
		isNewStudent = true;
	}
	else { // name is in list
		name = document.getElementById("classList").value;
		isNewStudent = false;
		
	}
	
	//console.log("Name: " + name);
	var newStudent = new Student(name,destination);
	// set time out
	newStudent.setLeaveDate();
	// check for student in students out list
	var isExist = false;
	for (i = 0; i < StudentsOut.length; i++){
		try {
			var s = StudentsOut[i];
			if (s.name == name){ // student already checked out
				isExist = true;
			}
		}
		catch(err) {
			console.log(err.message)
		}
		
	}
	// add student to list 
	if (isExist == false){
		StudentsOut.push(newStudent);
		// create student card
		createCard(newStudent);
	}
	else {
		console.log("Student already checked out");
	}
	// minimize
	clearSignOut();
	
}

function createCard(student) {
	var name = student.name;
	var imgLoc;
	var id = student.id;
	console.log("Name: " + name + ", ID: " + id);
	var destination = document.getElementById("destination").value;
	// check class list for student
	var isExist = false;
	for (var i = 0; i < ClassStudents.students.length; i++) {
		var sName = ClassStudents.students[i].name;
		if (sName == name) {
			isExist = true;
			imgLoc = ClassStudents.students[i].imageLoc;
		}	
	}
	
	if (!isExist) {
		// can use the associated images
		imgLoc = "student.png";
	} 
	
	// get time
	var myTime = new Date();
	var timeOut = Date.now();
	var hour;
	var minute = myTime.getMinutes();
	var sMin;
	if (minute < 10){
		sMin = "0" + minute;
	} else {
		sMin = minute;
	}
	
	minute = minute.toFixed(1); // force minutes to 2 digits
	// convert hours to standard time
	if (myTime.getHours() > 12)
		hour = myTime.getHours() - 12;
	else
		hour = myTime.getHours();
	
	// add div
	var contentDiv = document.getElementById("content");
	var newDiv = 
		"<div class=\"studentCard\" onclick=\"startReturn(this)\" id=\"" + id + "\">"
		+ "<div class=\"exitCardImg\" id=\"" + id + "_top\">"
		+	"<img src=\"images/students/" + imgLoc + "\" class=\"student\">"
		+"</div>"
		+"<div class=\"cardInfo\">"
			+"<p><b>Name:</b> " + name + "</p>"
			+"<p><b>Time Out:</b> "+ hour + ":" + sMin + "</p>"
			+"<p><b>Destination:</b> " + destination + "</p>"
		+"</div>";
	contentDiv.innerHTML += newDiv;
	
	// add transition
	//setTransition(id);
	// add animation
	setAnimation(id);
	
}

/****************************************
	setAnimation
	Sets animation time for class
	NOT WORKING YET
****************************************/
function setAnimation(elementID) {
	//console.log("ID: " + elementID + ". Time:" + lateTime);
	var card = document.getElementById(elementID);
	// create class and keyframe animation
	var animationName = createAnimation(elementID);
	console.log("Animation status:" + animationName);
	// add new class
	card.classList.add(animationName);
}

function createAnimation(elementID) {
	try{
		var styleSheet = document.getElementById("animationStyles");
		var name = "stdAnimation" + elementID;
		// create class
		var keyName = name + "Key";
		var newAnimation = 
			"." + name + " {"
			+"animation-name: \""+ keyName +"\";"
			+"animation-duration: 10s;"
			+"animation-fill-mode: forwards;"
			+"}";
		console.log("Animation: " + newAnimation);
		styleSheet.innerHTML += newAnimation;
		// create keyframe 
		
		var newAnimationKey = 
			"@keyframes " + keyName + " { "
		+		"0%   {background-color: #4CAF50;}"
		+		"45%  {background-color: #4CAF50;}"
		+		"50%  {background-color: yellow;}"
		+		"80%  {background-color: yellow;}"
		+		"100% {background-color: red;}"
		+		"}";
		// add 
		styleSheet.innerHTML += newAnimationKey;
		return name;
	}
	catch (err){
		return false;
	}
	
}

function loadClassList() {
	var xhttp = new XMLHttpRequest(); // create xmlhttprequest object
	xhttp.onreadystatechange = function() { // evaluate function every time xmlhttprequest object changes
		if (this.readyState == 4 && this.status == 200) { // when readyState is 4 and status = 200 a response from server is ready
		   var obj = xhttp.responseText;
		   ClassStudents = JSON.parse(this.responseText);
		}
	};
	xhttp.open("GET", "class_list.txt", true);
	xhttp.send();
}

/****************************************
	loadClassList
	Adds students to drop down box
****************************************/
function loadStudents() {
	var mySelect = document.getElementById("classList");
    var selectCnt = mySelect.length;
	
	// add students if it hasn't been done yet
	if (selectCnt == 1){
		for (var i = 0; i < ClassStudents.students.length; i++){
			mySelect.innerHTML += "<option> " + ClassStudents.students[i].name + "</option>";
		}
	}
	
}


function clearReturn() {
	var modal = document.getElementById('modalReturn');
	modal.style.display = "none";
	callingId = 0; // reset the calling id
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

function modalSignOut() {
	var modal = document.getElementById('modalSignOut');
	modal.style.display = "block";
	loadStudents();
}

function clearSignOut() {
	var modal = document.getElementById('modalSignOut');
	modal.style.display = "none";
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
  var menu = document.getElementById("topMenu");
  var img = document.getElementById("menu_icon");
  // enlarge menu
  menu.classList.add('enlarge');
  menu.classList.remove('shrink');
  // change img
  img.src = "images/arrow_up_big_white.png";
}

function shrink() {
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


