<?php

include 'connection.php';

$increment_total = file_get_contents('../../queries/increment_total_games.sql');
pg_query($db_connection, $increment_total);