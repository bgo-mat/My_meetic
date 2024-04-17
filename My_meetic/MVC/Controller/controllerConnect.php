<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");


use modeleUser\User;
include __DIR__ . "/../Modele/modeleUser.php";

$create = new User();


$mail = $_GET['mail'];
$mdp = $_GET['password'];

$mdpOrigine = $create ->searchConnection($mail);


if (count($mdpOrigine) == 0) {
    $val = "No-email";
} else {
    if (password_verify($mdp, $mdpOrigine[0][0])) {
        $val = "good";
    } else {
        $val = "bad";
    }
}



$result = [
    'password' => $val,
 ];

 header("Content-Type: application/json");

 echo json_encode($result);
