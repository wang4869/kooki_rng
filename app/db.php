<?php
use Illuminate\Database\Capsule\Manager as Capsule;
$capsule = new Capsule;
$capsule->addConnection([
    'driver' => 'mysql',
    'host' => config('db.host'),
    'database' => config('db.database'),
    'username' => config('db.username'),
    'password' => config('db.password'),
    'charset' => 'utf8',
    'collation' => 'utf8_unicode_ci',
    'prefix' => '',
]);
// 使用设置静态变量方法，令当前的 Capsule 实例全局可用
$capsule->setAsGlobal();
// 启动 Eloquent ORM
$capsule->bootEloquent();