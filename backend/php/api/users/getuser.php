<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Include the database connection file
include '../../db/db.php';

// Check if the userId parameter is provided
if (isset($_GET['id'])) {
    $userId = intval($_GET['id']);

    // Prepare and execute the SQL statement to fetch the user by ID
    $sql = "SELECT u.username, u.emailAddress, up.* FROM userProfile up inner join user u WHERE u.id = up.userId and up.userId = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $userId);
    $stmt->execute();
    $result = $stmt->get_result();

    // Check if a user was found
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        echo json_encode($user);
    } else {
        echo json_encode(["message" => "User not found"]);
    }

    $stmt->close();
} else {
    echo json_encode(["message" => "Invalid or missing userId parameter"]);
}

// Close the connection
$conn->close();