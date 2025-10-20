<?php
include "conn.php";
$request = $_SERVER["REQUEST_METHOD"];

switch($request){
    case 'GET':
        
        $stm;
        $humains;
        if(!isset($_GET["id"])){
            $stm = $conn->prepare("SELECT * FROM humains");
            $stm->execute();
            $humains = $stm->fetchAll(PDO::FETCH_ASSOC);
        }else{
            $stm = $conn->prepare("SELECT * FROM humains where id=:id");
            $stm->execute([":id"=>$_GET["id"]]);
            $humains = $stm->fetch(PDO::FETCH_ASSOC);
        }
        echo json_encode($humains);
        break;
    case 'POST':
        $input = json_decode(file_get_contents("php://input"),true);
        $stm=$conn->prepare("INSERT INTO humains(nom,prenom,age,country,ville,yearly_earn,type_profession) values(:nom,:prenom,:age,:country,
        :ville,:yearly_earn,:type_profession)");
        $add = $stm->execute([":nom"=>$input["nom"],":prenom"=>$input["prenom"],
        ":age"=>$input["age"],":country"=>$input["country"],":ville"=>$input["ville"],":yearly_earn"=>$input["yearly_earn"],":type_profession"=>$input["type_profession"]]);

        if($add){
            echo json_encode(["message"=>"Worker add by success"]);
        }else{
            echo json_encode(["message"=>"Worker not add by success"]);
        }
        break;

    case 'PUT':
        $id = $_GET["id"];
        $input = json_decode(file_get_contents("php://input"),true);
        $stm = $conn->prepare("UPDATE humains set nom=:nom, prenom=:prenom,age=:age,country=:country,ville=:ville,yearly_earn=:yearly_earn,type_profession=:type_profession where id=:id");
        $update = $stm->execute([":nom"=>$input["nom"],":prenom"=>$input["prenom"],
        ":age"=>$input["age"],":country"=>$input["country"],":ville"=>$input["ville"],":yearly_earn"=>$input["yearly_earn"],":type_profession"=>$input["type_profession"],":id"=>$id]);

        if($update){
            echo json_encode(["message"=>"The user updating by success"]);
        }else{
            echo json_encode(["message"=>"The not update by success"]);
        }
        break;
    case 'DELETE':
        $id = $_GET["id"] ?? null;
        $stm = $conn->prepare("DELETE FROM humains where id=:id");
        $delete = $stm->execute([":id"=>$id]);
        if($delete){
            echo json_encode(["message"=>"The user deleting by success"]);
        }else{
            echo json_encode(["message"=>"The user not deleting by success"]);
        }
        break;

    default:
        return;


}

?>