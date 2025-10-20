<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");
try{


$stm = "mysql:host=localhost;dbname=workers;port=3307";
$user = "root";
$pass = "";
$conn = new PDO($stm,$user,$pass);
}catch(PDOException $e){
    die(json_encode("Errro : ".$e->getMessage()));
}


?>