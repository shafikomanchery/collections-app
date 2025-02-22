<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Include the database connection file
include '../../db/db.php';

// Get the raw POST data
$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

// Check if data is set
if (isset($data['username'], $data['password'], $data['membershipId'], $data['name'], $data['gender'], $data['emailAddress'], $data['address'], $data['mobile'], $data['altMobile'], $data['status'])) {
    
    $username = $data['username'];
    $password = $data['password'];
    $membershipId = $data['membershipId'];
    $name = $data['name'];
    $gender = $data['gender'];
    $emailAddress = $data['emailAddress'];
    $address = $data['address'];
    $mobile = $data['mobile'];
    $altMobile = $data['altMobile'];
    $status = $data['status'];
    $createdDate = date('Y-m-d H:i:s');
    $updatedDate = date('Y-m-d H:i:s');

    // Insert user into the database
    $sql = "INSERT INTO users (username, password, membershipId, name, gender, emailAddress, address, mobile, altMobile, createdDate, updatedDate, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssssssissss", $username, $password, $membershipId, $name, $gender, $emailAddress, $address, $mobile, $altMobile, $createdDate, $updatedDate, $status);

    if ($stmt->execute()) {
        echo json_encode(["message" => "User created successfully"]);
    } else {
        echo json_encode(["message" => "Error: " . $stmt->error]);
    }

    $stmt->close();
} else {
    echo json_encode(["message" => "Invalid input data"]);
}

// Close the connection
$conn->close();

