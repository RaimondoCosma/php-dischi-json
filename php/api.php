<?php 
$disks = file_get_contents("../dischi.json");
$disks = json_decode($disks, true);
//Nel caso volessi manipolare i dati

$json_disks = json_encode($disks);
header("Content-Type: application/json");
echo $json_disks;