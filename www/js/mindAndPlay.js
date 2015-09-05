/* MindAndPlay 
    Version 0.4.4 20.08.2015
    created by Kai Karren 
    
    last edited on 20.08.2015
 */

//Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.

//John F. Woods

/*Idee:
    
    2D Spiel Zahlen und Wörter werden kurz eingeblendet und der Benutzer muss sie in richtiger Reihenfolge wiedergeben
    Profil mit Statistik zum User und später zu den meist ausgewählten Fragen.
        
*/
/* 
TODO:

31.07.2015
    - Design-Einstellungen in die Optionen implemtieren
    04.08.2015 erste Presets implemtiert
*/
//User

var userName = "User";
var score    = 0;

//Statistiken
var richtigeAntworten = 0;
var falscheAntworten = 0;

// Optionen
var preset = "default";
var buttoncolor = "default";
var background = "default";
var sections = "default";
var color = "";
var custom = false;
/*
TODO:
- Fragenrunden
*/
// Anzahl der Fragen die eine Quiz-Runden haben soll.
var fragenProRunde   = 10;
    
if (null !== window.localStorage.getItem("userName")) {
    
    if("" !== window.localStorage.getItem("userName")){
        
    userName = window.localStorage.getItem("userName");
        
    }
    
}

if (null !== window.localStorage.getItem("score")) {

    score = parseInt(window.localStorage.getItem("score"));

}

if (null !== window.localStorage.getItem("fragenProRunde")) {
    
    fragenProRunde = parseInt(window.localStorage.getItem("fragenProRunde"));

} 

if ( null !== window.localStorage.getItem("richtigeAntworten") ){

    richtigeAntworten = parseInt( window.localStorage.getItem("richtigeAntworten") );

}

if( null !== window.localStorage.getItem( "falscheAntworten" ) ){

    falscheAntworten = parseInt(window.localStorage.getItem("falscheAntworten"));

}

//Laden der lokalen Optioneinstellungen (falls verfügbar :D)

if( ( null !== window.localStorage.getItem( "preset" ) ) && ( "default" !== window.localStorage.getItem( "preset" ) )){

    preset = window.localStorage.getItem( "preset" );

}

if( ( null !== window.localStorage.getItem( "custom" ) ) && ( "false" !== window.localStorage.getItem( "custom" ) ) ){

    loadDesign();
    enableDesign(background,buttoncolor,sections,color);

}

console.log(background);
displayUserName();
displayScore();

//Design:
/*
var gradientText = "linear-gradient(to bottom left, " + gradientColor1 + " 0%, " + gradientColor2 + " 100%)";
document.getElementsByTagName("body").style.backgroundImage = gradientText;
*/

//checkPreset();


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

};

function resetScore(){

    score = 0;
    
    window.localStorage.setItem("score", score);
    
    displayScore();

};

function enableCustomDesign(){
    
    custom = true;
    var temp = "" + custom;
    window.localStorage.setItem("custom",temp);
    
};

function disableCustomDesign(){
    
    custom = false;
    var temp = "" + custom;
    window.localStorage.setItem("custom",temp);
}

function saveDesign(background, button, sections, c){
  
    window.localStorage.setItem("background",background);
    window.localStorage.setItem("button",button);
    window.localStorage.setItem("sections",sections);
    window.localStorage.setItem("color",c);  
    
};

function loadDesign(){
    
    background = window.localStorage.getItem("background");
    buttoncolor = window.localStorage.getItem("button");
    sections = window.localStorage.getItem("sections");
    color = window.localStorage.getItem("color");
    console.log("Load:" + color);
}

function saveRichtige( richtig ){

    richtigeAntworten = richtigeAntworten + richtig;
    console.log(richtigeAntworten);
    window.localStorage.setItem("richtigeAntworten", richtigeAntworten );

};

function saveFalsche( falsch ){

    falscheAntworten = falscheAntworten + falsch;
    console.log(falscheAntworten);
    window.localStorage.setItem("falscheAntworten", falscheAntworten);

};

function loadLokaleStatistiken(){
    
    document.getElementById("richtigeAntworten").innerHTML = richtigeAntworten;
    document.getElementById("falscheAntworten").innerHTML = falscheAntworten;

};

function resetStats(){

    richtigeAntworten = 0;
    falscheAntworten = 0;
    window.localStorage.setItem("richtigeAntworten",0);
    window.localStorage.setItem("falscheAntworten",0);

};

function savePreset(pre){
    
    preset = pre;

    window.localStorage.setItem("preset", preset);

};

function buttonColor(){

    window.localStorage.setItem("buttonColor", buttonColor);

};

function loadPreset(){

    preset = window.localStorage.getItem("preset");
    console.log("Preset " + preset);

};

function getPreset(){

    return preset;

};

function checkPreset(){

    if(preset === "default"){
        //Do nothing :D
    } else if(preset === "minimal"){
        
        enableDesign("blue","lightBlue","lightblue");
    
    } else if(preset === "dark"){
    
        var color1 = "rgb(0,0,0)";        
        var color2 = "rgb(153, 153, 153)";
        
        var text = "linear-gradient(to bottom left, " + color1 + " 0%, " + color2 + " 100%)";
        
        enableDesign(text, text, "grey");
    
    }

};

function enableDesign(backgroundColor, buttonColor, sectionColor, c){
    
    document.getElementsByTagName("body")[0].style.backgroundImage = "none";
    document.getElementsByTagName("body")[0].style.background = backgroundColor;
    document.getElementsByTagName("body")[0].style.color = c;
        console.log(c);
        var button = document.getElementsByTagName("button");
        for (var i = 0; i < button.length; i++) {
            
            button[i].style.background = buttonColor;
        
        }
        
        var section = document.getElementsByClassName("s2");
        for(var a = 0; a < section.length; a++){
            
            section[a].style.background = "none";
            section[a].style.background = sectionColor;
            
        }
        
        var linkIndex = document.getElementsByClassName("index");
        for(var b = 0; b < linkIndex.length; b++){
            
            linkIndex[b].style.background = "none";
            linkIndex[b].style.background = buttonColor;
            linkIndex[b].style.color = color;
            
        }
    
        var page = location.href;
        if(page.endsWith("index.html")){
            
            document.getElementsByClassName("index2")[0].style.background = "none";
            document.getElementsByClassName("index2")[0].style.background = buttonColor;
            
            
        } else if(page.endsWith("auswahl.html") || page.endsWith("kategorie.html")){
            
            
            
        } else {
            
           
            
        }
    
        
};

function customDesign(){
    
    var back = document.getElementById("customBackground").value;
    var buttons = document.getElementById("customButtons").value;
    var info = document.getElementById("customInfo").value;
    var c = document.getElementById("color").value;
    console.log(c)
    saveDesign(back,buttons,info,c);
    loadDesign();
    enableCustomDesign();
    
    enableDesign(background,buttoncolor,sections);
    
    
};

/*
Erzeugt eine Zufallszahl von 0 bis (Maximum - 1)
z.B "randomNumber(5)" erzeugt eine Zahl im Bereich von 0 bis 4.
Wenn man die 0 nicht will einfach "randomNumber(5) + 1" => 1 bis 5
*/
function randomNumber(max){

    var a = Math.floor(Math.random()* max);
    
    if(a > max){
    
        a = max;
        
    }
    
    return a;

};
// TODO: 31.07.2015
// Option einbauen sich ein random Design erzeugen zu lassen
/**
 * Returns a String like "rgb(255,0,255)";
 */
function randomColor(){
    
    var r = randomNumber(255);
    var g = randomNumber(255);
    var b = randomNumber(255);
    
    var text = "rgb(" + r + "," + g + "," + b + ")";
    
    return text;

};




