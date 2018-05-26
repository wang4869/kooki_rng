<?php
function config($key)
{
    $config = include 'config/app.php';
    $arr = explode('.', $key);
    if( count($arr) == 2 ){
        return $config[$arr[0]][$arr[1]];
    }
    else{
        return $config[$key];
    }
}
function httpGet($url)
{
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_TIMEOUT, 500);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, true);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 2);
    curl_setopt($curl, CURLOPT_URL, $url);
    $res = curl_exec($curl);
    curl_close($curl);

    return $res;
}
function redirect($url)
{
    header('Location:'.$url);
}
