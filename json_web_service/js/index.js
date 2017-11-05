var myResult;
var dogs = [];
function webService() {
  var url = "https://dog.ceo/api/breeds/list/all";
  var xhttp = new XMLHttpRequest(); // create xmlhttprequest object
xhttp.onreadystatechange = function() { // evaluate function every time xmlhttprequest object changes
    if (this.readyState == 4 && this.status == 200) { // when readyState is 4 and status = 200 a response from server is ready
      myResult = xhttp.responseText;
      document.getElementById("pWeb").innerHTML =myResult;
    }
};
xhttp.open("GET", url, true);
xhttp.send();
  
  // parse to dogs array
  dogs = JSON.parse(myResult);
  //document.getElementById("pDog").innerHTML = dogs.status;
  document.getElementById("pDog").innerHTML = dogs;
}

function getCharacter() {
  var character = document.getElementById("character").value;
  var info =  document.getElementById("info");
  var url = "https://swapi.co/api/people/?search=" + character;
  var xhttp = new XMLHttpRequest(); // create xmlhttprequest object
xhttp.onreadystatechange = function() { // evaluate function every time xmlhttprequest object changes
    if (this.readyState == 4 && this.status == 200) { // when readyState is 4 and status = 200 a response from server is ready
      myResult = xhttp.responseText;
      // parse data
      var charData = JSON.parse(myResult);
      // display information
      info.innerHTML = "Name: "+ charData.results[0].name + "<br>";
      info.innerHTML += "Gender: "+ charData.results[0].gender + "<br>";
      info.innerHTML += "Skin Color: "+ charData.results[0].skin_color + "<br>";
      info.innerHTML += "Mass: "+ charData.results[0].mass + "<br>";
      info.innerHTML += "Eye Color: "+ charData.results[0].eye_color + "<br>";
      info.innerHTML += "Hair Color: "+ charData.results[0].hair_color + "<br>";
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}