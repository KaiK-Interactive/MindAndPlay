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
    
    Hardcore Level mit Zeitbegrenzung
    
*/

var question; 
var kategorie;
var richtig = 0;
var falsch = 0;

// Fragen-Objekt Prototype
function Question( id, question, correctAnswer, answer2, answer3, answer4){
    
    this.id = id;
    this.question = question;
    this.correctAnswer = correctAnswer;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4; 

};

function run(kate){
    
    kategorie = kate;
     
    loadQuestion();
    
         
};

/*
 * Beispiel für das Speichern von Fragen
 * seit dem 10.06.2015 nur noch als Beispiel
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
/*
    
*/
function loadQuestion(){
    
  
    if(kategorie == null){
    
        console.log("Keine Kategorie gewählt.");
        //kategorie = "geschichte";
    }
    if(kategorie === "random"){
        
        var random = randomNumber(200);
        console.log(random);
        if(random < 100){
    
            var temp = JSON.parse(window.localStorage.getItem("geschichte"));
    
        }
        if(random > 100){
        
            var temp = JSON.parse(window.localStorage.getItem("sport"));
        
        }
        
    } else {
        
    //Aus dem String wird wieder ein Array
    var temp = JSON.parse(window.localStorage.getItem(kategorie));
        
    }
    
    get = randomNumber(temp.length);
    
    question = temp[get];
    
    //console.log(question.question);
    document.getElementById("question").innerHTML = question.question;
    //TODO gegebenenfalls anderer Auswahlmechanismus
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
        richtig++;
        
    } else {
    
       document.getElementById("answerTopLeft").style.backgroundImage = "none";
       document.getElementById("answerTopLeft").style.backgroundColor = "red";
       falsch++;
    }
    
    checkAll();
    
  

}

function checkAnswer2(){

    if(document.getElementById("answerTopRight").innerHTML === question.correctAnswer){
    
        document.getElementById("answerTopRight").style.backgroundImage = "none";
        document.getElementById("answerTopRight").style.backgroundColor = "green";
        addScore(5);
        richtig++;
        
    } else {
    
        document.getElementById("answerTopRight").style.backgroundImage = "none";
        document.getElementById("answerTopRight").style.backgroundColor = "red";
        falsch++;
    }
    

    checkAll();
    
    
}

function checkAnswer3(){

    if(document.getElementById("answerBottomLeft").innerHTML === question.correctAnswer){
    
        document.getElementById("answerBottomLeft").style.backgroundImage = "none";
        document.getElementsById("answerBottomLeft").style.backgroundColor = "green";
        addScore(5);
        richtig++;
        
    } else {
    
        document.getElementById("answerBottomLeft").style.backgroundImage = "none";
        document.getElementById("answerBottomLeft").style.backgroundColor = "red";
        falsch++;
    }
    
    checkAll();
    

}

function checkAnswer4(){

    if(document.getElementById("answerBottomRight").innerHTML === question.correctAnswer){
    
        document.getElementById("answerBottomRight").style.backgroundImage = "none";
        document.getElementById("answerBottomRight").style.backgroundColor = "green";
        addScore(5);
        richtig++;
        
    } else {
    
        document.getElementById("answerBottomRight").style.backgroundImage = "none";
        document.getElementById("answerBottomRight").style.backgroundColor = "red";
        falsch++;
    
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
    checkEnd();
};

function checkEnd(){
    
        console.log("Richtig:" + richtig);
        console.log("Falsch:" + falsch);
    
        loadQuestion();
    
}


//zum Testen
//saveQuestionsOnDevice();
saveGeschichteOnDevice();
saveChemieOnDevice();
saveSportOnDevice();

document.getElementById("answerTopLeft").addEventListener("click", checkAnswer1);
document.getElementById("answerTopRight").addEventListener("click" ,checkAnswer2);
document.getElementById("answerBottomLeft").addEventListener("click", checkAnswer3);
document.getElementById("answerBottomRight").addEventListener("click", checkAnswer4);

//loadQuestion();











