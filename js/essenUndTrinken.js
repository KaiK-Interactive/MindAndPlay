/**
Version 0.1
18.06.2015
*/

function saveEssenUndTrinkenOnDevice(){

    var essenUndTrinken = [
    
        new Question( 1,".... macht Kinder froh","Haribo","Lagnese","Trolli","Rittersport"),
        new Question( 2,"..... Quadratisch Praktisch Gut","Ritter Sport","IKEA","M&M´s","Pringles"),
        new Question( 3,"..... macht mobil bei Arbeit Sport und Spiel","Mars","Snickers","Twix","KitKat"),
        new Question( 4,"Ei, Ei, Ei.....","Verpoorten","Milky Way","Hanuta","Coca Cola"),
        new Question( 5,"Wecke den Tiger in dir","Frosties","Crunchy Nut","Honey Beans","Fruit Loops"),
        new Question( 6,"Das Bier für den Mann im Mann","Karlsberg Urpils","Bitburger","Königpilsner","Warsteiner"),
        new Question( 7,"Für die Extraportion Milch","Kinderschokolade","Kinder Country","Hanuta","Knoppers"),
        new Question( 8,"Das Frühstückchen","Knoppers","Frosties","Snickers","Yogurette"),
        new Question( 9,"Alles Gute vom Land","Landliebe","Maggi","Ermann","Bauer"),
        new Question( 10,"Das gewisse Tröpchen etwas","Maggi","Knorr","Nestle","Jägermeister"),
        new Question( 11,"Ich und mein .....","Magnum","Maggi","Mais","Schnitzel"),
        new Question( 12,"Was ist der Grundbestandteil einer mexikanischen Salsa","Tomaten","Mais","Taccos","Hackfleisch"),
        new Question( 13,"Welchen Namen haben kleine PEnne- Nudeln mit kurzer Garzeit","Penette","Penna","Penato","Pennazzi"),
        new Question( 14,"Wie heißt ein deutscher Roséwein","Weißherbst","Roséherbst","Burgunder","Winterrosé"),
        new Question( 15,"Wie heißt eine besonders flache Fischart","Scholle","Schelle","Stelle","Stolle"),
        new Question( 16,"Woraus wird Krappa hergestellt","Traubentrester","Roggen","Mais,"Apfelmousse"),
        new Question( 17,"Was ist einer der Inhaltsstoffe von Coca Cola ","Phosphorsäure","Flusssäure","Apfelsaft","Orangensaft"),
        new Question( 18,"Was ist keine Frucht","Tomate","Pfirsisch","Mango","Erdbeere"),
    
    ];
    
    window.localStorage.setItem("essenUndTrinken",JSON.stringify(essenUndTrinken));

}