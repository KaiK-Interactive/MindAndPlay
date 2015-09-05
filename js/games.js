/**
Version 0.1
24.08.2015
*/

function saveGamesOnDevice(){

    var games = [
    
    	new Question (1,"Minecraft: Wie groß ist ein Chunk?","16*16","10*10","32*32","12*12"),
		new Question (2,"Minecraft: Welche Kreatur kann nicht im Nether erscheinen?","Zombie","Skelett","Lohe","Witherskelett"),
		new Question (3,"Minecraft: Welcher Block kennt keine Schwerkraft?","Blatt","Kies","Sand","Amboss"),
		new Question (4,"Minecraft: Wie viele Game Ticks gibt es pro Sekunde?","20","50","10","16"),
		new Question (5,"Minecraft: Auf welchen Wert ist der \"Random Tick Speed\"standartmäßig gestellt?","3","1/20","20","1"),
		new Question (6,"Minecraft: Wie viele verschiedene Berufe können Dorfbewohner erlernen?","8","5","16","3"),
		new Question (7,"Minecraft: Wie vielen Blöcken in der Oberwelt entspricht ein Block im Nether? ","8","1","16","32"),
    
    ];
    
    window.localStorage.setItem("games",JSON.stringify(games));

}