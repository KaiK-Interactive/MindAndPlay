/**
 * Version 0.1
 * 28.05.2015
*/

function saveChemieOnDevice(){

    var chemie = [
    
        new Question( 1,"Metall, das bei gewöhnlicher Temperatur flüssig ist?","Quecksilber","Stahl","Gold","Platin"),
        new Question( 2,"Welches Edelgas wird als Leuchtstoff in Röhren verwendet?","Neon","Helium","Argon","Xenon"),
        new Question( 3,"Was sind Erze?","Metallhaltige Mineralien","Kohlenhydrate","Eiweise","Ausgangsstoffe für Plastik"),
        new Question( 4,"Was ist Messing","Kupfer-Zinklegierung","Kupfer","Zink","Alamantium"),
        new Question( 5,"Welches chemische Element wird als Desinfektionsmittel in Bädern verwendet?","Chlor","Aceton","Chrom","Neon"),
    
    
    
    ];
    
    window.localStorage.setItem("chemie",JSON.stringify(chemie));
}
