<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");


use modeleUser\User;
include __DIR__ . "/../Modele/modeleUser.php";

$find = new User();

$mail = $_GET['mail'];

$id = $find ->getId($mail);
$statut = $find ->getStatut($mail);


$result = [
    'id' => $id,
    'statut' => $statut
 ];

 header("Content-Type: application/json");

 echo json_encode($result);
