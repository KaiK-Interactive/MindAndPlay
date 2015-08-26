/**
 * Version 0.1
 * 24.08.2015
*/

function saveInformatikOnDevice(){

    var informatik = [
    
        new Question(1,"Was verteht man unter einem Mainframe?","zentraler Großrechner"," lokaler Server","Druckserver","Mailserver"),
        new Question(2,"Wie viele Bits ergeben ein Byte?","8","4","2","16"),
        new Question(3,"Kurzzeitspeicher eines Computers:","Arbeitsspeicher","Festplatte","Bildschirm","SSD"),
        new Question(4,"Was ist kein OS?","Dubai","Debain","Ubuntu","Mint"),
        new Question(5,"Ausgabeanweisung in C#","Console.WriteLine()","System.out.println()","print()","console.log()"),
    
    
    ];
    
    window.localStorage.setItem("informatik",JSON.stringify(informatik));
}
