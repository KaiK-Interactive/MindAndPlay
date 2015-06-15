/* MindAndPlay 
    Version 0.3 12.06.2015
    created by Kai Karren 
 */

/*TODO:
    
    
        
*/
//User

var userName = "User";
var score    = 0;

// Anzahl der Fragen die eine Quiz-Runden haben soll.
var fragenProRunde   = 10;
    
if (null !== window.localStorage.getItem("userName")) {
    
    userName = window.localStorage.getItem("userName");
    
}

if (null !== window.localStorage.getItem("score")) {

    score = parseInt(window.localStorage.getItem("score"));

}

if (null !== window.localStorage.getItem("fragenProRunde")) {
    
    fragenProRunde = parseInt(window.localStorage.getItem("fragenProRunde"));

} 

displayUserName();
displayScore();


function setUserName(name) {

    window.localStorage.setItem("userName", name);
    displayUserName();

};

function getUserName(){

    return userName;

};

function changeUserName(){

    var newUserName = document.getElementById("newUserName").value;
    
    if(newUserName != null){
        
            window.localStorage.setItem("userName", newUserName);
    
        displayUserName();
    
    }
    
    //console.log(newUserName);


}

function addScore( value ){

    score = score + value;
    window.localStorage.setItem("score", score);
    
   displayScore();

};

function reload(){

    userName = window.localStorage.getItem("userName");
    var temp = window.localStorage.getItem("score");
    score = parseInt(temp);  

};

function loadFragen(){

    window.localStorage.getItem("fragenProRunde");

};

function changeFragenProRunde(temp){

    fragenProRunde = temp;
    
    window.localStorage.setItem("fragenProRunde", fragenProRunde);

};

function getFragenProRunde(){

    return fragenProRunde;

};

function displayUserName() {

        
    document.getElementsByClassName("userName")[0].innerHTML = userName;
        

};

function displayScore() {

    document.getElementsByClassName("score")[0].innerHTML = score;

};

function resetAll(){

    window.localStorage.clear();

}

function resetScore(){

    score = 0;
    
    window.localStorage.setItem("score", score);
    
    displayScore();

}


function randomNumber(max){

    var a = Math.floor(Math.random()* max);
    
    if(a > max){
    
        a = max;
        
    }
    
    return a;

};

function randomColor(){
    
    var r = randomNumber(255);
    var g = randomNumber(255);
    var b= randomNumber(255);
    
  
     document.getElementsByClassName("play")[0].style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

};




