/*
Version 0.1 
12.06.2015

*/

function simpleMath(){
    
    var zahl1 = randomNumber(20);
    var zahl2 = randomNumber(20);

    var ergebnis = zahl1 + zahl2;

    document.getElementById("ersteZahl").innerHTML = zahl1;
    document.getElementById("zweiteZahl").innerHTML = zahl2;
    
}

simpleMath();