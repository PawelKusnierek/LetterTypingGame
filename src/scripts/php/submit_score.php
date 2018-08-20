<?php

include '../php/connection.php';

$submitScore = $_POST['data'];

$result = pg_query($db_connection, $q);
