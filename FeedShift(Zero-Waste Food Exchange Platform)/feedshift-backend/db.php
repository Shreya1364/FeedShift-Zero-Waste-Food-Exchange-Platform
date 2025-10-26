<?php
$conn = new mysqli("localhost", "root", "", "feedshift", 3307);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
