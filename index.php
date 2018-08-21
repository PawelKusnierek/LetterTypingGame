<?php

include 'src/homepage.html';

$dbopts = parse_url(getenv('DATABASE_URL'));

$db_connection = pg_connect("host=".$dbopts["host"]." dbname=".ltrim($dbopts["path"],'/')." user="
        .$dbopts["user"]." password=".$dbopts["pass"]);

//$db_connection = pg_connect("host=ec2-54-247-101-191.eu-west-1.compute.amazonaws.com dbname=d7befugnmmgsln
//user=mblncxqnoypnkr password=9f086c22a446a448990286faa30c45ff485cf662698c19c9b0b6e6a48e074970");


$resultsQuery = file_get_contents('src/queries/top_10_results.sql');
$result = pg_query($db_connection, $resultsQuery);
$array = pg_fetch_all($result);
?>

<script type="text/javascript">
    let resultsArray = [];
    resultsArray = <?php echo json_encode($array); ?>;




    // TODO this is terrible, bad, awful, think of a better way than this shambiotic temporary solution
    const dbResult1 = document.getElementById("dbResult1");
    const dbResult2 = document.getElementById("dbResult2");
    const dbResult3 = document.getElementById("dbResult3");
    const dbResult4 = document.getElementById("dbResult4");
    const dbResult5 = document.getElementById("dbResult5");
    const dbResult6 = document.getElementById("dbResult6");
    const dbResult7 = document.getElementById("dbResult7");
    const dbResult8 = document.getElementById("dbResult8");
    const dbResult9 = document.getElementById("dbResult9");
    const dbResult10 = document.getElementById("dbResult10");
    const dbName1 = document.getElementById("dbName1");
    const dbName2 = document.getElementById("dbName2");
    const dbName3 = document.getElementById("dbName3");
    const dbName4 = document.getElementById("dbName4");
    const dbName5 = document.getElementById("dbName5");
    const dbName6 = document.getElementById("dbName6");
    const dbName7 = document.getElementById("dbName7");
    const dbName8 = document.getElementById("dbName8");
    const dbName9 = document.getElementById("dbName9");
    const dbName10 = document.getElementById("dbName10");
    dbResult1.innerHTML = resultsArray[0].score;
    dbResult2.innerHTML = resultsArray[1].score;
    dbResult3.innerHTML = resultsArray[2].score;
    dbResult4.innerHTML = resultsArray[3].score;
    dbResult5.innerHTML = resultsArray[4].score;
    dbResult6.innerHTML = resultsArray[5].score;
    dbResult7.innerHTML = resultsArray[6].score;
    dbResult8.innerHTML = resultsArray[7].score;
    dbResult9.innerHTML = resultsArray[8].score;
    dbResult10.innerHTML = resultsArray[9].score;
    dbName1.innerHTML = resultsArray[0].name;
    dbName2.innerHTML = resultsArray[1].name;
    dbName3.innerHTML = resultsArray[2].name;
    dbName4.innerHTML = resultsArray[3].name;
    dbName5.innerHTML = resultsArray[4].name;
    dbName6.innerHTML = resultsArray[5].name;
    dbName7.innerHTML = resultsArray[6].name;
    dbName8.innerHTML = resultsArray[7].name;
    dbName9.innerHTML = resultsArray[8].name;
    dbName10.innerHTML = resultsArray[9].name;
</script>
