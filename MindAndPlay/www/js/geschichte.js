/**
 * Version 0.1
 * 10.06.2015
*/

function saveGeschichteOnDevice(){
    
        /*
        var q1 = new Question( 1,"Wer war deutscher Bundeskanzler zur Zeit der Wiedervereinigung?", "Kohl","Merkel","Brandt","Adenauer");
        var q2 = new Question( 2,"Bis wann existierte das weströmische Reich?","500 n.Chr","256 v.Chr","678 n.Chr","78 v.Chr");
        var q3 = new Question( 3,"Auf welche italienische Insel wurde Napoleon verbannt?","Elba","Capri","Sardinien","Palmarola");
        var q4 = new Question( 4,"Welches ist die älteste Republik der Welt?","San Marino","BRD","Vatikan","Lichtenstein");
        var q5 = new Question( 5,"Wer ist der Vater des Wirtschaftswunders in der BRD?","Ludwig Erhard","Karl Marx","Albert Einstein","Adam Smith");
                      
        var geschichte = [];
    
        geschichte.push(q1,q2,q3,q4,q5);
        
        window.localStorage.setItem("geschichte",JSON.stringify(geschichte));
        */
    
        var geschichte = [ 
        
            new Question( 1,"Wer war deutscher Bundeskanzler zur Zeit der Wiedervereinigung?", "Kohl","Merkel","Brandt","Adenauer"),
            new Question( 2,"Bis wann existierte das weströmische Reich?","500 n.Chr","256 v.Chr","678 n.Chr","78 v.Chr"),
            new Question( 3,"Auf welche italienische Insel wurde Napoleon verbannt?","Elba","Capri","Sardinien","Palmarola"),
            new Question( 4,"Welches ist die älteste Republik der Welt?","San Marino","BRD","Vatikan","Lichtenstein"),
            new Question( 5,"Wer ist der Vater des Wirtschaftswunders in der BRD?","Ludwig Erhard","Karl Marx","Albert Einstein","Adam Smith"),
        
        ];
    
     window.localStorage.setItem("geschichte",JSON.stringify(geschichte));

}
