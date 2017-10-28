var animals = []; // use with saving arrays

function checkSupport() {
  var myObj = document.getElementById("div1");
  // check storage
  if (typeof(Storage) !== "undefined") {
    myObj.innerHTML = "LocalStorage is supported with your browser.";
  } else {
    myObj.innerHTML = "LocalStorage isn't supported on your browser.  You might want to upgrade.";
  }
}

function saveNames() {
  // get values
  var fName = document.getElementById("fName").value;
  var lName = document.getElementById("lName").value;
  // save name
  localStorage.setItem("fName", fName);
  localStorage.setItem("lName", lName);
  // retrieve stored value
  var getFName = localStorage.getItem("fName");
  var getLName = localStorage.getItem("lName");
  // post to div
  document.getElementById("div2").innerHTML = "Retrieved name: " + getFName + " " + getLName;
}

function makeArray() {
  var a,b,c;
  a = document.getElementById("animal1").value;
  b = document.getElementById("animal2").value;
  c = document.getElementById("animal3").value;
  // add values to array
  animals[0] = a;
  animals[1] = b;
  animals[2] = c;
  // display array index
  document.getElementById("div3").innerHTML = "Animal array created.<br>";
  for (i = 0; i < animals.length; i++) {
    document.getElementById("div3").innerHTML +=i + ": " + animals[i] + "<br>";
  }
  // save array to local storage using JSON stringify
  var strAnimals = JSON.stringify(animals);
   document.getElementById("div3").innerHTML += "String from stringify: " + strAnimals + ".<br>";
  
  // save to local storage
  localStorage.setItem("animals", strAnimals);
  // retrieve local storage item
  var fromStorage = localStorage.getItem("animals");
  document.getElementById("div3").innerHTML += "String retrieved from storage: " + fromStorage + ".<br>";
  
  // store retrieved string to associative array to show we can
  var newAnimals = JSON.parse(fromStorage);
  document.getElementById("div3").innerHTML += "First animal in associative array: " + newAnimals[0] +  ".<br>";
}

function Cow(color,weight,name) {
  this.color = color;
  this.weight = weight;
  this.name = name;
}

function makeObject() {
  // get input
  var color = document.getElementById("color").value;
  var weight = document.getElementById("weight").value;
  var name = document.getElementById("cowName").value;
  // make cow object
  var myCow = new Cow(color,weight,name);
  // stringify cow
  var strCow = JSON.stringify(myCow);
  // save object to local storage
  localStorage.setItem("cow", strCow);
  // get saved item
  var fromStorage = localStorage.getItem("cow");
  // display results
  document.getElementById("div4").innerHTML = "Cow object created.<br>";
  document.getElementById("div4").innerHTML += "Retrieved cow from storage: " + fromStorage +".<br>";
  
}