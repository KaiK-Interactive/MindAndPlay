/**
 * Version 0.4.3
 * © 2015 kaik-interactive.github.io
 *
 * last edited on 31.07.2015
 */

/*
 TODO:
 
 - weitere Fragen
 - loadQuestion erweitern und verbessern

    Kategorien:
    - random      *
    - Geschichte  *
    - Sport       *
    - Chemie      *
    - Mathe       *
    
    31.07.2015
    - Spiele
    - PC
    - Physik
    - Informatik
    - Unnützes Wissen
    - Allgemeinbildung
    - Politik
    - Computer
    
    Hardcore Level mit Zeitbegrenzung
    
    ActionListener während den Animationen ausstellen.
    
*/

var question = new Question(1,"","","","",""); 
var serverQuestion;
var kategorie;
var richtig = 0;
var falsch = 0;
var disableAnimations = false;
var counter = 0;
var error = false;
var alreadyAsked = [10];
//loadFromServer();

// Fragen-Objekt Prototype
function Question( id, question, correctAnswer, answer2, answer3, answer4){
    
    this.id = id;
    this.question = question;
    this.correctAnswer = correctAnswer;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4; 
    
    this.changeCorrectAnswer = function(text){
        
        this.correctAnswer = text;
        
    }
};

function run(kate){
    
    kategorie = kate;
    
    for(var i = 0; i < 10; i++){
        
        var random = randomNumber(10) + 1;
        
        for(var a = 0; a < 40; a++){
            
            if(random === alreadyAsked[a]){
                
                random = randomNumber(10) + 1;
                
            }else {
                
                
            }
            
        }
        
        alreadyAsked[i] = random;
   
    }
    console.log("Array" + alreadyAsked);
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
    
    checkPreset();
    customButtons();
    
    if(counter === 10){
        saveSession();
        weiterleitung();
    
    }
    
    
    
    
    document.getElementById("answerTopLeft").addEventListener("click", checkAnswer1);
    document.getElementById("answerTopRight").addEventListener("click" ,checkAnswer2);
    document.getElementById("answerBottomLeft").addEventListener("click", checkAnswer3);
    document.getElementById("answerBottomRight").addEventListener("click", checkAnswer4);
    
    resetAnimation();
    
    if(error === false){
        
            
        loadFromServer(kategorie, alreadyAsked[counter]);
            
        question = serverQuestion;
        
    } 
        
    setTimeout('prepareQuestion()',500);
        
    counter++;
};
function prepareQuestion(){
    
    if(error === true){
    
    if(kategorie == null){
    
        console.log("Keine Kategorie gewählt.");
        //kategorie = "geschichte";
    }
    if(kategorie === "random"){
        
        var random = randomNumber(6) + 1;
    
        console.log(random);
        if( random === 1 ){
    
            var temp = JSON.parse(window.localStorage.getItem("geschichte"));
    
        }else if( random === 2 ){
        
            var temp = JSON.parse(window.localStorage.getItem("sport"));
        
        }else if( random === 3 ){
        
            var temp = JSON.parse(window.localStorage.getItem("chemie"));
        
        }else if( random === 4 ){
        
            var temp = JSON.parse(window.localStorage.getItem("essenUndTrinken"));
        
        }else if( random === 5 ){
        
            var temp = JSON.parse(window.localStorage.getItem("politik"));
        
        } else if (random === 6){
            
            var temp = JSON.parse(window.localStorage.getItem("erdkunde"));
            
        }
        
        
    } else {
        
    //Aus dem String wird wieder ein Array
    var temp = JSON.parse(window.localStorage.getItem(kategorie));
        
    }
    
    var get = randomNumber(temp.length);
    //console.log(serverQuestion.question);

            
    question = temp[get];
    
    } else {
        
        question = serverQuestion;
        
    }
    
    //console.log(question.question);
    document.getElementById("question").innerHTML = question.question;
    //TODO gegebenenfalls anderer Auswahlmechanismus
    var order = randomNumber(5) + 1;
    console.log(order);
        
    if( order === 1){
        
        document.getElementById("answerTopLeft").innerHTML = question.correctAnswer;
        document.getElementById("answerTopRight").innerHTML = question.answer2;
        document.getElementById("answerBottomLeft").innerHTML = question.answer3;
        document.getElementById("answerBottomRight").innerHTML = question.answer4;
        
    } else if( order === 2){
        
        document.getElementById("answerTopLeft").innerHTML = question.answer4;
        document.getElementById("answerTopRight").innerHTML = question.answer2;
        document.getElementById("answerBottomLeft").innerHTML = question.answer3;
        document.getElementById("answerBottomRight").innerHTML = question.correctAnswer;
        
    } else if( order === 3){
        
        document.getElementById("answerTopLeft").innerHTML = question.answer2;
        document.getElementById("answerTopRight").innerHTML = question.correctAnswer;
        document.getElementById("answerBottomLeft").innerHTML = question.answer3;
        document.getElementById("answerBottomRight").innerHTML = question.answer4;
        
    } else if( order === 4){
        
        document.getElementById("answerTopLeft").innerHTML = question.answer2;
        document.getElementById("answerTopRight").innerHTML = question.correctAnswer;
        document.getElementById("answerBottomLeft").innerHTML = question.answer4;
        document.getElementById("answerBottomRight").innerHTML = question.answer3;
        
    } else if ( order === 5 ){
    
        document.getElementById("answerTopLeft").innerHTML = question.answer2;
        document.getElementById("answerTopRight").innerHTML = question.answer4;
        document.getElementById("answerBottomLeft").innerHTML = question.correctAnswer;
        document.getElementById("answerBottomRight").innerHTML = question.answer3;
    
    
    }
    

}


function checkAnswer1(){

    //console.log(document.getElementById("answerTopLeft").innerHTML);
    if(document.getElementById("answerTopLeft").innerHTML === question.correctAnswer){
    
        document.getElementById("answerTopLeft").style.backgroundImage = "none";
        document.getElementById("answerTopLeft").style.backgroundColor = "green";
        startTrueOrFalse("answerTopLeft");
        addScore(5);
        saveRichtige(1);
        richtig++;
        
    } else {
    
        document.getElementById("answerTopLeft").style.backgroundImage = "none";
        document.getElementById("answerTopLeft").style.backgroundColor = "red";
        startTrueOrFalse("answerTopLeft");
        saveFalsche(1);
        falsch++;
    }
    
    checkAll();
    
  

}

function checkAnswer2(){

    if(document.getElementById("answerTopRight").innerHTML === question.correctAnswer){
    
        document.getElementById("answerTopRight").style.backgroundImage = "none";
        document.getElementById("answerTopRight").style.backgroundColor = "green";
        startTrueOrFalse("answerTopRight");
        addScore(5);
        saveRichtige(1);
        richtig++;
        
    } else {
    
        document.getElementById("answerTopRight").style.backgroundImage = "none";
        document.getElementById("answerTopRight").style.backgroundColor = "red";
        startTrueOrFalse("answerTopRight");
        saveFalsche(1);
        falsch++;
    }
    

    checkAll();
    
    
}

function checkAnswer3(){

    if(document.getElementById("answerBottomLeft").innerHTML === question.correctAnswer){
    
        document.getElementById("answerBottomLeft").style.backgroundImage = "none";
        document.getElementById("answerBottomLeft").style.backgroundColor = "green";
        startTrueOrFalse("answerBottomLeft");
        addScore(5);
        saveRichtige(1);
        richtig++;
        
    } else {
    
        document.getElementById("answerBottomLeft").style.backgroundImage = "none";
        document.getElementById("answerBottomLeft").style.backgroundColor = "red";
        startTrueOrFalse("answerBottomLeft");
        saveFalsche(1);
        falsch++;
    }
    
    checkAll();
    

}

function checkAnswer4(){

    if(document.getElementById("answerBottomRight").innerHTML === question.correctAnswer){
    
        document.getElementById("answerBottomRight").style.backgroundImage = "none";
        document.getElementById("answerBottomRight").style.backgroundColor = "green";
        startTrueOrFalse("answerBottomRight");
        addScore(5);
        saveRichtige(1);
        richtig++;
        
    } else {
    
        document.getElementById("answerBottomRight").style.backgroundImage = "none";
        document.getElementById("answerBottomRight").style.backgroundColor = "red";
        startTrueOrFalse("answerBottomRight");
        saveFalsche(1);
        falsch++;
    
    }
    
    checkAll();
    
  


}

function checkAll(){
    
    //ActionListener deaktivieren bei Animation
    document.getElementById("answerTopLeft").removeEventListener("click", checkAnswer1);
    document.getElementById("answerTopRight").removeEventListener("click" ,checkAnswer2);
    document.getElementById("answerBottomLeft").removeEventListener("click", checkAnswer3);
    document.getElementById("answerBottomRight").removeEventListener("click", checkAnswer4);

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
        document.getElementById("answerBottomLeft").style.backgroundColor = "green";
       
        
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
    setTimeout('endAnimation()', 1000);

};

function endAnimation(){

    startRotate();
    /*
    startNextQuestionAnimation("question");
    startNextQuestionAnimation("answerTopRight");
    startNextQuestionAnimation("answerTopLeft");
    */
    setTimeout('resetStyleChanges()',500);

};

function resetStyleChanges(){
    
    //startRotate();
    document.getElementById("answerTopLeft").style.backgroundImage = "linear-gradient(to bottom left, #FFEB38 0%, #396AEF 100%)";
    document.getElementById("answerTopRight").style.backgroundImage = "linear-gradient(to bottom left, #FFEB38 0%, #396AEF 100%)";
    document.getElementById("answerBottomLeft").style.backgroundImage = "linear-gradient(to bottom left, #FFEB38 0%, #396AEF 100%)";
    document.getElementById("answerBottomRight").style.backgroundImage = "linear-gradient(to bottom left, #FFEB38 0%, #396AEF 100%)";
    checkEnd();
    //setTimeout('stopRotate',2000);
};

function checkEnd(){
    
        console.log("Richtig:" + richtig);
        console.log("Falsch:" + falsch);
    
        loadQuestion();
    
};
//OUTDATED!
/*
function rotateY(){
    
    document.getElementById("question").style.animation = "rotateY 2s infinite";
    setTimeout('stopRotate', 2000);
};
*/
function stopRotate(){
    
    document.getElementsByClassName("question")[0].style.animationPlayState = "paused";
};

function startRotate(){
    
    document.getElementsByClassName("question")[0].style.animationPlayState = "running";
    
    setTimeout('stopRotate()',600);
    
};

function startTrueOrFalse(id){

    var doc = 'stopTrueOrFalse("' + id + '")';
    
    document.getElementById(id).style.animationPlayState = "running";
    setTimeout(doc,500);
    
};

function stopTrueOrFalse(id){

    document.getElementById(id).style.animationPlayState = "paused";

};

function wait(){

    console.log("wait");

};

function startNextQuestionAnimation(id){
    
    document.getElementById(id).style.animationPlayState = "running";
    
    var temp = 'stopNextQuestionAnimation("' + id + '")';
    

    setTimeout(temp,2000);

};

function stopNextQuestionAnimation(id){

    document.getElementById(id).style.animationPlayState = "paused";

};

function checkAnimations(){
    
    //console.log(document.getElementsByClassName("question")[0].style.transform.valueOf());
    //console.log(document.getElementById("answerTopRight").style.transform.valueOf());

    document.getElementsByClassName("question")[0].style.transform = "rotate(0deg)";
    document.getElementById("answerTopLeft").style.transform = "scale(1.0,1.0)";
    document.getElementById("answerTopRight").style.transform = "scale(1.0,1.0)";
    document.getElementById("answerBottomLeft").style.transform = "scale(1.0,1.0)";
    document.getElementById("answerBottomRight").style.transform = "scale(1.0,1.0)";
}

function weiterleitung(){

    window.document.location.href = "auswertung.html";

};

function reload(){
    
    if(kategorie === "random"){
    
        window.document.location.href = "frage.html";
    
    } else {
        
    var temp = kategorie + ".html";
    window.document.location.href = temp;
        
    }

};

function resetAnimation(){

    document.getElementsByClassName("question")[0].style.animation="reset 0.1s 1";
    document.getElementsByClassName("question")[0].style.animationPlayState = "running";
    //setTimeout('restoreAnimation',100);
    restoreAnimation();

};

function restoreAnimation(){

    document.getElementsByClassName("question")[0].style.animation="rotateY 0.5s infinite";
    document.getElementsByClassName("question")[0].style.animationPlayState = "paused";

};

function saveSession(){

    window.localStorage.setItem("richtig",richtig);
    window.localStorage.setItem("falsch",falsch);
    window.localStorage.setItem("kategorie",kategorie);

};

function customButtons(){
  
  if(buttoncolor != "default"){
     document.getElementById("answerTopLeft").style.background = "none";
     document.getElementById("answerTopLeft").style.background = buttoncolor;
        
     document.getElementById("answerTopRight").style.background = "none";
     document.getElementById("answerTopRight").style.background = buttoncolor;
        
     document.getElementById("answerBottomLeft").style.background = "none";
     document.getElementById("answerBottomLeft").style.background = buttoncolor;
        
     document.getElementById("answerBottomRight").style.background = "none";
     document.getElementById("answerBottomRight").style.background = buttoncolor;
     
     document.getElementsByTagName("body")[0].style.background = background;
  }
};

function loadFromServer(topic,id){
    
    var number = id;
    console.log(number);
    var topic = topic;
    var array = [5];
    
    datenbankAufruf();
    

    function datenbankAufruf() {
        $.ajax({
            type: 'POST',
            url: 'https://kaikarren.de/fragen.php',
            data: {
                 id: number,
                 topic: topic
            },
            dataType: 'jsonp',
            success: function (jsonData) {
            console.log("SUCCESS");
            daten = jsonData; 
            array = daten;
            console.log(array);
            serverQuestion = new Question(2000,array[0],array[1],array[2],array[3],array[4]);
            
            },
            error: function (jqXHR, exception) {
                error = true;
            },
            complete: function () {

            }
        });
 
}

    
};




//zum Testen
//saveQuestionsOnDevice();
/*
saveGeschichteOnDevice();
saveChemieOnDevice();
saveSportOnDevice();
saveEssenUndTrinkenOnDevice();
*/
document.getElementById("answerTopLeft").addEventListener("click", checkAnswer1);
document.getElementById("answerTopRight").addEventListener("click" ,checkAnswer2);
document.getElementById("answerBottomLeft").addEventListener("click", checkAnswer3);
document.getElementById("answerBottomRight").addEventListener("click", checkAnswer4);

//loadQuestion();

function testRandom(){
    
    var eins = 0;
    var zwei = 0;
    var drei = 0;
    var vier = 0;
    var fuenf = 0;

    for(var i = 0; i < 1000; i++){
    
        var random = randomNumber(5) + 1;
        
        if(random === 1){
        
            eins++;
        
        } else if( random === 2 ){
        
            zwei++;
        
        } else if( random === 3 ){
        
            drei++;
        
        } else if( random === 4 ){
        
            vier++;
        
        } else if( random === 5 ){
        
            fuenf++;    
            
        } else {
        
            console.log(random);
        
        }
    
    
    }
    
    console.log("Eins: " + eins);
    console.log("Zwei " + zwei);
    console.log("Drei " + drei);
    console.log("Vier " + vier);
    console.log("Fünf " + fuenf);
    
};








