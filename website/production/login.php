<?php
$id=$_POST['id'];
$pass=$_POST['pass'];
$servername = "localhost";
$username="root";
$password="";
$db="certificate";
$conn = mysqli_connect($servername, $username, $password, $db);
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
//echo("connected");
$sql="SELECT * FROM `test` WHERE username='$id' AND password='$pass'";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
    // output data of each row
    if(1)
    echo "1";
    }

else echo "0" 
?>