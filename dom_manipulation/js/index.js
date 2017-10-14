var btnNum = 0; // keep track of dynamic buttons
var pNum = 0; // paragraph counter
var hNum = 0; // header counter

/***************************************
	makeElement
	Uses createElement to create various elements
***************************************/
function makeElement() {
  var ranNum = Math.floor((Math.random() * 3) + 1);
  //var ranNum = 1; // for testing only
  if (ranNum == 3){
    console.log("creating a button");
    // create a button
    var myBtn = document.createElement("BUTTON")
    // button number
    btnNum++;
    // add text to button
    var myText = document.createTextNode("New button " + btnNum);
    // append
    myBtn.appendChild(myText);
    // add it to document
    //document.body.appendChild(myBtn);
    document.getElementById("randomDiv").appendChild(myBtn); // add to specific element
    
  }
  else if(ranNum == 2){
    // create a new paragraph
    var myPar = document.createElement("P");
    pNum++; // increase paragraph counter
    var myText = document.createTextNode("New paragraph " + pNum);
    // append
    myPar.appendChild(myText);
    // add to document
    //document.body.appendChild(myPar);
    document.getElementById("randomDiv").appendChild(myPar); // add to specific element
  }
  else {
    // create a header
    var myHeader = document.createElement("H1"); // create header
    hNum++; // increase header count
    var hText = document.createTextNode("New Header " + hNum);
    myHeader.appendChild(hText);
    //document.body.appendChild(myHeader);
    document.getElementById("randomDiv").appendChild(myHeader); // add to specific element
  }
}

/***************************************
	appendList
	Uses appendChild() to add node to list
***************************************/
function appendList() {
  var myInput = document.getElementById("txtBox").value;
  // add input to list
  var newItem = document.createElement("LI"); // 
  var myText = document.createTextNode(myInput);
  newItem.appendChild(myText);
  document.getElementById("myList").appendChild(newItem); // add to the ui element
  // update number option
  updateNumber();
}

/***************************************
	beforeList
	Uses insertBefor() to add node to list
***************************************/
function beforeList() {
  var myInput = document.getElementById("txtBox").value;
  var myList = document.getElementById("myList");
  // add input to item object
  var newItem = document.createElement("LI"); // 
  var myText = document.createTextNode(myInput);
  newItem.appendChild(myText);
  // add item to the beginning of the list
  myList.insertBefore(newItem,myList.childNodes[0]);
  // update number option
  updateNumber();
}

/***************************************
	updateNumber
	Updates max selected number for input
***************************************/
function updateNumber() {
  var childCnt = document.getElementById("myList").getElementsByTagName("li").length;
  // update max and min number
  var mySelector = document.getElementById("removeInput");
  mySelector.max = childCnt - 1;
  mySelector.min = 0;
}

/***************************************
	removeItems
	Uses removeChild to remove node from list
***************************************/
function removeItems() {
  var mySelector = document.getElementById("removeInput").value;
  var myList = document.getElementById("myList");
  console.log(mySelector);
  // remove item based on selection
  myList.removeChild(myList.childNodes[mySelector]);
  updateNumber();
}