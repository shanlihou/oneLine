<?php
echo 'i love ying_bin';
$user = 'root';
$pass = 'root';
try {
        $dbh = new PDO('mysql:host=localhost;dbname=mysql', $user, $pass);
        foreach($dbh->query('SELECT * from filter') as $row) {
                print_r($row.'\n');
        }
        $dbh = null;
} catch (PDOException $e) {
        print "Error!: " . $e->getMessage() . "<br/>";
        die();
}
?>
