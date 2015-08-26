/**
 * Version 0.1
 * 27.06.2015
*/

function savePolitikOnDevice(){

    var politik = [
    
        new Question( 1,"Wann wurde die Europäische Union gegründet","2007","2002","1949","2015"),
        new Question( 2,"Wie heißt der Amerikanische Präsident, der 1963 erschossen wurde?","John F. Kennedy","Abraham Lincoln","Harry S. Truman ","George W. Bush"),
        new Question( 3,"Wer war der letzte Präsident der Sowjetunion","Gorbatschow","Lenin","Stalin","Merkel"),
        new Question( 4,"Wie nennt man die Mitglieder einer UNO- Friedenstruppe","Blauhelme","Grünhelme","Gelbhelme","Schwarzhelme"),
        new Question( 5,"Welches Recht gehört in Deutschland zu den Grundrechten","Meinungsfreiheit","Selbstjustiz","Waffenbesitz","Faustrecht"),
        new Question( 6,"Was Für eine Staatsform hat Deutschland","Republik","Monarchie","Diktatur","Fürstentum"),
        new Question( 7,"Wie Viele Bundesländer hat die BRD","16","18","14","15"),
        new Question( 8,"Wer war der erste Bundeskanzler der Deutschen Bundesrepublik?","Konrad Adenauer","Williy Brandt","Angela Merkel","Bill Gates"),
        new Question( 9,"Wer war von 1976 - 1989 Vorsitzender des Staatsrates?","Erich Honecker","Paul Jung","Wilhelm Pieck","Walter Ulbricht"),
        new Question( 10,"Wer sagte diesen brühmten Satz: Niemand hat die Absicht eine Mauer zu bauen","Walter Ulbricht","Angela Merkel","Konrad Adenauer","George Washington"),
        new Question( 11,"Wer sagte diesen brühmten Satz: Ich bin ein Berliner","John F. Kennedy","Willy Brandt","Kim Jong Il","Mario Barth"),
        new Question( 12,"In welcher Stadt befindet sich der Sitz des internationalen Gerichtshofs","Den Haag","London","Straßburg","Oslo"),
        new Question( 13,"Wie heißt das Parlament Israels","Knesset","Mossad","sveriges risdag","House of Representitive"),
        new Question( 14,"Wie heißt der schwedische Ministerpresident, der 1986 erschossen wurde?","Olaf Palme","Niklas Landin","Peter Nasr","Hannah Meckeln"),            
    
    ];
    
    window.localStorage.setItem("politik",JSON.stringify(politik));
}
