<?php
@session_start();
require_once 'vendor/autoload.php';
require_once 'helpers/helper.php';
require_once 'app/db.php';
use Illuminate\Database\Capsule\Manager as DB;

if( isset($_SESSION['openid']) ){
    $user = DB::table('wx_users')->where('openid', $_SESSION['openid'])->first();
    $has_posted = null == $user ? 0 : 1;
    echo json_encode(['ret' => 0, 'has_posted'=>$has_posted, 'errMsg' => '']);
}
else{
    echo json_encode(['ret' => 1001, 'errMsg' => '未授权']);
}