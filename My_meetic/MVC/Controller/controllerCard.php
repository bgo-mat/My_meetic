<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");


use modeleUser\User;
include __DIR__ . "/../Modele/modeleUser.php";

$create = new User();



if (isset($_GET['ville']) && !empty($_GET['ville'])) {
    $ville = $_GET['ville'];
} else {
    $ville = "";
}

if (isset($_GET['hobbies']) && !empty($_GET['hobbies'])) {
    $hobbies = $_GET['hobbies'];
} else {
    $hobbies = "";
}

if (isset($_GET['genre']) && !empty($_GET['genre'])) {
    $genre =  $_GET['genre'];
} else {
    $genre = "";
}


    $age1 = $_GET['age1'];
    $age2 = $_GET['age2'];


    $val = $create ->getInfoFiltre($ville, $genre, $hobbies, $age1, $age2);



$result = [
    'val' => $val,
 ];

 header("Content-Type: application/json");

 echo json_encode($result);
