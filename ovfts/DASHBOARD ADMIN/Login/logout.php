<?php
session_start();

// Database connection details
$database = "localhost";
$database_username = "root";
$database_password = "";
$database_name = "admin";

// Create a connection
$con = new mysqli($database, $database_username, $database_password, $database_name);

// Check connection
if ($con->connect_error) {
    die('Failed to connect to the database: ' . $con->connect_error);
}

// Function to log activity
function log_activity($con, $username, $activity_type, $activity_time) {
    $stmt = $con->prepare('INSERT INTO activity_log (username, activity_type, activity_time) VALUES (?, ?, ?)');
    $stmt->bind_param('sss', $username, $activity_type, $activity_time);
    $stmt->execute();
    $stmt->close();
}

// Capture logout details
$username = isset($_SESSION['username']) ? $_SESSION['username'] : 'username';
$activity_type = 'logout';
$activity_time = date('Y-m-d H:i:s');

// Call the logging function
log_activity($con, $username, $activity_type, $activity_time);

// Destroy the session and clear cookies
session_unset(); // Clear all session variables
session_destroy(); // Destroy the session

if (isset($_COOKIE[session_name()])) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000, $params['path'], $params['domain'], $params['secure'], $params['httponly']);
}

// Prevent caching
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

// Redirect to login page
header('Location: login.html');
exit();
?>
