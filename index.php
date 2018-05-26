<?php
@session_start();
require_once 'helpers/helper.php';
require_once 'includes/wx.class.php';
require_once 'includes/oauth.class.php';
//use App;

$oauth = new App\Oauth();