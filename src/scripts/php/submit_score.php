<?php

include '../../../index.php';

$userName = $_POST['userName'];
$score = $_POST['score'];

$result = pg_query_params($app, 'INSERT INTO scores(name, score) VALUES ($1,$2);',
    array($userName, $score));
