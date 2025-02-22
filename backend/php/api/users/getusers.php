<?php
// Allow from any origin 
header('Access-Control-Allow-Origin: *'); 
// Allow specific methods 
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS'); 
// Allow specific headers 
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');

// Include the database connection file
include '../../db/db.php';

// Fetch users from the database
$sql = "SELECT u.username, u.emailAddress,up.*  FROM userProfile up inner join user u where u.id = up.userId";
$result = $conn->query($sql);

$users = [];

if ($result->num_rows > 0) {
    // Output data of each row
    while ($row = $result->fetch_assoc()) {
        $users[] = $row;
    }
}

// Close the connection
$conn->close();

// Return the JSON response
echo json_encode($users);

