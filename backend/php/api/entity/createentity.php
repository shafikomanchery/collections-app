<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Include database connection
include '../../db/db.php';

// Get the raw POST data
$input = file_get_contents("php://input");
$data = json_decode($input, true);

if (isset($data['name'], $data['registrationNo'], $data['email'], $data['phone'])) {

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO Entity (name, tagline, registrationNo, address, email, phone, mobile, status) VALUES (?,?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssssss", $name,$tagline, $registrationNo, $address, $email, $phone, $mobile, $status);

// Set parameters and execute
$name = $data['name'];
$name = $data['tagline'];
$registrationNo = $data['registrationNo'];
$address = $data['address'];
$email = $data['email'];
$phone = $data['phone'];
$mobile = $data['mobile'];
$status = $data['status'];

if ($stmt->execute()) {
    $response = [
        "status" => "success",
        "message" => "Entity created successfully",
        "entityId" => $stmt->insert_id
    ];
} else {
    $response = [
        "status" => "error",
        "message" => "Error creating entity: " . $stmt->error
    ];
}
echo json_encode($response);
// Close statement and connection
$stmt->close();
}
$conn->close();

