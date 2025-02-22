<?php 
$servername = "localhost:3306";
$username = "root";
$password = "mysqlroot";
$dbname = "rentals";
try{
    $conn = new mysqli($servername, $username, $password,$dbname);
}
catch(mysqli_sql_exception $e){
    echo "DB Connection Failed!". $e->getMessage();
}