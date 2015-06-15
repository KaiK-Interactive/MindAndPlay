/**
 * Version 0.1
 * 28.05.2015
*/

function saveSportOnDevice(){

    var sport = [
    
        new Question( 1,"Was ist eine Mischung zwischen Fußball, Reitsport und Golf?","Polo","Handball","Krocket","Baseball"),
        new Question( 2,"Wer war Fußballweltmeister 2014?","Deutschland","Frankreich","Schweiz","Argentinien"),
    
    ];
    
    window.localStorage.setItem("sport",JSON.stringify(sport));
}
