<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");


use modeleUser\User;
include __DIR__ . "/../Modele/modeleUser.php";

$create = new User();
$search = new User();


if (isset($_GET['nom']) && !empty($_GET['nom'])) {
    $nom = $_GET['nom'];
    $prenom = $_GET['prenom'];
    $birthdate = $_GET['birthdate'];
    $genre = $_GET['genre'];
    $ville = $_GET['ville'];
    $mail = $_GET['mail'];
    $hobbies = $_GET['hobbies'];

    $password = password_hash($_GET['password'], PASSWORD_BCRYPT) ;
    $create->createUser($nom, $prenom, $birthdate, $genre, $ville, $mail, $password, $hobbies);
} else {
    $mail = $_GET['mail'];
    $val = $search->searchCurrentUser($mail);
}









$result = [
    'test' => $val,
 ];

 header("Content-Type: application/json");

 echo json_encode($result);
