<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require 'vendor/autoload.php'; // ✅ use composer autoload

use Razorpay\Api\Api;

$input = json_decode(file_get_contents("php://input"), true);

$keyId = "YOUR RAZORPAY KEY ID";      // ✅ Replace with your test Key ID
$keySecret = "YOUR RAZORPAY TEST SECRET KEY";     // ✅ Replace with your test Secret

$api = new Api($keyId, $keySecret);

$amount = $input['amount']; // in paise

$orderData = [
    'receipt'         => 'donate_rcptid_11',
    'amount'          => $amount,
    'currency'        => 'INR',
    'payment_capture' => 1
];

$order = $api->order->create($orderData);

$response = [
    'order_id' => $order['id'],
    'key' => $keyId
];

echo json_encode($response);
?>
