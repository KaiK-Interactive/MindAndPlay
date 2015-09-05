/**
 * Version 0.1
 * 31.08.2015
*/

function saveErdkundeOnDevice(){

    var erdkunde = [
    
        new Question( 1,"An welchem Fluss liegt Berlin?","Spree","Elbe","Amazonas","Rhein"),
		new Question( 2,"Welcher Fluss entspringt im Schwarzwald und fließt nach Osten?","Donau","Saar","Oder","Seine"),
		new Question( 3,"Wie heißt der längste Fluss der Erde?","Nil","Amazonas","Huang He","Rhein"),
        new Question( 4,"Wie heißt der längste Fluss in Nordamerika?","Mississippi","Colorado River","Yukon River","Snake River"),
        new Question( 5,"Wie heißt der längste Fluss Deutschlands?","Rhein","Main","Spree","Donau"),
        new Question( 6,"Wie hoch ist der höchste Berg der Erde (in m)?","8848","8256","8929","8489"),
        new Question( 7,"Welches ist der größte europäische Binnenhafen?","Duisburg am Rhein","Frankfurt am Main","München an der Isar","Saarbrücken an der Saar"),
        new Question( 8,"Welches ist die größte Wüste Asiens?","Gobi","Taklamakan","Nefud","Paran"),
        new Question( 9,"Wie heißt das Künstlerviertel in New York?","Greenwich Village","Marble Hill","East Harlem","Yorkville"),
        new Question( 10,"Wie heißt der bekannteste Park Londons?","Hyde Park","Greenwich Park","Regent´s Park","Richmond Park"),
        new Question( 11,"Wie heißt die größte Wüste der Erde?","Sahara","Atacama","Kalahari","Chihuahua"),
        new Question( 12,"Wo befindet sich der Elbtunnel?","Hamburg","Bremen","Dresden","Wittenberge"),
        new Question( 13,"Wo befindet sich das Kap der Guten Hoffnung?","Südafrika","Feuerlandinseln","Norwegen","Togo"),
        new Question( 14,"Wo fließt die Mosel in den Rhein?","Koblenz","Mainz","Frankfurt","Aachen"),
        new Question( 15,"Wo befindet sich die Blaue Grotte?","Insel Capri","Mallorca","Rügen","Mauritius"),
        new Question( 16,"Wo liegt Brooklyn?","New York","Ohio","Virginia","Florida"),
        new Question( 17,"Wo liegt Queensland?","Australien","England","USA","Kanada"),
        new Question( 18,"Wo lebten die Inkas?","Peru","Ecuador","Bolivien","Chile"),
        new Question( 19,"Wie heißt der höchste Berg Afrikas?","Kilimandscharo","Mount Meru","Karisimbi","Tafelberg"),
        new Question( 20,"Wie heißt der höchste Gipfel der Alpen?","Mont Blanc","Matterhorn","Zugspitze","Eiger"),
        new Question( 21,"Wie heißt die Hauptstadt Russlands?","Moskau","St. Petersburg","Kasan","Omsk"),
        new Question( 22,"Wie heißt die Hauptstadt von England?","London","Liverpool","Birmingham","Bath"),
        new Question( 23,"Wie heißt die Hauptstadt von Australien?","Melbourne","Sydney","Brisbane","Perth"),
        new Question( 24,"Welche Stadt ist Hauptstadt Deutschlands?","Berlin","Bonn","Hamburg","München"),
        new Question( 25,"Welche Stadt ist Hauptstadt Frankreichs?","Paris","Nizza","Lyon","Toulouse"),
        new Question( 26,"Wie heißt der längste Fluss Europas?","Wolga","Rhein","Donau","Seine"),
        new Question( 27,"Wie heißt die bayrische Landeshauptstadt und drittgrößte Stadt Deutschlands?","München","Nürnberg","Augsburg","Stuttgart"),
        new Question( 28,"Wie heißt die italienische Stadt in der Boote das meistgenutzte Verkehrsmittel sind?","Venedig","Rom","Mailand","Verona"),
        new Question( 29,"Wo steht der berühmte schiefe Turm?","Pisa","Warschau","St. Petersburg","Aachen"),
        new Question( 30,"Wo steht der Eiffelturm?","Paris","London","Bern","Las Vegas"),
        new Question( 31,"Auf welche japanische Stadt wurde eine Atombomben abgeworfen?","Nagasaki","Tokio","Osaka","Sapporo"),
        new Question( 32,"Wie heißt der Londoner Stadtteil, nach dem der Null-Meridian benannt ist?","Greenwich","Leeds","Manchester","Oxford"),
        new Question( 33,"Wie heißt Konstantinopel heute?","Istanbul","Byzanz","Kaiserstadt","Rom"),
        new Question( 34,"Welche Stadt wurde mit Hilfe eines hölzernen Pferdes erobert?","Troja","Rom","Konstantinopel","Kathago"),
        new Question( 35,"In welcher europäischen Stadt befindet sich der \"Arc de Triumphe\"?","Paris","Basel","Montreal","Monaco"),
        new Question( 36,"In welcher Stadt findet man eine Straße mit den Namen \"Die große Freiheit?\"","Hamburg","Wien","Bern","Kiel"),
        new Question( 37,"Das Weiße Haus ist der Wohnsitz des amerikanischen Präsidenten. In welcher Stadt liegt es?","Washington","New York City","Boston","Los Angeles"),
        new Question( 38,"An welchem Fluss liegt Innsbruck?","Inn","Nil","Isar","Mosel"),
        new Question( 39,"An welchem Fluss liegt Stettin?","Oder","Main","Neckar","Po"),
        new Question( 40,"An welchem Fluss liegt Assuan?","Nil","Amazonas","Kongo","Niger"),
        new Question( 41,"An welchem Fluss liegt Basel?","Rhein","Neckar","Rhone","Reuss"),
        new Question( 42,"An welchem Fluss liegt Berlin?","Havel","Elbe","Moldau","Themse"),
        new Question( 43,"An welchem Fluss liegt Bordeaux?","Garonne","Seine","Rhone","Rhein"),
        new Question( 44,"An welchem Fluss liegt Dresden?","Elbe","Havel","Spree","Saar"),
        new Question( 45,"An welchem Fluss liegt Kairo?","Nil","Loire","Ob","Lena"),
        new Question( 46,"An welchem Fluss liegt London?","Themse","Aire","Avon","Kongo"),
        new Question( 47,"An welchem Fluss liegt Wien?","Donau","Po","Inn","Moldau"),
        new Question( 48,"Welche Insel wird mit der Entstehung der Mafia in Zusammenhang gebracht?","Sizilien","Capri","Korsika","Elba"),
        new Question( 49,"Welche Mittelmeerinsel ist in eine griechischen und einen türkischen Teil gespalten?","Zypern","Malta","Ibiza","Kassos"),
        new Question( 50,"Wie heißt die zweitgrößte Insel im Mittelmeer?","Sardinien","Korsika","Naxos","Menorca"),
        new Question( 51,"Zu welchem Staat gehören die Azoren?","Portugal","Spanien","Frankreich","Italien"),
                           
    ];
    
    window.localStorage.setItem("erdkunde",JSON.stringify(erdkunde));
}