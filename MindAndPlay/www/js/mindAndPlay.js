/* MindAndPlay 
    Version 0.1 10.04.2015
    created by Kai Karren 
 */

xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","./xml/userData.xml",false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

console.log(xml.getElementsByTagName("name").childnode[0].nodeValue);
