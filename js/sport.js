/**
 * Version 0.1
 * 28.05.2015
*/

function saveSportOnDevice(){

    var sport = [
    
        new Question( 1,"Was ist eine Mischung zwischen Fußball, Reitsport und Golf?","Polo","Handball","Krocket","Baseball"),
        new Question( 2,"Wer war Fußballweltmeister 2014?","Deutschland","Frankreich","Schweiz","Argentinien"),
        new Question( 3,"Wie viele Tore muss ein Riesenslalom mindestens haben?","30","50","25","10"),
        new Question( 4,"Für welches Land spielte Pele?","Brasilien","Chile","Argentinien","Holland"),
        new Question( 5,"Wer gilt als deutscher Rekordnationalspieler?","Lothar Matthäus","Franz Beckenbauer","Bastian Schweinsteiger","Miroslav Klose"),
        new Question( 6,"Wer gilt als deutscher Rekordnationalspieler?","Lothar Matthäus","Franz Beckenbauer","Bastian Schweinsteiger","Miroslav Klose"),
    
    ];
    
    window.localStorage.setItem("sport",JSON.stringify(sport));
}
