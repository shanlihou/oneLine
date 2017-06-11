<?php
function log_txt($data)
{
	$myfile = fopen("/var/www/log.txt", "a") or die("Unable to open file!");
	fwrite($myfile, $data);
	fclose($myfile);
}
$token = "langren";
$arr = array($token, $_GET["timestamp"], $_GET["nonce"]);
sort($arr);
$oriStr = implode("", $arr);
$sha1Str = sha1($oriStr);
if ($sha1Str == $_GET["signature"])
{
	print_r($_GET["echostr"]);
}
else
{
    print_r('false');
}
?>