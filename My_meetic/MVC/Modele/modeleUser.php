<?php

namespace modeleUser;

use connect\ConnectionPDO;

include __DIR__ . "/modeleConnection.php";


class User extends ConnectionPDO
{
    public $pdo;
    public $connection;
    public $val;

    public function __construct()
    {
        $this->pdo = new ConnectionPDO();
        $this->connection = $this->pdo->connect();
    }

    public function getUserInfo($id)
    {
        $this->val =  $this-> connection ->prepare("SELECT * FROM user WHERE id_user=:id");
        $this-> val-> bindvalue(':id', $id);
        $this-> val -> execute();
        return $this-> val-> fetchAll();
    }

    public function getAll()
    {
        $this->val =  $this-> connection ->prepare("SELECT * FROM user;");
        $this-> val -> execute();
        return $this-> val-> fetchAll();
    }

    public function createUser($nom, $prenom, $birthdate, $genre, $ville, $mail, $password, $hobbies)
    {
        $this->val = $this->connection->prepare(
            "INSERT INTO user (nom, prenom, age, genre, ville, email, password, statut, hobbies) " .
            "VALUES (:nom,:prenom,:birthdate,:genre,:ville,:mail,:password,1, :hobbies);"
        );
        $this-> val-> bindvalue(':nom', $nom);
        $this-> val-> bindvalue(':prenom', $prenom);
        $this-> val-> bindvalue(':birthdate', $birthdate);
        $this-> val-> bindvalue(':genre', $genre);
        $this-> val-> bindvalue(':ville', $ville);
        $this-> val-> bindvalue(':mail', $mail);
        $this-> val-> bindvalue(':password', $password);
        $this-> val-> bindvalue(':hobbies', $hobbies);
        $this-> val -> execute();
        return $this-> val-> fetchAll();
    }
    public function searchCurrentUser($mail)
    {
        $this->val =  $this-> connection ->prepare("SELECT * FROM user WHERE email=:mail;");
        $this-> val-> bindvalue(':mail', $mail);
        $this-> val -> execute();
        return $this-> val-> fetchAll();
    }

    public function searchConnection($mail)
    {
        $this->val =  $this-> connection ->prepare("SELECT password FROM user WHERE email=:mail;");
        $this-> val-> bindvalue(':mail', $mail);
        $this-> val -> execute();
        return $this-> val-> fetchAll();
    }

    public function getId($mail)
    {
        $this->val =  $this-> connection ->prepare("SELECT id_user FROM user WHERE email=:mail;");
        $this-> val-> bindvalue(':mail', $mail);
        $this-> val -> execute();
        return $this-> val-> fetchAll();
    }

    public function getStatut($mail)
    {
        $this->val =  $this-> connection ->prepare("SELECT statut FROM user WHERE email=:mail;");
        $this-> val-> bindvalue(':mail', $mail);
        $this-> val -> execute();
        return $this-> val-> fetchAll();
    }

    public function changeNom($nom, $id)
    {
        $this->val =  $this-> connection ->prepare("UPDATE user
        SET nom = :nom
        WHERE id_user = :id");
        $this-> val-> bindvalue(':nom', $nom);
        $this-> val-> bindvalue(':id', $id);
        $this-> val -> execute();
        return $this-> val-> fetchAll();
    }

    public function changePrenom($prenom, $id)
    {
        $this->val =  $this-> connection ->prepare("UPDATE user
        SET prenom = :prenom
        WHERE id_user = :id");
        $this-> val-> bindvalue(':prenom', $prenom);
        $this-> val-> bindvalue(':id', $id);
        $this-> val -> execute();
        return $this-> val-> fetchAll();
    }

    public function changeAge($date, $id)
    {
        $this->val =  $this-> connection ->prepare("UPDATE user
        SET hobbies = :birthdate
        WHERE id_user = :id");
        $this-> val-> bindvalue(':birthdate', $date);
        $this-> val-> bindvalue(':id', $id);
        $this-> val -> execute();
        return $this-> val-> fetchAll();
    }

    public function changeVille($ville, $id)
    {
        $this->val =  $this-> connection ->prepare("UPDATE user
        SET ville = :ville
        WHERE id_user = :id");
        $this-> val-> bindvalue(':ville', $ville);
        $this-> val-> bindvalue(':id', $id);
        $this-> val -> execute();
        return $this-> val-> fetchAll();
    }

    public function changeMail($mail, $id)
    {
        $this->val =  $this-> connection ->prepare("UPDATE user
        SET email = :mail
        WHERE id_user = :id");
        $this-> val-> bindvalue(':mail', $mail);
        $this-> val-> bindvalue(':id', $id);
        $this-> val -> execute();
        return $this-> val-> fetchAll();
    }

    public function closeStatut($id)
    {
        $this->val =  $this-> connection ->prepare("UPDATE user
        SET statut = 0
        WHERE id_user = :id");
        $this-> val-> bindvalue(':id', $id);
        $this-> val -> execute();
        return $this-> val-> fetchAll();
    }

    public function openStatut($id)
    {
        $this->val =  $this-> connection ->prepare("UPDATE user
        SET statut = 1
        WHERE id_user = :id");
        $this-> val-> bindvalue(':id', $id);
        $this-> val -> execute();
        return $this-> val-> fetchAll();
    }

    public function changePassword($mdp, $id)
    {
        $this->val =  $this-> connection ->prepare("UPDATE user
        SET password = :mdp
        WHERE id_user = :id");
        $this-> val-> bindvalue(':mdp', $mdp);
        $this-> val-> bindvalue(':id', $id);
        $this-> val -> execute();
        return $this-> val-> fetchAll();
    }

    public function getInfoFiltre($ville, $genre, $hobbies, $age1, $age2)
    {
        $query = "SELECT * FROM user WHERE 1=1";

        if (!empty($ville)) {
            $query .= " AND ville = :ville";
        }
        if (!empty($genre)) {
            $query .= " AND genre = :genre";
        }
        if (!empty($hobbies)) {
            $query .= " AND hobbies = :hobbies";
        }
        $query .= " AND age BETWEEN :age1 AND :age2";

        $this->val = $this->connection->prepare($query);

        if (!empty($ville)) {
            $this->val->bindValue(':ville', $ville);
        }
        if (!empty($genre)) {
            $this->val->bindValue(':genre', $genre);
        }
        if (!empty($hobbies)) {
            $this->val->bindValue(':hobbies', $hobbies);
        }
        $this->val->bindValue(':age1', $age1);
        $this->val->bindValue(':age2', $age2);

        $this->val->execute();
        return $this->val->fetchAll();
    }
}
