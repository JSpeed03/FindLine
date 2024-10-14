<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        .modal-overlay {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1000;
        }
        .modal-content {
            max-width: 100%;
            width: 400px;
            height: 350px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 20px;
            text-align: center;
            font-size: 35px;
            background: rgba(255, 255, 255, 0.9);
            color: black;
            border: 2px solid rgba(0, 0, 0, 0.2);
            position: relative;
            padding: 20px;
            box-sizing: border-box;
        }
        button {
            font-size: 40px;
        }

        @media (max-width: 768px) {
            .modal-content {
                width: 90%;
                font-size: 14px;
                padding: 15px;
            }
        }

        @media (max-width: 480px) {
            .modal-content {
                width: 90%;
                font-size: 12px;
                padding: 10px;
            }
        }
    </style>
</head>
<body>
    <script>
        function closeModal() {
            window.location.href = 'index.html';
        }
    </script>

<?php
// Function to detect input source
function detect_input_source($input_data) {
    if (is_array($input_data) && count($input_data) > 0) {
        return "HTML Form Submission";
    }

    // Check for SQL-like patterns in the input
    $sql_keywords = '/\b(SELECT|INSERT|INTO|UPDATE|DELETE|FROM|WHERE|VALUES|CREATE|DROP|ALTER|--|#)\b/i';
    if (is_string($input_data) && preg_match($sql_keywords, $input_data)) {
        return "SQL Input";
    }
    else{
        return "Unknown";
    }
}

// Capture form data
$form_data = $_POST;

// Detect the source of the data
$input_source = detect_input_source($form_data);

// Assign variables from POST data
$FirstName = $form_data['first_name'] ?? '';
$LastName = $form_data['last_name'] ?? '';
$Gender = $form_data['gender'] ?? '';
$Email = $form_data['email'] ?? '';
$Phone = $form_data['phone'] ?? '';
$Address = $form_data['address'] ?? '';
$Course = $form_data['course'] ?? '';
$Lastschool = $form_data['school'] ?? '';

// Database connection
$conn = new mysqli('localhost', 'root', '', 'admin');

// Check connection
if ($conn->connect_error) {
    die("Connection Failed: " . $conn->connect_error);
} else {
    // Prepare and execute the SQL statements for the 'registrations' table
    $stmt1 = $conn->prepare("INSERT INTO registrations (FirstName, LastName, Gender, Email, Phone, Address, Course, Lastschool) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    if ($stmt1 === false) {
        die("Error preparing the statement for 'registration': " . $conn->error);
    }
    $stmt1->bind_param("ssssssss", $FirstName, $LastName, $Gender, $Email, $Phone, $Address, $Course, $Lastschool);
    if (!$stmt1->execute()) {
        die("Error executing the statement for 'registration': " . $stmt1->error);
    }

    // Repeat for the 'regback' table
    $stmt2 = $conn->prepare("INSERT INTO regback (FirstName, LastName, Gender, Email, Phone, Address, Course, Lastschool) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    if ($stmt2 === false) {
        die("Error preparing the statement for 'regback': " . $conn->error);
    }
    $stmt2->bind_param("ssssssss", $FirstName, $LastName, $Gender, $Email, $Phone, $Address, $Course, $Lastschool);
    if (!$stmt2->execute()) {
        die("Error executing the statement for 'regback': " . $stmt2->error);
    }

    // Log the submission
    $logStmt = $conn->prepare("INSERT INTO submission_logs (SubmittedFrom, FName, LName) VALUES (?, ?, ?)");
    if ($logStmt === false) {
        die("Error preparing the statement for 'submission_logs': " . $conn->error);
    }
    $logStmt->bind_param("sss", $input_source, $FirstName, $LastName);
    if (!$logStmt->execute()) {
        die("Error executing the statement for 'submission_logs': " . $logStmt->error);
    }

    // Display success modal
    echo '<div class="modal-overlay">';
    echo '<div class="modal-content">';
    echo '<p>Submitted Successfully!</p>';
    echo '<button onclick="closeModal()" style="margin-top: 20px; padding: 10px 20px; border: none; border-radius: 5px; background-color: #007bff; color: white; cursor: pointer;">Close</button>';
    echo '</div>';
    echo '</div>';

    // Close the statements
    $stmt1->close();
    $stmt2->close();
    $logStmt->close();
}

// Close the connection
$conn->close();
?>


</body>
</html>
