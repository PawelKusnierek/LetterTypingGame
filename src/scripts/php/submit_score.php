<?php

include '../php/connection.php';

$userName = $_POST['userName'];
$score = $_POST['score'];

$result = pg_query_params($db_connection, 'INSERT INTO scores(name, score) VALUES ($1,$2);',
    array($userName, $score));
