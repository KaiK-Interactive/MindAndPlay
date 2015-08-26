/*
Version 0.1 
12.06.2015

*/
var ergebnis;
var max;
   
function simpleMath(){
    
    var zahl1 = randomNumber(max) + 1;
    var zahl2 = randomNumber(max) + 1;
    
    var temp = randomNumber(400);
    
    var operator;
    
    if(temp < 100){
    
        operator = "+";
        ergebnis = zahl1 + zahl2;
        
    } else if( temp < 200){
    
        operator = "-";
        ergebnis = zahl1 - zahl2;
    
    } else if( temp < 300){
    
        operator = "x";
        ergebnis = zahl1 * zahl2;
    
    } else if( temp < 400 ){
    
        operator = ":";
        ergebnis = zahl1 / zahl2;
    
    }

    //var ergebnis = zahl1 + zahl2;
    document.getElementById("operator").innerHTML = operator;
    document.getElementById("ersteZahl").innerHTML = zahl1;
    document.getElementById("zweiteZahl").innerHTML = zahl2;
    
    
}

function checkUserInput(){

    var userInput = document.getElementById("userErgebnis").value;
    
    if( userInput === ergebnis.toString()){
    
        console.log("true");
        document.getElementById("aufgabe").style.backgroundColor = "green";
        document.getElementById("auswertung").innerHTML = ergebnis;
    
    } else{
    
        console.log("false");
        document.getElementById("aufgabe").style.backgroundColor = "red";
        document.getElementById("auswertung").innerHTML = ergebnis;
    }
    
    setTimeout('reset()',2000);

}

function reset(){

    document.getElementById("aufgabe").style.backgroundColor = "";
    document.getElementById("userErgebnis").value = "";
    document.getElementById("auswertung").innerHTML = "";
    simpleMath();
    
};

function loadMax(){

    max = window.localStorage.getItem("maxNumber");

};

function saveMax(number){

    max = number;
    max = window.localStorage.setItem("maxNumber",max);

};

if(null !==  window.localStorage.getItem("maxNumber") ){

    max =  window.localStorage.getItem("maxNumber");

} else {

    max = 10;

}

simpleMath();





