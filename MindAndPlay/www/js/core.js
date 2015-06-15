function start(){


}

function save(){


}

function load(var number){
    
    parser = new DOMParser();
    fragenSammlung = parser.parseFromString(xml/fragenSammlung.xml, "text/xml");
    
   document.getElementById("topic").innerHTML =  fragenSammlung.getElementsByTagName("topic")[number].childNodes[randomNumber()].nodeValue;

}

function choose(){

    var a = randomNumber(10);
    var b = randomNumber();

}



function randomNumber(max){

    var a = Math.floor( Math.random()* max ) + 1;
    
    if( a > max {
    
        a = max;
        
    }
    
    return a;
}

function randomLetter(){

    var array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
                  'o','p','q','r','s','t','u','v','w','x','y','z' ];
    
    var get = randomNumber(25);
    
    return array[get];

}