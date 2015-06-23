/*
Version 0.1 
12.06.2015

*/
var ergebnis;
   
function simpleMath(){
    
    var zahl1 = randomNumber(20) + 1;
    var zahl2 = randomNumber(20) + 1;
    
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

}

simpleMath();





