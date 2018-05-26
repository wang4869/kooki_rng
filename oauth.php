<?php
require_once 'helpers/helper.php';
if( !isset($_GET['code']) ){
    exit();
}
@session_start();
$code = $_GET['code'];
$app_id = config('appId');
$secret = config('appSecret');
$url = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid='.$app_id.'&secret='.$secret.'&code='.$code.'&grant_type=authorization_code';
$result = json_decode(httpGet($url));
if( $result && isset($result->openid) ){
    $_SESSION['openid'] = $result->openid;
    redirect('/index.php');
}