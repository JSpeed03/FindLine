<?php
session_start();
unset($_SESSION['']);
// Check if the user has requested to log out
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'logout') {
    // Clear all session data
    $_SESSION = array();

    // If a session cookie exists, delete it
    if (ini_get("session.use_cookies")) {
        $params = session_get_cookie_params();
        setcookie(session_name(), '', time() - 42000, 
            $params["path"], 
            $params["domain"], 
            $params["secure"], 
            $params["httponly"]
        );
    }

    // Destroy the session
    session_destroy();

    
    // Prevent caching
    header('Cache-Control: no-cache, no-store, must-revalidate'); 
    header('Pragma: no-cache');
    header('Expires: 0'); 
    
    // Redirect to the login page
    header('Location: /ovfts/ovfts/DASHBOARD%20ADMIN/Login/login.html');
    exit();
}
?>
