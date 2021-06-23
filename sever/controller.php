<?php
 include "delete&edit.php";

//link test ?action=deleteShare&shId=4

$action = $_GET["action"];
// echo($action);
// die();

if ($action == "deleteShare"){
  $delete_editshId = $_GET["shId"];
  deleteShare($delete_editshId);
}

function deleteShare($delete_editshId)
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
    $sql = "DELETE FROM share WHERE shId = $delete_editshId";
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