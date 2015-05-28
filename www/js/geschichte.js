/**
 * Version 0.1
 * 28.05.2015
*/

function saveGeschichteOnDevice(){

       var q1 = new Question(1,"Welches ist die älteste Republik der Welt?“,“San Marino“,“BRD“,“Vatikan“,“Lichtenstein“);
       var q2 = new Question(2,"Wer ist der Vater des Wirtschaftswunders in der BRD?“,“Ludwig Erhard“,“Karl Marx“,“Albert Einstein“,“Adam Smith“);
                             
        var history[];
       for(var i = 1; i < 10; i++){
       
           var temp = "q" + i;
           
            history.push(temp);
       
       }
       

}