<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

include 'db.php';

$data = json_decode(file_get_contents("php://input"), true);

$donor_name = $data['donor_name'];
$food_item = $data['food_item'];
$quantity = $data['quantity'];
$location = $data['location'];
$expiry_time = $data['expiry_time'];

$sql = "INSERT INTO food_donations (donor_name, food_item, quantity, location, expiry_time)
        VALUES ('$donor_name', '$food_item', '$quantity', '$location', '$expiry_time')";

if ($conn->query($sql) === TRUE) {
    echo "Donation saved successfully.";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
