<html>
<body>

<form action="welcome.php" method="post">
Name: <input type="text" name="name" />
Age: <input type="text" name="age" />
<input type="submit" />
</form>
<form action="welcome.php" method="get">
option: 'do'
<input type="button" value="Hello world!">
</form>

<?php  
if (array_key_exists("option", $_GET))
{
	echo $_GET["option"];
	if ($_GET["option"] == 'do')
	{
		$user="root";
		$pass="root";
		$dbh=new PDO('mysql:host=localhost;port=3306; dbname=mysql',$user,$pass,array(  
		PDO::ATTR_PERSISTENT=>true  
		));  
	}
}
?> 
</body>
</html>