<?php
@session_start();
require_once 'vendor/autoload.php';
require_once 'helpers/helper.php';
require_once 'app/db.php';
use Illuminate\Database\Capsule\Manager as DB;
use Illuminate\Pagination\Paginator;

if( !isset($_GET['page']) ){
    $_GET['page'] = 1;
}
$model = DB::table('works');
//    $_SESSION['openid'] = 'oJ_0Jws7bWpFld6mSu9IPjWU_C5A';
if( isset($_GET['type']) && $_GET['type'] == 'my' ){
    $model->orderBy('created_at','DESC');
    $model->where('openid', $_SESSION['openid']);
}
else{
    $model->orderBy('vote_num','DESC')->orderBy('created_at','DESC');
}
$paginator =  $model->paginate(20, ['*'], 'page', $_GET['page']);
$paginator->setPath('works.php');
//$list = $paginator->render();
//var_dump($list);
echo $paginator->toJson();
//exit();
exit();
//$works = Capsule::table('works')->first();
