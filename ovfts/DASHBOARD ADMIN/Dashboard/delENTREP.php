<?php
// Database connection
$conn = new mysqli('localhost', 'root', '', 'admin');

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the ID from the URL
if (isset($_GET['UserID'])) {  // Corrected the variable name in the condition
    $id = intval($_GET['UserID']);  // Corrected the variable name here too
    
    // Prepare the delete statement
    $sql = "DELETE FROM registrations WHERE UserID = ?";  // Ensure the column name matches your database schema
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    
    if ($stmt->execute()) {
        // Record deleted successfully, redirect to the page showing the table
        header("Location: entre.php"); // Replace with your actual page
        exit();
    } else {
        echo "Error deleting record: " . $conn->error;
    }
    
    // Close the statement
    $stmt->close();
}

// Close the connection
$conn->close();
?>
