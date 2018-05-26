<?php
require_once 'helpers/helper.php';
require_once 'includes/wx.class.php';
use App;

if(isset($_GET['url'])){
    $url = $_GET['url'];
}
else{
    $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
    $url = "$protocol$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
}
$wx = new App\Wx($url);
$config = $wx->getSignPackage();
echo json_encode($config);
exit();