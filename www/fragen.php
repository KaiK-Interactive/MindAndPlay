
<?php
        $db = mysqli_connect("localhost", "fragen", "d98pzy2g", "fragen");
        if(!$db)
        {
          exit("Verbindungsfehler: ".mysqli_connect_error());
        }
//Verarbeite Daten: Speichert die Daten aus Variable1 in globaler Variable $Variabel1
$number = $_REQUEST['id'];
$topic = $_REQUEST['topic'];
//$number = "1";
//$topic = "Politik";
//Verarbeite Daten Speichert die Daten aus Variable2 in globaler Variable $Variabel1
//$Variable2 = $_REQUEST['Name2'];
$LogData = json_decode('['.$RegData.']', true);

         //  MySQL Datebankabfrage
$abfrage = "SELECT frage,richtigeAntwort,falscheAntwort1,falscheAntwort2,falscheAntwort3 FROM " .$topic. " WHERE id = ". $number;
$DB_abfrage = mysqli_query($db,$abfrage);
                if (mysqli_num_rows($DB_abfrage) > 0) {
        // output data of each row
        while($row = mysqli_fetch_assoc($DB_abfrage)) {
                //echo "<p>" .$row["frage"]. "</p>";
                $frage = $row["frage"];
                //echo "<p>" .$row["richtigeAntwort"]."</p>";
                $richtigeAntwort = $row["richtigeAntwort"];
                $falscheAntwort1 = $row["falscheAntwort1"];
                $falscheAntwort2 = $row["falscheAntwort2"];
                $falscheAntwort3 = $row["falscheAntwort3"];
        }
        } else {
                 echo "0 results";
        }



        $callback = array( $frage, $richtigeAntwort, $falscheAntwort1, $falscheAntwort2, $falscheAntwort3);
        header('Content-type: application/json');
echo $_REQUEST['callback'].'('.utf8_encode(json_encode($callback)).')';
?>
