<?php
$user = "root";
$pass = "root";
$dbh = new PDO('mysql:host=localhost;port=3306; dbname=mysql', $user, $pass, array(PDO::ATTR_PERSISTENT=>true)); 
function add($type, $item)
{
    global $dbh;
    $sql = "INSERT INTO `random` (`type` ,`item`)VALUES (:type, :item)";  
    $stmt = $dbh->prepare($sql);  $stmt->execute(array(':type'=>$type,':item'=>$item));    
    echo $dbh->lastinsertid();
}
function getRand($type)
{
    global $dbh;
    $login = 'kevin%';    
    $sql = "SELECT * FROM `random` WHERE `type` LIKE :type";    
    $stmt = $dbh->prepare($sql);    
    $stmt->execute(array(':type'=>$type));    
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $num = count($result);
    $ran = rand(1, $num) - 1;
    print_r($result[$ran]["item"]);
}
$type = $_GET["type"];
if ($type == "add")
{
    $itemType = $_GET["itemType"];
    $item = $_GET["item"];
    add($itemType, $item);
}
else if ($type == "rand")
{
    $itemType = $_GET["itemType"];
    getRand($itemType);
}
?>