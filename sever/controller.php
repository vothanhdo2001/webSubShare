<?php
 include "delete&edit.php";
//link test ?action=deleteShare&shId=4

$action = $_GET["action"];
// echo($action);
// die();

if ($action == "deleteShare"){
  $actionjsshId = $_GET["shId"];
  deleteShare($actionjsshId);
}

function deleteShare($actionjsshId)
{
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "subshare";
    
    $conn = new mysqli($servername, $username, $password, $dbname);
    $conn -> set_charset("utf8");
    
    if($conn ->connect_error){
        die("Connection failed: " . $conn->connect_error);
    }
    $sql = "DELETE FROM share WHERE shId = $actionjsshId";
    // echo $sql;
    // die();
        
    if ($conn->query($sql) === TRUE) {
        echo "Record deleted successfully";
    } 
    else {
        echo "Error deleting record:". $conn->error;
    }
    $conn->close();
}
?>