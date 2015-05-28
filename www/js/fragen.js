/**
 * Version 0.3
 * © 2015 kaik-interactive.github.io
 *
 */

/*
 TODO:
 
 - weitere Fragen
 - loadQuestion erweitern und verbessern

    Kategorien:
    - random
    - Geschichte
    - Sport
    - Chemie
    - Mathe
*/

  var question;

// Fragen-Objekt Prototype
function Question( id, question, correctAnswer, answer2, answer3, answer4){
    
    this.id = id;
    this.question = question;
    this.correctAnswer = correctAnswer;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4; 

};

/*
 * Funktion muss beim ersten Start der App aufgerufen werden um die Fragen im localen Speicher abzulegen.
*/
function saveQuestionsOnDevice(){
    
    var q1 = new Question( 1,"Wer war deutscher Bundeskanzler zur Zeit der Wiedervereinigung?", "Kohl","Merkel","Brandt","Adenauer");
    var q2 = new Question( 2,"Bis wann existierte das weströmische Reich?","500 n.Chr","256 v.Chr","678 n.Chr","78 v.Chr");
    var q3 = new Question( 3,"Auf welche italienische Insel wurde Napoleon verbannt?","Elba","Capri","Sardinien","Palmarola");
    var history = [];
    
    history.push(q1);
    history.push(q2);
    history.push(q3);
    
    //console.log(q1.question);
    //console.log(q2.question);

    // Array muss erst zu einem String umgewandelt werden
    window.localStorage.setItem("history",JSON.stringify(history));
    


};



// Lädt eine zufällige Frage
// TODO: bei neuen Fragen und Themengebiten immer aktualisiren.

function loadQuestion(){
    //Aus dem String wird wieder ein Array
    var temp = JSON.parse(window.localStorage.getItem("history"));
    
    get = randomNumber(3);
    
    question = temp[get];
    
    //console.log(question.question);
    document.getElementById("question").innerHTML = question.question;
    
    var order = randomNumber(400);
        
    if( order < 100){
        
        document.getElementById("answerTopLeft").innerHTML = question.correctAnswer;
        document.getElementById("answerTopRight").innerHTML = question.answer2;
        document.getElementById("answerBottomLeft").innerHTML = question.answer3;
        document.getElementById("answerBottomRight").innerHTML = question.answer4;
        
    } else if( order < 200){
        
        document.getElementById("answerTopLeft").innerHTML = question.answer4;
        document.getElementById("answerTopRight").innerHTML = question.answer2;
        document.getElementById("answerBottomLeft").innerHTML = question.answer3;
        document.getElementById("answerBottomRight").innerHTML = question.correctAnswer;
        
    } else if( order < 300){
        
        document.getElementById("answerTopLeft").innerHTML = question.correctAnswer;
        document.getElementById("answerTopRight").innerHTML = question.answer2;
        document.getElementById("answerBottomLeft").innerHTML = question.answer3;
        document.getElementById("answerBottomRight").innerHTML = question.answer4;
        
    } else if( order < 400){
        
        document.getElementById("answerTopLeft").innerHTML = question.answer2;
        document.getElementById("answerTopRight").innerHTML = question.correctAnswer;
        document.getElementById("answerBottomLeft").innerHTML = question.answer4;
        document.getElementById("answerBottomRight").innerHTML = question.answer3;
        
    }
    

}

function checkAnswer1(){

    //console.log(document.getElementById("answerTopLeft").innerHTML);
    if(document.getElementById("answerTopLeft").innerHTML === question.correctAnswer){
    
        document.getElementById("answerTopLeft").style.backgroundImage = "none";
        document.getElementById("answerTopLeft").style.backgroundColor = "green";
        addScore(5);
        
    } else {
    
       document.getElementById("answerTopLeft").style.backgroundImage = "none";
       document.getElementById("answerTopLeft").style.backgroundColor = "red";
    
    }
    
    checkAll();
    
  

}

function checkAnswer2(){

    if(document.getElementById("answerTopRight").innerHTML === question.correctAnswer){
    
        document.getElementById("answerTopRight").style.backgroundImage = "none";
        document.getElementById("answerTopRight").style.backgroundColor = "green";
        addScore(5);
        
    } else {
    
        document.getElementById("answerTopRight").style.backgroundImage = "none";
        document.getElementById("answerTopRight").style.backgroundColor = "red";
    
    }
    

    checkAll();
    
    
}

function checkAnswer3(){

    if(document.getElementById("answerBottomLeft").innerHTML === question.correctAnswer){
    
        document.getElementById("answerBottomLeft").style.backgroundImage = "none";
        document.getElementsById("answerBottomLeft").style.backgroundColor = "green";
        addScore(5);
        
    } else {
    
        document.getElementById("answerBottomLeft").style.backgroundImage = "none";
        document.getElementById("answerBottomLeft").style.backgroundColor = "red";
        
    }
    
    checkAll();
    

}

function checkAnswer4(){

    if(document.getElementById("answerBottomRight").innerHTML === question.correctAnswer){
    
        document.getElementById("answerBottomRight").style.backgroundImage = "none";
        document.getElementById("answerBottomRight").style.backgroundColor = "green";
        addScore(5);
        
    } else {
    
        document.getElementById("answerBottomRight").style.backgroundImage = "none";
        document.getElementById("answerBottomRight").style.backgroundColor = "red";
        
    
    }
    
    checkAll();
    
  


}

function checkAll(){

     if(document.getElementById("answerTopLeft").innerHTML === question.correctAnswer){
    
        document.getElementById("answerTopLeft").style.backgroundImage = "none";
        document.getElementById("answerTopLeft").style.backgroundColor = "green";
        
    } else {
        
       document.getElementById("answerTopLeft").style.backgroundImage = "none";
       document.getElementById("answerTopLeft").style.backgroundColor = "red";
    
    }
    
    if(document.getElementById("answerTopRight").innerHTML === question.correctAnswer){
    
        document.getElementById("answerTopRight").style.backgroundImage = "none";
        document.getElementById("answerTopRight").style.backgroundColor = "green";
       
        
    } else {
        document.getElementById("answerTopRight").style.backgroundImage = "none";
        document.getElementById("answerTopRight").style.backgroundColor = "red";
    
    }
    
    if(document.getElementById("answerBottomLeft").innerHTML === question.correctAnswer){
    
        document.getElementById("answerBottomLeft").style.backgroundImage = "none";
        document.getElementsById("answerBottomLeft").style.backgroundColor = "green";
       
        
    } else {
        document.getElementById("answerBottomLeft").style.backgroundImage = "none";
        document.getElementById("answerBottomLeft").style.backgroundColor = "red";
        
    }
    
    if(document.getElementById("answerBottomRight").innerHTML === question.correctAnswer){
    
        document.getElementById("answerBottomRight").style.backgroundImage = "none";
        document.getElementById("answerBottomRight").style.backgroundColor = "green";
      
        
    } else {
    
        document.getElementById("answerBottomRight").style.backgroundImage = "none";
        document.getElementById("answerBottomRight").style.backgroundColor = "red";
        
    
    }
    setTimeout('resetStyleChanges()', 2000);

};

function resetStyleChanges(){
    
    document.getElementById("answerTopLeft").style.backgroundImage = "linear-gradient(to bottom left, #FFEB38 0%, #396AEF 100%)";
    document.getElementById("answerTopRight").style.backgroundImage = "linear-gradient(to bottom left, #FFEB38 0%, #396AEF 100%)";
    document.getElementById("answerBottomLeft").style.backgroundImage = "linear-gradient(to bottom left, #FFEB38 0%, #396AEF 100%)";
    document.getElementById("answerBottomRight").style.backgroundImage = "linear-gradient(to bottom left, #FFEB38 0%, #396AEF 100%)";
    loadQuestion();
    
};




//zum Testen
saveQuestionsOnDevice();

document.getElementById("answerTopLeft").addEventListener("click", checkAnswer1);
document.getElementById("answerTopRight").addEventListener("click" ,checkAnswer2);
document.getElementById("answerBottomLeft").addEventListener("click", checkAnswer3);
document.getElementById("answerBottomRight").addEventListener("click", checkAnswer4);

loadQuestion();











