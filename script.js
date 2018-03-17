var StudentsOut = [];
var ClassList = ["Bobby James","Sally Steward","Sam Patel"];
var ClassStudents = [];
var History = [];
var lateTime = 60;
var callingId = 0; // used to find student and object that called signout
var allowedOut = 4;
var teacherName = "Mr. Pye";
var className = "6th Grade Math";
var callingElement;

/////////////////////////////////////////////////////////////////
function studentSignOut(elementID) {
	// save calling Element
	callingElement = elementID.id;
	// determine if signout or return
	var imgName = "img_" + elementID.id;
	var img = document.getElementById(imgName);
	var src = img.src;
	var fileName = src.replace(/^.*[\\\/]/, '');  // just need the file name
	console.log("Element id: "+ elementID.id);
	console.log("Image source: "+ fileName);
	if (fileName == "exit.png"){ // signing out
		// load modal
		var modal = document.getElementById('modalSignOut');
		modal.style.display = "block";
		loadStudents();
	}
	else { // logging back in
		startReturn(elementID);
	}
	
}

function startReturn(elem){
	// find student using name
	var nameLoc = document.getElementById("pName_"+ elem.id)
	var str = nameLoc.innerHTML;
	var name = str.replace("<b>Name: </b>", "");
	console.log("Nameloc just name: " + name);
	var id = getIdFromName(name);
	console.log(name + "'s id:" + id);
	callingId = id;
	// assign id 
	//callingId = elem.id;
	// update return modal
	updateReturnModal();
	
	// display return form
	modalReturn();
}

function getIdFromName(name) {
	var id;
	// check for student in students out list
	var isExist = false;
	for (i = 0; i < StudentsOut.length; i++){
		try {
			var s = StudentsOut[i];
			if (s.name == name){ // student already checked out
				isExist = true;
				id = s.id;
			}
		}
		catch(err) {
			console.log(err.message)
		}
	}
	if (isExist == false)
		id = 0;
	
	return id;
}

function signIn() {
	var card = document.getElementById(callingElement);
	console.log("Calling element: " + callingElement);
	// find student
	var myStudent = getStudentById(callingId);
	
	if (myStudent !== null && typeof myStudent !== "undefined") {
		// update return date for student
		myStudent.setReturnDate();
		// add to history
		History.push(myStudent);
		// delete from student out list
		removeStudentOut(callingId);
	}
	// return card to default
	console.log("Class list:" + card.classList);
	// remove sign out class
	card.classList.remove("studentCard"); // 
	card.classList.remove("studentTimer");
	// add student card class
	card.classList.add("exitCard");
	card.style.animationDuration = "0s";

	// change student name on card
	var stName = "pName_" + callingElement;
	var p1 = document.getElementById(stName);
	p1.innerHTML = "<b>Click Here to Sign Out</b>";
	// change time out on card
	var stTime = "pTime_" + callingElement;
	var p2 = document.getElementById(stTime);
	p2.innerHTML = "";
	// change destination on card
	var stDestination = "pDestination_" + callingElement;
	var p3 = document.getElementById(stDestination);
	p3.innerHTML = "";
	// change image on card
	var stImage = "img_" + callingElement;
	var myImg = document.getElementById(stImage);
	myImg.src = "images/exit.png";
	console.log("Image source:" + myImg.src);
	
	// remove calling element
	callingElement = "";
}

function signOut() {
	var name;
	var destination = document.getElementById("destination").value;
	var isNewStudent;
	
	// get name
	name = document.getElementById("studentName").value;
	console.log("Name: " + name);
	/*
	if (document.getElementById("classList").value == "NULL") {
		// try custom name
		console.log("Element class list not found, using studentName instead.");
		name = document.getElementById("studentName").text;
		isNewStudent = true;
	}
	else { // name is in list
		name = document.getElementById("classList").value;
		isNewStudent = false;
	} */

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
		//createCard(newStudent);
		assignCard(newStudent);
	}
	else {
		console.log("Student already checked out");
	}
	// minimize
	clearSignOut();
	
}

function assignCard(student) {
	var card = document.getElementById(callingElement);
	var name = student.name;
	var imgLoc;
	var id = student.id;
	console.log("Name: " + name + ", ID: " + id);
	var destination = document.getElementById("destination").value;
	imgLoc = "student.png";
	
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
	
	// change student name on card
	var stName = "pName_" + callingElement;
	var p1 = document.getElementById(stName);
	p1.innerHTML = "<b>Name: </b>" + name;
	// change time out on card
	var stTime = "pTime_" + callingElement;
	var p2 = document.getElementById(stTime);
	var myTime = hour + ":" + sMin;
	p2.innerHTML = "<b>Time: </b>" + myTime;
	// change destination on card
	var stDestination = "pDestination_" + callingElement;
	var p3 = document.getElementById(stDestination);
	p3.innerHTML = "<b>Destination: </b>" + destination;
	// change image on card
	var stImage = "img_" + callingElement;
	var myImg = document.getElementById(stImage);
	myImg.src = "images/students/" + imgLoc;
	
	// remove sign out class
	card.classList.remove("exitCard");
	// add student card class
	card.classList.add("studentCard");
	// add timer class
	card.classList.add("studentTimer");
	// get late time
	var myLateTime;
	if (lateTime > 0)
		myLateTime = lateTime;
	else // default 3min
		myLateTime = 180;
	// set time
	var duration = myLateTime + "s"
	card.style.animationDuration = duration;
	
	
	
	// release caller element
	callingElement = "";
	
}

function cardTest(elementID) {
	console.log("Element id: " + elementID.id);
	var card = document.getElementById(elementID.id);
	card.classList.add("studentTimer");
	console.log("Classes: " + card.classList);
	// add student information pName_card0
	var name = "pName_" + elementID.id;
	var p1 = document.getElementById(name);
	p1.innerHTML += "testing";
}

////////////////////////////////////////////////////////////
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
	var leaveTime = student.leaveDate;
}

function saveSettings() {
	// save late time
	lateTime = document.getElementById("settingTime").value;
	localStorage.setItem("lateTime", lateTime);
	
	// close out
	clearSettings();
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
	
	// load local storage info
	loadInfo();
	
	// Clock
	startTime(); 
   
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
	
}

function loadInfo() {
	var teacher = localStorage.getItem("teacherName");
	if (teacher != "" && teacher != "undefined"){
		//document.getElementById("headerTeacherName").innerHTML = teacherName +"'s class";
	}
	else
		document.getElementById("headerTeacherName").innerHTML = "";
	
	var className = localStorage.getItem("className");
	if (className != "" && className != "undefined") {
		//document.getElementById("headerClassName").innerHTML = "Class: " + className;
	}
	else
		document.getElementById("headerClassName").innerHTML = "Class: unknown";
		
}

function getSettings() {
	if (typeof(Storage) !== "undefined") {
		// local storage available
		// get time
		var time = localStorage.getItem("lateTime");
		console.log(time);
		if (time == "") {
			//console.log("Late time not found");
			// create local storage
			localStorage.setItem("lateTime","300");
		}
		else { // time set
			lateTime = time;
			//console.log("Late time found: " + time);
		}
		// get students allowed out
		var tempOut = localStorage.getItem("allowedOut");
		if (tempOut == null) {
			localStorage.setItem("allowedOut", allowedOut);
		}
		else {
			allowedOut = tempOut;
		}
		// get teacher name
		var tempTeacher = localStorage.getItem("teacherName");
		if (tempTeacher == null) {
			localStorage.setItem("teacherName", teacherName );
		}
		else {
			teacherName = tempTeacher;
		}
		// get class name
		var tempClass = localStorage.getItem("className");
		if (tempClass == null) {
			localStorage.setItem("className", className );
		}
		else {
			className = tempClass;
		}
	} else {
		console.log("Browser not supported");
		// TESTING ONLY
		lateTime = 300; // 5 minute default
	}
}


/****************************************
	setAnimation
	Sets animation time for class
	NOT WORKING YET
****************************************/
function setAnimation(elementID) {
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
			+"animation-duration: 20s;"
			+"animation-fill-mode: forwards;"
			+"}";
		console.log("Animation: " + newAnimation);
		styleSheet.innerHTML += newAnimation;
		// create keyframe 
		
		var newAnimationKey = 
			"@keyframes " + keyName + " { "
		+		"0%   {background-color: #4CAF50;}"
		+		"45%  {background-color: #4CAF50;}"
		+		"50%  {background-color: #ffff80;}"
		+		"95%  {background-color: #ffff80;}"
		+		"100% {background-color: #DC143C;}"
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
	// load session information
	document.getElementById("settingTime").value = localStorage.getItem("lateTime");
	document.getElementById("settingOutMax").value = localStorage.getItem("allowedOut");
	document.getElementById("settingTeacher").value = localStorage.getItem("teacherName");
	document.getElementById("settingClass").value = localStorage.getItem("className");
}

function clearSettings() {
	var modal = document.getElementById('modalSettings');
	modal.style.display = "none";
	closeNav();
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
	// reset name 
	var nameField = document.getElementById("studentName");
	nameField.value = "";
	var destinationField = document.getElementById("destination");
	destinationField.value = "";
}

function clearLate() {
	var modal = document.getElementById('modalLate');
	modal.style.display = "none";
}
function openNav() {
    document.getElementById("mySidenav").style.height = "60px";
}

function modalAbout() {
	var modal = document.getElementById('modalAbout');
	modal.style.display = "block";
}

function clearAbout() {
	var modal = document.getElementById('modalAbout');
	modal.style.display = "none";
	closeNav();
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

function startTime() {
    console.log("In start time");
	var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
	var amPM = (h > 11) ? "PM" : "AM";
    m = checkTime(m);
    //s = checkTime(s);
    document.getElementById('clock').innerHTML =
    //h + ":" + m + ":" + s;
	h + ":" + m + " " + amPM;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
