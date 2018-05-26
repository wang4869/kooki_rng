<?php
@session_start();
require_once 'vendor/autoload.php';
require_once 'helpers/helper.php';
require_once 'app/db.php';
use Illuminate\Database\Capsule\Manager as Capsule;


if (!isset($_GET['id'])) {
    echo json_encode(['ret' => 1001, 'errMsg' => '不存在']);
    exit();
}
$id = $_GET['id'];

$work = Capsule::table('works')->find($id);
if( null == $work ){
    echo json_encode(['ret' => 1001, 'errMsg' => '不存在']);
    exit();
}
echo json_encode(['ret' => 0, 'data' => $work]);
exit();
//$works = Capsule::table('works')->first();
