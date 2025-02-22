<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Include the database connection file
include '../../db/db.php';

// Get the raw PUT data
$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

// Check if the userId and other data are set
if (isset($data['userId'], $data['membershipId'], $data['name'], $data['gender'], $data['emailAddress'], $data['address'], $data['mobile'], $data['altMobile'])) {
    
    $userId = intval($data['userId']);
    $membershipId = $data['membershipId'];
    $name = $data['name'];
    $gender = $data['gender'];
    $emailAddress = $data['emailAddress'];
    $address = $data['address'];
    $mobile = $data['mobile'];
    $altMobile = $data['altMobile'];
    $updatedDate = date('Y-m-d H:i:s');

    // Update user in the database
    $sql = "UPDATE users SET membershipId = ?, name = ?, gender = ?, emailAddress = ?, address = ?, mobile = ?, altMobile = ?, updatedDate = ? WHERE userId = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssssissi", $membershipId, $name, $gender, $emailAddress, $address, $mobile, $altMobile, $updatedDate, $userId);

    if ($stmt->execute()) {
        echo json_encode(["message" => "User updated successfully"]);
    } else {
        echo json_encode(["message" => "Error: " . $stmt->error]);
    }

    $stmt->close();
} else {
    echo json_encode(["message" => "Invalid input data"]);
}

// Close the connection
$conn->close();