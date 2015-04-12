/* MindAndPlay 
    Version 0.1 10.04.2015
    created by Kai Karren 
 */

//User

var userName = "User";
var score    = 0;
    
if(userName != window.localStorage.getItem("userName")){
    
    userName = window.localStorage.getItem("userName");
    
};

if(score != window.localStorage.getItem("score")){

    score = window.localStorage.getItem("score");

};


function setUserName( name ){

    window.localStorage.setItem("userName", name);

};

function addScore( value ){

    score = score + value;
    window.localStorage.setItem("score", score);

};

function reload(){

    userName = window.localStorage.getItem("userName");
    score    = window.localStorage.getItem("score");

}
