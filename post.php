<?php
@session_start();
require_once 'vendor/autoload.php';
require_once 'helpers/helper.php';
require_once 'app/db.php';
use Illuminate\Database\Capsule\Manager as DB;


if (!isset($_SESSION['openid'])) {
    echo json_encode(['ret' => 1001, 'errMsg' => '未授权']);
    exit();
}

if( !isset($_POST['name']) || !isset($_POST['tel'])){
    echo json_encode(['ret' => 1002, 'errMsg' => '姓名或者手机号不能为空']);
    exit();
}
elseif( !preg_match('/^1\d{10}$/', $_POST['tel']) ){
    echo json_encode(['ret' => 1002, 'errMsg' => '手机号不符合规则']);
    exit();
}
$data = [
    'openid'=>$_SESSION['openid'],
    'name' => $_POST['name'],
    'tel' => $_POST['tel'],
    'created_at' => date('Y-m-d H:i:s'),
    'updated_at' => date('Y-m-d H:i:s')
];
DB::table('wx_users')->insert($data);
echo json_encode(['ret' => 0]);
exit();
//$works = Capsule::table('works')->first();
