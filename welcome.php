<html>
<body>

Welcome <?php echo $_POST["name"]; ?>.<br />
You are <?php echo $_POST["age"]; ?> years old.<br />
rand is <?php echo(rand());?>
<?php  
$user="root";
$pass="root";
$dbh=new PDO('mysql:host=localhost;port=3306; dbname=mysql', $user, $pass, array(PDO::ATTR_PERSISTENT=>true));  
?>  
</body>
</html>