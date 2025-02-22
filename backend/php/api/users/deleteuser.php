<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT,POST');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Include the database connection file
include '../../db/db.php';

// Get the raw DELETE data
$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

// Check if the userId parameter is provided
if (isset($data['userId'])) {
    $userId = intval($data['userId']);
    $status = 'Deleted';

    // Prepare and execute the SQL statement to delete the user by ID
    $sql = "UPDATE users SET status = ? WHERE userId = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("si", $status,$userId);

    if ($stmt->execute()) {
        if ($stmt->affected_rows > 0) {
            echo json_encode(["message" => "User deleted successfully"]);
        } else {
            echo json_encode(["message" => "User not found"]);
        }
    } else {
        echo json_encode(["message" => "Error: " . $stmt->error]);
    }

    $stmt->close();
} else {
    echo json_encode(["message" => "Invalid or missing userId parameter"]);
}

// Close the connection
$conn->close();