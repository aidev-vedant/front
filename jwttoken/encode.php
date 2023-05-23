<?php
require __DIR__ .'/Users/sys220803/Projects/front/jwttoken/vendor/autoload.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$key = 'ved123';
$payload = [
    'name'=>'vedant',
    'branch'=>'computer',
    'email'=>'ved@mailcom'
];


$jwt = JWT::encode($payload, $key, 'HS256');
$decoded = JWT::decode($jwt, new Key($key, 'HS256'));

print_r($decoded);


$decoded_array = (array) $decoded;


JWT::$leeway = 60; 
$decoded = JWT::decode($jwt, new Key($key, 'HS256'));

?>