<?php
namespace App;
class Oauth {
    private $redirect_uri = 'http://h5.royalgroups.cn/oauth.php';
    private $appId;
    private $appSecret;

    public function __construct(){
        $this->appId = config('appId');
        $this->appSecret = config('appSecret');
        @session_start();
        if( !isset($_SESSION['openid']) ){
            $this->redirect();
        }
        else{
            redirect('default.html');
        }
    }
    protected function redirect()
    {
        $url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='.$this->appId.'&redirect_uri='.$this->redirect_uri.'&response_type=code&scope=snsapi_base&state=#wechat_redirect';
        header('Location:'.$url);
    }
}