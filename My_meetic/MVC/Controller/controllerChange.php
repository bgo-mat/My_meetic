<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");


use modeleUser\User;
include __DIR__ . "/../Modele/modeleUser.php";

$create = new User();

$id = $_GET['id'];

$info = $create ->getUserInfo($id);


if (isset($_GET['nom']) && !empty($_GET['nom'])) {
    $create ->changeNom($_GET['nom'], $id);
}

if (isset($_GET['prenom']) && !empty($_GET['prenom'])) {
    $create ->changePrenom($_GET['prenom'], $id);
}

if (isset($_GET['password']) && !empty($_GET['password'])) {
    $create ->changeNom($_GET['password'], $id);
}

if (isset($_GET['date']) && !empty($_GET['date'])) {
    $create ->changeAge($_GET['date'], $id);
}

if (isset($_GET['ville']) && !empty($_GET['ville'])) {
    $create ->changeVille($_GET['ville'], $id);
}

if (isset($_GET['mail']) && !empty($_GET['mail'])) {
    $create ->changeMail($_GET['mail'], $id);
}

if (isset($_GET['stat']) && !empty($_GET['stat'])) {
    if ($_GET['stat'] === "close") {
        $create ->closeStatut($id);
    } elseif ($_GET['stat'] === "open") {
        $create ->openStatut($id);
    }
}

if (isset($_GET['mdp']) && !empty($_GET['mdp'])) {
    $password = password_hash($_GET['mdp'], PASSWORD_BCRYPT) ;
    $create ->changePassword($password, $id);
}



$result = [
    'info' => $info
 ];

 header("Content-Type: application/json");

 echo json_encode($result);
