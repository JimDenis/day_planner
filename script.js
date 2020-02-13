// Move info from the hour to local storage

function store(hourPassed) {
    var p1 = "Input"
    var fullName = p1 + hourPassed

    var p2 = "Hour"
    var fullName2 = p2 + hourPassed
    console.log("In store");
    console.log(hourPassed);
    var notes = document.getElementById(fullName).value
    console.log(notes);
    localStorage.setItem(fullName2, notes);
}


//Shades the hours by past, current & future time...
function doShade() {

    var p1 = "#";
    var p2 = "Input";
    var fullName = "";
    
    for (i=8; i < hh; i++) {
        fullName = p1 +  p2 + i
        $(fullName).addClass("past");
    }

    fullName = p1 +  p2 + hh
    $(fullName).addClass("present");

    for (i = (hh + 1); i < 18; i++) {
        fullName = p1 + p2 + i
        $(fullName).addClass("future");
    }    
}


//Goes to local storage & see if anything is there for our hours
function doGet() {

  var p1 = "Hour";
  var fullName = "";
  var p2 = "Input";
  var fullName2 = "";
  
  for (i=8; i < 18; i++) {

      fullName = p1 + i;
      fullName2 = p2 + i;
      var get = localStorage.getItem(fullName);
      $(fullName).addClass("past");

      if (get === null) {
        document.getElementById(fullName2).value = "Nothing out there"; 
      } else {
        document.getElementById(fullName2).value = get;
      } 

  }
  
}

//Global Vars
//var timeLeft = 9;
//var iDone = false; 
//var currIndex = -1
//var numOfCorr = 0;
//var numOfIncorr = 0;
//var timeInterval = 0;
//var gameOver = false;
//var pharse = "Hello9";

//PROGRAM STARTS HERE !!!!!!!!

//Global Vars
var d = new Date();
var yyyy = d.getFullYear();
var mm   = d.getMonth() + 1;
var dd   = d.getDate();
var hh   = d.getHours();
var min  = d.getMinutes();

//console.log(yyyy, mm, dd, hh, min);

var dateTime = mm + "/" + dd + "/" + yyyy + " " + hh + ":" + min;

//console.log(dateTime);
document.getElementById("currentDay").textContent = dateTime;

var get08 = localStorage.getItem("Hour08");
document.getElementById("Input8").value = get08;


doGet() 

doShade()


// Button listeners to start the process
$("#Btn8").on("click", function () {
  store(8)
});

$("#Btn9").on("click", function () {
  store(9)
});

$("#Btn10").on("click", function () {
  store(10)
});

$("#Btn11").on("click", function () {
  store(11)
});

$("#Btn12").on("click", function () {
  store(12)
});

$("#Btn13").on("click", function () {
  store(13)
});

$("#Btn14").on("click", function () {
  store(14)
});

$("#Btn15").on("click", function () {
  store(15)
});

$("#Btn16").on("click", function () {
  store(16)
});

$("#Btn17").on("click", function () {
  store(17)
});
             
