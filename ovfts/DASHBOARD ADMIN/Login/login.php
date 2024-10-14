
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
            max-width: 90%;
            width: 300px;
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 20px;
            text-align: center;
            font-size: 16px;
            background: rgba(255, 255, 255, 0.9);
            color: black;
            border: 2px solid rgba(0, 0, 0, 0.2);
            position: relative;
            padding: 20px;
            box-sizing: border-box;
        }

        @media (max-width: 768px) {
            .modal-content {
                width: 80%;
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
            window.location.href = 'login.html';
        }
    </script>
</body>
</html>
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
function log_activity($con, $username, $activity_type) {
    $stmt = $con->prepare('INSERT INTO activity_log (username, activity_type) VALUES (?, ?)');
    $stmt->bind_param('ss', $username, $activity_type);
    $stmt->execute();
    $stmt->close();
}

// Handle form submission
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = htmlspecialchars($_POST['username']);
    $password = $_POST['password'];

    // Query to fetch the user details
    if ($stmt = $con->prepare('SELECT adminID, password FROM accounts WHERE username = ?')) {
        $stmt->bind_param('s', $username);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            $stmt->bind_result($id, $stored_password);
            $stmt->fetch();

            // Verify the password (if passwords are hashed, use password_verify)
            if ($password === $stored_password) {
                session_regenerate_id(); 
                $_SESSION['loggedin'] = TRUE;
                $_SESSION['username'] = $username;
                $_SESSION['adminID'] = $id;

                log_activity($con, $username, 'Login successful');

                header('Location:\ovfts\ovfts\DASHBOARD ADMIN\Dashboard\Dashboard.php');
                exit();
            } else {
                // Log failed login attempt
                log_activity($con, $username, 'Login failed - incorrect password');
    
                echo '<div style="display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 1000;">';
                echo '<div style="max-width: 90%; width: 300px; height: auto; display: flex; flex-direction: column; justify-content: center; align-items: center; border-radius: 20px; text-align: center; font-size: 16px; background: rgba(255, 255, 255, 0.9); color: black; border: 2px solid rgba(0, 0, 0, 0.2); position: relative; padding: 20px;">';
                echo '<p style="margin: 0;">Incorrect username and password!</p>';
                echo '<button onclick="closeModal()" style="margin-top: 20px; padding: 10px 20px; border: none; border-radius: 5px; background-color: #007bff; color: white; cursor: pointer;">Go Back</button>';
                echo '</div>';
                echo '</div>';
            }
        } else {
            // Log failed login attempt due to non-existing user
            log_activity($con, $username, 'Login failed - username not found');
    
            echo '<div style="display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 1000;">';
            echo '<div style="max-width: 90%; width: 300px; height: auto; display: flex; flex-direction: column; justify-content: center; align-items: center; border-radius: 20px; text-align: center; font-size: 16px; background: rgba(255, 255, 255, 0.9); color: black; border: 2px solid rgba(0, 0, 0, 0.2); position: relative; padding: 20px;">';
            echo '<p style="margin: 0;">Incorrect username and password!</p>';
            echo '<button onclick="closeModal()" style="margin-top: 20px; padding: 10px 20px; border: none; border-radius: 5px; background-color: #007bff; color: white; cursor: pointer;">Go Back</button>';
            echo '</div>';
            echo '</div>';
        }
        $stmt->close();
    } else {
        echo "Failed to prepare the SQL statement: " . $con->error;
    }
}
    $con->close();
    ?>
