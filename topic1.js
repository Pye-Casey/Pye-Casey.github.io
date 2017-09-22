var myArray = []; // need this for my array section

/***************************************
	loopString
	Loop through a string and count the number of names.
	Posts back to index
***************************************/
function loopString(str){
	console.log("In loopString");
	var myString = str.value;
	var strBits = myString.split(",");
	console.log("String bit count: " + strBits.length);
}

/***************************************
	splitString
	Split string by desired character
	Posts back to index
***************************************/
function splitString(str){
	console.log("Object string: " + str.value);
	var myString = str.value;			// string value to myString
	var strBits = myString.split(",");	// split the string and add to array
	var strCnt = strBits.length;
	console.log("String bit count: " + strBits.length);
	// post results to html id
	for (i = 0; i < strCnt; i++){
		if (i == 0){
			document.getElementById("functionResults").innerHTML = "There are " + strCnt + " names in the string.\n";
			document.getElementById("functionResults").innerHTML += "Here are the names that were parsed into an array:\n";
		}	
		var number = i + 1;
		// Add name to html object
		document.getElementById("functionResults").innerHTML += "\t" + number + ".) " + strBits[i] + "\n";
	}	
}

/***************************************
	checkBoxes
	Only allows one of the three checkboxes to be checked
	Posts back to index
***************************************/
function checkBoxes(checkBox){
	console.log("checkBoxes id: " + checkBox.id);
	var id = checkBox.id;	// identification of controllers
	// conditional - unselect unnecessary checkboxes
	if (id == "cbComma"){
		// uncheck
		document.getElementById("cbOther").checked = false;
		document.getElementById("cbBack").checked = false;
		// post message
		document.getElementById("preCb").innerHTML = "Comma is selected. The other checkboxes have been unchecked.";
	}
	else if (id == "cbBack"){
		// uncheck
		document.getElementById("cbComma").checked = false;
		document.getElementById("cbOther").checked = false;
		// post message
		document.getElementById("preCb").innerHTML = "Backslash is selected. The other checkboxes have been unchecked.";
	}
	else{
		// it must be cbOther is chosen
		document.getElementById("cbComma").checked = false;
		document.getElementById("cbBack").checked = false;
		// post message
		document.getElementById("preCb").innerHTML = "Other is selected. The other checkboxes have been unchecked.";
	}	
	// Empty item2 list to avoid confusion
	document.getElementById("item2").innerHTML = "";
}

/***************************************
	parseString
	Parses string to array given a separator character
	Posts back to index
***************************************/
function parseString(str){
	//console.log("In loopString");
	var myString = str.value; // get string value
	// determine seperator character
	var comma = document.getElementById("cbComma").checked;
	var back = document.getElementById("cbBack").checked;
	var other = document.getElementById("cbOther").checked;
	var selector;
	if (comma == true)
		selector = ",";
	else if (back == true)
		selector = "/";
	else{ // must be other 
		selector = document.getElementById("txOther").value;
	}
	console.log("Selector: " + selector);
	var strBits = myString.split(selector); // parse to array
	var cnt = strBits.length;
	console.log("String bit cnt: " + cnt);
	
	// post array to html
	for (i = 0; i < cnt; i++){
		if (i == 0){
			document.getElementById("item2").innerHTML = "There are " + cnt + " items. Here is the parsed list:\n";
			document.getElementById("item2").innerHTML += "\t" + strBits[i] + "\n";
		}
		else
			document.getElementById("item2").innerHTML += "\t" + strBits[i] + "\n";
	} 
}

/***************************************
	addArray
	add a string to an array
	Posts back to index
***************************************/
function addArray(str){
	console.log("In loopString");
	var myString = str.value;
	// add to myArray
	myArray.push(myString);
	console.log("Pushed to array: " + myString);
	console.log("Items in array: " + myArray.length);
	// post message to user
	document.getElementById("preResponse").innerHTML = "\t" + myString + " has been added." ;
	// display array items
	displayArray();
	
}

/***************************************
	displayArray
	Displays array to index page
***************************************/
function displayArray(){
	// add header
	document.getElementById("item3").innerHTML = "Here are the elements in the array:\n";
	var cnt = myArray.length;
	if (cnt > 0){
		for (i = 0; i < cnt; i++)
			document.getElementById("item3").innerHTML += "\tIndex "+ i + ": " + myArray[i] + "\n";
	}
	else
		document.getElementById("item3").innerHTML = "There is nothing in the array.";
	
}

/***************************************
	clearArray
	Clears array
***************************************/
function clearArray(){
	var cnt = myArray.length;
	for (i = 0; i < cnt; i++){
		myArray.pop(); // pop off last item in array
	}
	// clear out the list
	displayArray();
}

/***************************************
	getArray
	Gets array item by index
***************************************/
function getArray(){
	var myIndex = document.getElementById("numIndex").value;
	var cnt = myArray.length;
	if (cnt > 0 && myIndex <= cnt -1 && myIndex >= 0){ // index within range of array
		console.log("Index " + myIndex + ". Associated item: " + myArray[myIndex]);
		document.getElementById("spanIndex").innerHTML = "Index " + myIndex + " is: " + myArray[myIndex];
	}
	else
		document.getElementById("spanIndex").innerHTML = "That is not a valid index!"
}
