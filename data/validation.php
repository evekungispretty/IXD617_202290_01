<?php
include_once "auth.php";
$con = mysqli_connect($host, $user, $pass, $db) or die("Error " . mysqli_error($con));

if (isset($_POST["username"]))
{
    $username = mysqli_real_escape_string($con, $_POST["username"]);
    $sql = "SELECT `id` from `track_house` where `username`='$username'";
    $result = mysqli_query($con,$sql) or die(“Query unsuccessful”) ;
    if (mysqli_num_rows($result) > 0) {
    echo “Username is already exist”;
    } else {
    }
    
}
?>

