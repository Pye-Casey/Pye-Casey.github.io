var myPet;

/***************************************
	Pet
	Object constructor/prototype used to create a pet
***************************************/
function Pet(name,species,breed,temperment) {
	this.name = name;
	this.species = species;
	this.breed = breed;
	this.temperment = temperment;
	console.log("Name: "+ name);
}

/***************************************
	createPet
	Creates a pet object
***************************************/
function createPet(name,species,breed,temperment) {
	myPet = new Pet(name,species,breed,temperment);
	console.log("myPet: " + myPet.name);
	document.getElementById("area1").innerHTML = "An object named " + myPet.name + " has been created.\n";
}

/***************************************
	createPetString
	Creates a string that represents a pet object
***************************************/
function createPetString(name,species,breed,temperment) {
	strPet = "{ \"name\":\"" + name + "\", \"species\":\"" + species +  "\",\"breed\":\"" + breed
	+ "\",\"temperment\":\"" + temperment + "\"" + " }";
	document.getElementById("area1").innerHTML = strPet;
	// create pet object for Stringify example
	myPet = new Pet(name,species,breed,temperment);
}

/***************************************
	parsePet
	Parses string to an object
***************************************/
function parsePet() {
	// get string to parse
	var petStr = document.getElementById("area1").innerHTML;
	// parse string to object
	var myPetObj = JSON.parse(petStr);
	console.log(myPetObj.name);
	// display pet object to document
	var myLocation = document.getElementById("area2");
	myLocation.innerHTML = "Name: " + myPetObj.name + "\n";
	myLocation.innerHTML += "Species: " + myPetObj.species + "\n";
	myLocation.innerHTML += "Breed: " + myPetObj.breed + "\n";
	myLocation.innerHTML += "Temperment: " + myPetObj.temperment + "\n"; 
}

/***************************************
	requestPet
	Request data from server using XMLHttpRequest
	NOTE: This will seem to error out when running on local machine.
	Runs correctly only on a configured server
***************************************/
function requestPet() {
	
	var myRequest = new XMLHttpRequest();
	var petObj; // parse to this object
	// make request to server
	myRequest.onreadystatechange = function() {
		if (this.readyState == 4 & this.status == 200) {
			petObj = JSON.parse(this.responseText);
		}
	};
	myRequest.open("GET", "pet.txt", true);
	myRequest.send(); 
	console.log("Pet Name: " + petObj.name);
	// display object
	var myLocation = document.getElementById("area3");
	myLocation.innerHTML = "Name: " + petObj.name + "\n";
	myLocation.innerHTML += "Species: " + petObj.species + "\n";
	myLocation.innerHTML += "Breed: " + petObj.breed + "\n";
	myLocation.innerHTML += "Temperment: " + petObj.temperment + "\n"; 
}

/***************************************
	stringifyPet
	Transforms pet object into a string
***************************************/
function stringifyPet() {
	var petStr = JSON.stringify(myPet);
	console.log(petStr);
	// display pet string
	document.getElementById("area4").innerHTML = "Here is the stringified object:\n";
	document.getElementById("area4").innerHTML += petStr + "\n";
}
