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

if (!isset($_GET['id'])) {
    echo json_encode(['ret' => 1001, 'errMsg' => '不存在']);
    exit();
}

$now = time();

if( $now < strtotime('2018-05-25') ){
    echo json_encode(['ret' => 1001, 'errMsg' => '活动未开始']);
    exit();    
}


if( $now >= strtotime('2018-06-26') ){
    echo json_encode(['ret' => 1001, 'errMsg' => '活动已结束']);
    exit();    
}
$id = $_GET['id'];
$work = DB::table('works')->find($id);
if( null == $work ){
    echo json_encode(['ret' => 1001, 'errMsg' => '不存在']);
    exit();
}
$vote_num = $work->vote_num + 1;
$dt = date('Y-m-d');
$count = DB::table('votes')->where('created_at','>', $dt)->where('openid', $_SESSION['openid'])->count();
if($count >= 3){
    echo json_encode(['ret' => 1002, 'errMsg'=>'每人每天只能点三次哦']);
}
else{
    DB::table('works')->where('id',$id)->update(['vote_num'=>$vote_num]);
    $data = [
        'openid'=>$_SESSION['openid'],
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s')
    ];
    DB::table('votes')->insert($data);
    echo json_encode(['ret' => 0]);
}
exit();
//$works = Capsule::table('works')->first();
