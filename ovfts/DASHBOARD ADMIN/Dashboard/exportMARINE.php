<?php
// Database connection (adjust your credentials)
$mysqli = new mysqli("localhost", "root", "", "admin");

if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Query to get data from the database for specific courses
$query = "SELECT FirstName, LastName, Email, Gender, Phone, Address, Lastschool, Course, Date 
          FROM registrations 
          WHERE Course IN ('BSME', 'BSMT') 
          ORDER BY Course, Date, LastName, FirstName ASC";
$result = $mysqli->query($query);

if ($result === false) {
    die("Query failed: " . $mysqli->error);
}

// Set headers for CSV download
header('Content-Type: text/csv');
header('Content-Disposition: attachment;filename="ECA-OVFTS MARITIME DEPARTMENT Responses ' . date('Y-m-d') . '.csv"');

// Open the output stream for writing the CSV
$output = fopen('php://output', 'w');

// Define the column headers
$headers = ['First Name', 'Last Name', 'Email', 'Gender', 'Contact', 'Address', 'Last/Current School Attended', 'Course', 'Date'];
fputcsv($output, $headers);

// Fetch the data from the query and write to the CSV
while ($row = $result->fetch_assoc()) {
    // Format the date
    $row['Date'] = date('Y-m-d', strtotime($row['Date']));
    
    // Write the row to the CSV file
    fputcsv($output, $row);
}

// Close the output stream
fclose($output);

// Close database connection
$mysqli->close();

exit;
?>
