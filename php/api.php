<?php 
$disks = file_get_contents("../dischi.json");
//Nel caso volessi manipolare i dati
// Filtro per genere Backend
if(!empty($_GET['genre'])){
    $disks = json_decode($disks, true);
    $disks = array_filter($disks, fn($elm) => strtolower($elm['genre']) === strtolower($_GET['genre']));
    $disks = json_encode($disks);
}
                                                                                                                                                                                                                                                                                                                                                                                                                           
header("Content-Type: application/json");
echo $disks;