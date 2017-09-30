var studentArr = []; // Global variable for student 
var assignArr = []; // Gloabal variable for assignments

/***************************************
	student
	Object constructor/prototype used to create a student
***************************************/
function Student(fName, lName, gpa, att, abs, tardy) {
	this.fName = fName;
	this.lName = lName;
	this.gpa = gpa;
	this.att = att;
	this.abs = abs;
	this.tardy = tardy;
	// create full name
	this.fullName = function (name) {
        return this.fName + " " + this.lName;
    };
	// calculate passing status
	this.isPassing = function () {
		if (this.gpa >= 2)
			return "passing";
		else
			return "failing";
	};
}

/***************************************
	Create Student
	Method to create student 
	Displays to area1
***************************************/
function createStudent(fName, lName, gpa, att, abs, tardy) {
	// create student
	var newStudent = new Student(fName, lName, gpa, att, abs, tardy);
	studentArr.push(newStudent); // add student to student array
	// test in console
	var prop; // property
	for (prop in newStudent)
		console.log(newStudent[prop] + ", ");
	
	// Create message
	document.getElementById("area1").innerHTML = "A new student has been created!" + "\n";
	document.getElementById("area1").innerHTML += "Student Name: " + newStudent.fullName() + "\n";
	document.getElementById("area1").innerHTML += "GPA: " + newStudent.gpa + "\n";
	document.getElementById("area1").innerHTML += "Attendence: " + newStudent.att + "\n";
	document.getElementById("area1").innerHTML += "Absences: " + newStudent.abs + "\n";
	document.getElementById("area1").innerHTML += "Tardies: " + newStudent.tardy + "\n";
	document.getElementById("area1").innerHTML += "Passing status: " + newStudent.isPassing() + "\n";
}

/***************************************
	Assignment
	Object constructor/prototype used to create an assignment
***************************************/
function Assignment(assignName, points, dueDate) {
	this.assignName = assignName;
	this.points = points;
	this.dueDate = dueDate;
	// add a creation date
	this.creationDate = function () {
		return Date();
	}
}

/***************************************
	Create Assignment
	Method to create an assignment
	Adds to assignment array
	Displays area2
***************************************/
function createAssignment(assignName, points, dueDate) {
	// create assignment
	var newAssignment = new Assignment(assignName, points, dueDate);
	assignArr.push(newAssignment);
	// display number of assignments
	document.getElementById("area2").innerHTML = "Number of assignments: " + assignArr.length + "\n";
	// update select options
	updateSelect();
}

/***************************************
	updateSelect
	Update select object's options
***************************************/
function updateSelect() {
	var mySelect = document.getElementById("selectAssign");
	// reset the select
	mySelect.options.length = 0;
	// loop through and assign to select
	var arrLength = assignArr.length;
	for (i = 0; i < arrLength; i++) {
		mySelect.options[mySelect.options.length] = new Option(assignArr[i].assignName, i);
	}
}

/***************************************
	displayAssignment
	Displays assignment information to area3
***************************************/
function displayAssignment() {
	var mySelect = document.getElementById("selectAssign");
	var value = mySelect.value; // index for array
	// excecute only if not default
	if (value != "default") {
		var area = document.getElementById("area3");
		// display assignment info
		area.innerHTML = "Assignment Name: " + assignArr[value].assignName + "\n";
		area.innerHTML += "Points: " + assignArr[value].points + "\n";
		area.innerHTML += "Due Date: " + assignArr[value].dueDate + "\n";
		area.innerHTML += "Creation Date: " + assignArr[value].creationDate() + "\n";
	}
}