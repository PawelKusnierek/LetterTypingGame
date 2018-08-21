<?php

include '../../../index.php';

$increment_total = file_get_contents('../../queries/increment_total_games.sql');
pg_query($app, $increment_total);