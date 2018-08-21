<?php

include 'src/scripts/php/connection.php';
include 'src/homepage.html';

$resultsQuery = file_get_contents('src/queries/top_10_results.sql');
$result = pg_query($db_connection, $resultsQuery);

