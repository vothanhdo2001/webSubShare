<?php
 include "delete&edit.php";

//link test ?action=deleteShare&shId=4

$action = $_GET["action"];
// echo($action);
// die();
// 
if ($action == "deleteShare"){
  $RequestshId = $_GET["shId"];
  deleteShare($RequestshId);
}
elseif ($action == "deleteRequest"){
  $RequestreId = $_GET["reId"];
  deleteRequest($RequestreId);
}
else if($action == "searchTable1"){
    $keyword = $_GET["keyword"];
    searchTable1($keyword);
  }
  else if($action == "searchTable2"){
    $keyword = $_GET["keyword"];
    searchTable2($keyword);
  }
  else if($action == "cSearchTable1"){
    $category = $_GET["category"];
    $time = $_GET["time"];
    $planguage = $_GET["planguage"];
    cSearchTable1($category,$time,$planguage);
  }
  else if($action == "cSearchTable2"){
    $category = $_GET["category"];
    $time = $_GET["time"];
    $planguage = $_GET["planguage"];
    cSearchTable2($category,$time,$planguage);
  }

else if ($action == "createRequest"){

    $post = new Request();
    $post->pName= $_GET["pName"];
    $post->cuId= $_GET["cuId"];
    $post->pLanguage = $_GET["pLanguage"];
    $post->category = $_GET["category"];
    $post->imagesLink = $_GET["imagesLink"];
    $post->videoLink = $_GET["videoLink"];
    $post->price = $_GET["price"];
    $post->info = $_GET["info"];
    $post->pPrivate = $_GET["pPrivate"];

    createRequest($post);
}

else if ($action == "createShare"){

    $post = new Share();
    $post->pName= $_GET["pName"];
    $post->cuId= $_GET["cuId"];
    $post->pLanguage = $_GET["pLanguage"];
    $post->category = $_GET["category"];
    $post->imagesLink = $_GET["imagesLink"];
    $post->videoLink = $_GET["videoLink"];
    $post->subLink = $_GET["subLink"];
    $post->pPrivate = $_GET["pPrivate"];
    createShare($post);
}
elseif($action == "LoadTable1"){
  $cuId = $_GET["cuId"];
  LoadTable1($cuId);
}
elseif($action == "LoadTable2"){
  $cuId = $_GET["cuId"];
  LoadTable2($cuId);
}
else if($action == "editShare"){

  $post = new Share();
  $post->shId = $_GET["shId"];
  $post->pName= $_GET["pName"];
  $post->pLanguage = $_GET["pLanguage"];
  $post->category = $_GET["category"];
  $post->imagesLink = $_GET["imagesLink"];
  $post->videoLink = $_GET["videoLink"];
  $post->subLink = $_GET["subLink"];
  $post->pPrivate = $_GET["pPrivate"];

  editShare($post);
}
else if($action == "editRequest"){

  $post = new Request();
  $post->reId = $_GET["reId"];
  $post->pName= $_GET["pName"];
  $post->pLanguage = $_GET["pLanguage"];
  $post->category = $_GET["category"];
  $post->imagesLink = $_GET["imagesLink"];
  $post->videoLink = $_GET["videoLink"];
  $post->price = $_GET["price"];
  $post->info = $_GET["info"];
  $post->pPrivate = $_GET["pPrivate"];
  editRequest($post);
}

else if($action == "loadHomeTable1"){
  loadHomeTable1();
}

else if($action == "loadHomeTable2"){
  loadHomeTable2();
}

else if($action == "loadHomeTable3"){
  loadHomeTable3();
}

else if($action == "loadHomeTable4"){
  loadHomeTable4();
}

else if($action == "loadHomeTable5"){
  loadHomeTable5();

}

else if($action == "loadCategoryTable1"){
  loadCategoryTable1();
}

else if($action == "loadCategoryTable2"){
  loadCategoryTable2();
}

else if($action == "loadCategoryTable3"){
  loadCategoryTable3();
}

else if($action == "loadCategoryTable4"){
  loadCategoryTable4();
}
elseif($action == "loadShare"){
  loadShare();
}
elseif($action == "loadRequest"){
  loadRequest();
}
elseif($action == "loadShareMe"){
  $cuId = $_GET["cuId"];
  loadShareMe($cuId);
}
elseif($action == "loadRequestMe"){
  $cuId = $_GET["cuId"];
  loadRequestMe($cuId);
}
elseif($action == "loadProfile"){
  $cuId = $_GET["cuId"];
  loadProfile($cuId);
}
else if ($action == "login"){

  $post = new Request();
  $post->mail= $_GET["mail"];
  $post->pass = $_GET["pass"];
  login($post);
}else if($action == "loadUser"){
  loadUser();
}

function deleteShare($RequestshId)
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
    $sql = "DELETE FROM share WHERE shId = $RequestshId";
    // echo $sql;
    //die();
        
    if ($conn->query($sql) === TRUE) {
        echo "Record deleted successfully";
    } 
    else {
        echo "Error deleting record:". $conn->error;
    }
    $conn->close();
}
function deleteRequest($RequestreId)
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
    $sql = "DELETE FROM request WHERE reId = $RequestreId";
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
//search
function searchTable1($keyword){
    //Get data from database
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "subshare";
    //Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    $conn -> set_charset("utf8");

    //Check connection
    if($conn ->connect_error){
        die("Connection failed: " . $conn->connect_error);
    }
    $sql = "SELECT share.pName as pName, customer.nName as nName, share.pLanguage as pLanguage, share.tShare as tShare, customer.cuId, share.shId 
    FROM share INNER JOIN customer ON share.cuId = customer.cuId WHERE share.pPrivate = 'Công khai'  AND  share.pName LIKE '%$keyword%' LIMIT 100;";
    // echo $sql;
    // die();
    
    $result = $conn->query($sql);
    // var_dump ($result);
    // die();
    if ($result->num_rows > 0) {
        // Convert $result to json format
        $data = $result->fetch_all(MYSQLI_ASSOC);
        // var_dump($data);
        // die();
        echo json_encode($data);
      } else {
        echo "{result: \"No result found\"}";
      }
    $conn->close();
  }
  
function searchTable2($keyword){
    //Get data from database
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "subshare";
    //Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    $conn -> set_charset("utf8");

    //Check connection
    if($conn ->connect_error){
        die("Connection failed: " . $conn->connect_error);
    }
    $sql = "SELECT request.pName as pName, customer.nName as nName, request.pLanguage as pLanguage, request.tRequest as tRequest, request.price as price,  customer.cuId, request.reId
    FROM request INNER JOIN customer ON request.cuId = customer.cuId WHERE request.pPrivate = 'Công khai'  AND   request.pName LIKE '%$keyword%' LIMIT 100;";
    // echo $sql;
    // die();
    
    $result = $conn->query($sql);
    // var_dump ($result);
    // die();
    if ($result->num_rows > 0) {
        // Convert $result to json format
        $data = $result->fetch_all(MYSQLI_ASSOC);
        // var_dump($data);
        // die();
        echo json_encode($data);
      } else {
        echo "{result: \"No result found\"}";
      }
    $conn->close();
  }
  
function cSearchTable1($category,$time,$planguage){
  //Get data from database
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "subshare";
  //Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  $conn -> set_charset("utf8");

  //Check connection
  if($conn ->connect_error){
      die("Connection failed: " . $conn->connect_error);
  }
  $sql = "SELECT share.pName as pName, customer.nName as nName, share.pLanguage as pLanguage, share.tShare as tShare, customer.cuId, share.shId 
  FROM share INNER JOIN customer ON share.cuId = customer.cuId WHERE share.pPrivate = 'Công khai'  AND   share.category = '$category' AND YEAR(share.tShare) = $time AND share.pLanguage = '$planguage';";
  $result = $conn->query($sql);
  // var_dump ($result);
  // die();
  if ($result->num_rows > 0) {
      // Convert $result to json format
      $data = $result->fetch_all(MYSQLI_ASSOC);
      // var_dump($data);
      // die();
      echo json_encode($data);
    } else {
      echo "{result: \"No result found\"}";
    }
  $conn->close();
}

function cSearchTable2($category,$time,$planguage){
  //Get data from database
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "subshare";
  //Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  $conn -> set_charset("utf8");

  //Check connection
  if($conn ->connect_error){
      die("Connection failed: " . $conn->connect_error);
  }
  $sql = "SELECT request.pName as pName, customer.nName as nName, request.pLanguage as pLanguage, request.tRequest as tRequest, request.price as price,  customer.cuId, request.reId
  FROM request INNER JOIN customer ON request.cuId = customer.cuId WHERE request.pPrivate = 'Công khai'  AND   request.category = '$category' AND YEAR(request.tRequest) = $time AND request.pLanguage = '$planguage';";
  $result = $conn->query($sql);
  // var_dump ($result);
  // die();
  if ($result->num_rows > 0) {
      // Convert $result to json format
      $data = $result->fetch_all(MYSQLI_ASSOC);
      // var_dump($data);
      // die();
      echo json_encode($data);
    } else {
      echo "{result: \"No result found\"}";
    }
  $conn->close();
}

function createRequest($post){
    //Get data from database
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "subshare";

    //Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    $conn -> set_charset("utf8");

    //Check connection
    if($conn ->connect_error){
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO request(cuId, pName, pLanguage, category, imagesLink, videoLink, price, info, pPrivate)
    VALUES ($post->cuId,'$post->pName','$post->pLanguage','$post->category','$post->imagesLink','$post->videoLink',$post->price,'$post->info','$post->pPrivate')";
    // echo $sql;
    // die();

    //Response result to client / user
    if($conn->query($sql) === true){
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    //Close connection to database
    $conn -> close();
}

function createShare($post){
    //Get data from database
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "subshare";
    //Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    $conn -> set_charset("utf8");
    //Check connection
    if($conn ->connect_error){
        die("Connection failed: " . $conn->connect_error);}
    $sql = "INSERT INTO share(cuId, pName, pLanguage, category, imagesLink, videoLink, subLink, pPrivate) VALUES ($post->cuId,'$post->pName','$post->pLanguage','$post->category','$post->imagesLink','$post->videoLink','$post->subLink','$post->pPrivate')";
    // echo $sql;
    // die();
    //Response result to client / user
    if($conn->query($sql) === true){
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    //Close connection to database
    $conn -> close();
  }
function LoadTable1($cuId){
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "subshare";
 
  $conn = new mysqli($servername, $username, $password, $dbname);
  $conn -> set_charset("utf8");
 
  if($conn ->connect_error){
      die("Connection failed: " . $conn->connect_error);
  }
  $sql = "SELECT shId, pName, pLanguage, tShare FROM share WHERE cuId = $cuId";
  $result = $conn->query($sql);
 //   echo $sql;
 //  die();

  if ($result->num_rows > 0) {
   // Convert $result to json format
   $data = $result->fetch_all(MYSQLI_ASSOC);
   // var_dump($data);
   //  die();
   echo json_encode($data);
 } else {
   echo "{result: \"no data\"}";
 }
$conn->close();
}
function LoadTable2($cuId){
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "subshare";
 
  $conn = new mysqli($servername, $username, $password, $dbname);
  $conn -> set_charset("utf8");
 
  if($conn ->connect_error){
      die("Connection failed: " . $conn->connect_error);
  }
  $sql = "SELECT reId, pName, pLanguage, tRequest FROM request WHERE cuId = $cuId";
  $result = $conn->query($sql);
    // echo $sql;
    // die();

  if ($result->num_rows > 0) {
   // Convert $result to json format
   $data = $result->fetch_all(MYSQLI_ASSOC);
   // var_dump($data);
   //  die();
   echo json_encode($data);
 } else {
   echo "{result: \"no data\"}";
 }
$conn->close();
}

function editShare($post){

  //link test ?action=editShare&shId=72&pName=danghiraten&pLanguage=TiengTrung&category=Phim&imagesLink=https://cdn.tgdd.vn/Products/Images/42/235971/Slider/redmi-note-10-5g-thumbv-780x433-2.jpg&videoLink=https://cdn.tgdd.vn/Products/Images/42/235971/Slider/redmi-note-10-5g-thumbv-780x433-2.jpg&subLink=https://cdn.tgdd.vn/Products/Images/42/235971/Slider/redmi-note-10-5g-thumbv-780x433-2.jpg&pPrivate=CongKhai

  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "subshare";
 
  $conn = new mysqli($servername, $username, $password, $dbname);
  $conn -> set_charset("utf8");
 
  if($conn ->connect_error){
      die("Connection failed: " . $conn->connect_error);
  }
  $sql = "UPDATE share SET pName='$post->pName', pLanguage='$post->pLanguage',
  category='$post->category',imagesLink='$post->imagesLink',videoLink='$post->videoLink',
  subLink='$post->subLink', pPrivate='$post->pPrivate' WHERE shId=$post->shId";
  //  echo $sql;
  //  echo $strsql;
  //  die();
  if ($conn->query($sql) === TRUE) {
      echo "Record updated successfully";
  } else {
      echo "Error: ".$sql. "<br>" . $conn->error;
  }

  $conn->close();
}

function editRequest($post){

  //link test ?action=editRequest&reId=40&pName=danghiraten&pLanguage=TiengTrung&category=Phim&imagesLink=https://cdn.tgdd.vn/Products/Images/42/235971/Slider/redmi-note-10-5g-thumbv-780x433-2.jpg&videoLink=https://cdn.tgdd.vn/Products/Images/42/235971/Slider/redmi-note-10-5g-thumbv-780x433-2.jpg&price=25000&info=nhocnho@gmail.com&pPrivate=CongKhai

  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "subshare";
 
  $conn = new mysqli($servername, $username, $password, $dbname);
  $conn -> set_charset("utf8");
 
  if($conn ->connect_error){
      die("Connection failed: " . $conn->connect_error);
  }

  $sql = "UPDATE request SET pName='$post->pName', pLanguage='$post->pLanguage',
  category='$post->category',imagesLink='$post->imagesLink',videoLink='$post->videoLink',
  price=$post->price,info='$post->info', pPrivate='$post->pPrivate' WHERE reId=$post->reId";
  if ($conn->query($sql) === TRUE) {
      echo "Record updated successfully";
  } else {
      echo "Error: ".$sql. "<br>" . $conn->error;
  }

  $conn->close();
}


function loadHomeTable1(){
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "subshare";
  
  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  $conn -> set_charset("utf8");
  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  
  $sql = "SELECT CU.cuId, SH.shId, CU.nName, SH.pName, SH.tShare, SH.planguage  FROM customer as CU, share as SH WHERE  CU.cuId = SH.cuId AND SH.pPrivate = 'Công khai' ORDER BY SH.shId DESC;";
  $result = $conn->query($sql);
  
  if ($result->num_rows > 0) {
      $data = $result->fetch_all(MYSQLI_ASSOC);
      // var_dump($data);
      // die();
      echo json_encode($data);
  } else {
      echo "{result:\"No result found\"}";
  }
  $conn->close();
}


function loadHomeTable2(){
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "subshare";
  
  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  $conn -> set_charset("utf8");
  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  
  $sql = "SELECT CU.cuId, RE.reId, CU.nName, RE.pName, RE.tRequest, RE.price, RE.planguage  FROM customer as CU, request as RE WHERE  CU.cuId = RE.cuId AND RE.pPrivate = 'Công khai'  ORDER BY RE.reId DESC;";

  $result = $conn->query($sql);
  
  if ($result->num_rows > 0) {
      $data = $result->fetch_all(MYSQLI_ASSOC);
      // var_dump($data);
      // die();
      echo json_encode($data);
  } else {
      echo "{result:\"No result found\"}";
  }
  $conn->close();
}


function loadHomeTable3(){
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "subshare";
  
  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  $conn -> set_charset("utf8");
  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  
  $sql = "SELECT CU.cuId, CU.nName, SUM(SH.rate) as sumRate FROM customer as CU, share as SH WHERE CU.cuId = SH.cuId  AND SH.pPrivate = 'Công khai'  GROUP BY CU.cuId ORDER BY SH.rate DESC LIMIT 5;";
  // echo($sql);
  // die();
  $result = $conn->query($sql);
  
  if ($result->num_rows > 0) {
      $data = $result->fetch_all(MYSQLI_ASSOC);
      // var_dump($data);
      // die();
      echo json_encode($data);
  } else {
      echo "{result:\"No result found\"}";
  }
  $conn->close();
}


function loadHomeTable4(){
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "subshare";
  
  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  $conn -> set_charset("utf8");
  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  
  $sql = "SELECT CU1.cuId, SH1.shId, CU1.nName, SH1.pName, SH1.rate FROM share as SH1, customer as CU1 WHERE CU1.cuId = SH1.cuId AND SH1.pPrivate = 'Công khai'  AND SH1.rate >= (SELECT SH.rate FROM share as SH ORDER BY SH.rate DESC LIMIT 1 OFFSET 4) ORDER BY SH1.rate DESC;";

  $result = $conn->query($sql);
  
  if ($result->num_rows > 0) {
      $data = $result->fetch_all(MYSQLI_ASSOC);
      // var_dump($data);
      // die();
      echo json_encode($data);
  } else {
      echo "{result:\"No result found\"}";
  }
  $conn->close();
}


function loadHomeTable5(){
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "subshare";
  
  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  $conn -> set_charset("utf8");
  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  
  $sql = "SELECT CU.cuId, CU.nName , COUNT(SH.shId) as postShare FROM share as SH, customer as CU WHERE SH.cuId = CU.cuId AND SH.pPrivate = 'Công khai'  GROUP BY CU.cuId ORDER BY postShare DESC LIMIT 5;";
  $result = $conn->query($sql);
  
  if ($result->num_rows > 0) {
      $data = $result->fetch_all(MYSQLI_ASSOC);
      // var_dump($data);
      // die();
      echo json_encode($data);
  } else {
      echo "{result:\"No result found\"}";
  }
  $conn->close();
}



function loadCategoryTable1(){
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "subshare";
  
  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  $conn -> set_charset("utf8");
  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  
  $sql = "SELECT share.pName as pName, customer.nName as nName, share.tShare as tShare, share.pLanguage as pLanguage, customer.cuId, share.shId FROM share, customer WHERE share.category ='Phim' AND share.pPrivate = 'Công khai' ; ";
  
  $result = $conn->query($sql);
  
  if ($result->num_rows > 0) {
      $data = $result->fetch_all(MYSQLI_ASSOC);
      // var_dump($data);
      // die();
      echo json_encode($data);
  } else {
      echo "{result:\"No result found\"}";
  }
  $conn->close();
}


function loadCategoryTable2(){
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "subshare";
  
  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  $conn -> set_charset("utf8");
  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  
  $sql = "SELECT share.pName as pName, customer.nName as nName, share.tShare as tShare, share.pLanguage as pLanguage, customer.cuId, share.shId FROM share, customer WHERE share.category ='Clip ngắn' AND share.pPrivate = 'Công khai' ; ";

  $result = $conn->query($sql);
  
  if ($result->num_rows > 0) {
      $data = $result->fetch_all(MYSQLI_ASSOC);
      // var_dump($data);
      // die();
      echo json_encode($data);
  } else {
      echo "{result:\"No result found\"}";
  }
  $conn->close();
}


function loadCategoryTable3(){
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "subshare";
  
  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  $conn -> set_charset("utf8");
  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  
  $sql = "SELECT share.pName as pName, customer.nName as nName, share.tShare as tShare, share.pLanguage as pLanguage, customer.cuId, share.shId FROM share, customer WHERE share.category ='Game show' AND share.pPrivate = 'Công khai' ; ";

  $result = $conn->query($sql);
  
  if ($result->num_rows > 0) {
      $data = $result->fetch_all(MYSQLI_ASSOC);
      // var_dump($data);
      // die();
      echo json_encode($data);
  } else {
      echo "{result:\"No result found\"}";
  }
  $conn->close();
}


function loadCategoryTable4(){
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "subshare";
  
  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  $conn -> set_charset("utf8");
  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  
  $sql = "SELECT share.pName as pName, customer.nName as nName, share.tShare as tShare, share.pLanguage as pLanguage, customer.cuId, share.shId FROM share, customer WHERE share.category ='Khác' AND share.pPrivate = 'Công khai' ; ";

  $result = $conn->query($sql);
  
  if ($result->num_rows > 0) {
      $data = $result->fetch_all(MYSQLI_ASSOC);
      // var_dump($data);
      // die();
      echo json_encode($data);
  } else {
      echo "{result:\"No result found\"}";
  }
  $conn->close();
}
function loadShare(){
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "subshare";
 
  $conn = new mysqli($servername, $username, $password, $dbname);
  $conn -> set_charset("utf8");
 
  if($conn ->connect_error){
      die("Connection failed: " . $conn->connect_error);
  }
  
  $sql = "SELECT SH.cuId, SH.shId , CU.cuId, SH.pName, CU.nName, SH.category, SH.tShare, SH.pLanguage FROM share as SH, customer as CU WHERE SH.cuId = CU.cuId AND SH.pPrivate = 'Công khai' ";
  $result = $conn->query($sql);
 //   echo $sql;
 //  die();

  if ($result->num_rows > 0) {
   // Convert $result to json format
   $data = $result->fetch_all(MYSQLI_ASSOC);
   // var_dump($data);
   //  die();
   echo json_encode($data);
 } else {
   echo "{result: \"no data\"}";
 }
$conn->close();
}
function loadRequest(){
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "subshare";
 
  $conn = new mysqli($servername, $username, $password, $dbname);
  $conn -> set_charset("utf8");
 
  if($conn ->connect_error){
      die("Connection failed: " . $conn->connect_error);
  }

  $sql = "SELECT RE.cuId, RE.reId , CU.cuId, RE.pName, CU.nName, RE.category, RE.tRequest, RE.pLanguage, RE.price FROM request as RE, customer as CU WHERE RE.cuId = CU.cuId AND RE.pPrivate = 'Công khai' ";
  $result = $conn->query($sql);
    // echo $sql;
    // die();

  if ($result->num_rows > 0) {
   // Convert $result to json format
   $data = $result->fetch_all(MYSQLI_ASSOC);
   // var_dump($data);
   //  die();
   echo json_encode($data);
 } else {
   echo "{result: \"no data\"}";
 }
$conn->close();
}
function loadShareMe($cuId){
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "subshare";
 
  $conn = new mysqli($servername, $username, $password, $dbname);
  $conn -> set_charset("utf8");
 
  if($conn ->connect_error){
      die("Connection failed: " . $conn->connect_error);
  }
  $sql = "SELECT SH.cuId, SH.shId , CU.cuId, SH.pName, CU.nName, SH.category, SH.tShare, SH.pLanguage FROM share as SH, customer as CU WHERE SH.cuId = CU.cuId and CU.cuID = $cuId";
  $result = $conn->query($sql);
 //   echo $sql;
 //  die();

  if ($result->num_rows > 0) {
   // Convert $result to json format
   $data = $result->fetch_all(MYSQLI_ASSOC);
   // var_dump($data);
   //  die();
   echo json_encode($data);
 } else {
   echo "{result: \"no data\"}";
 }
  $conn->close();
}
function loadRequestMe($cuId){
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "subshare";
 
  $conn = new mysqli($servername, $username, $password, $dbname);
  $conn -> set_charset("utf8");
 
  if($conn ->connect_error){
      die("Connection failed: " . $conn->connect_error);
  }
  
  $sql = "SELECT RE.cuId, RE.reId , CU.cuId, RE.pName, CU.nName, RE.category, RE.tRequest, RE.pLanguage, RE.price FROM request as RE, customer as CU WHERE RE.cuId = CU.cuId and  CU.cuID = $cuId";
  $result = $conn->query($sql);
    // echo $sql;
    // die();

  if ($result->num_rows > 0) {
   // Convert $result to json format
   $data = $result->fetch_all(MYSQLI_ASSOC);
   // var_dump($data);
   //  die();
   echo json_encode($data);
 } else {
   echo "{result: \"no data\"}";
 }
$conn->close();
}
function loadProfile($cuId){
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "subshare";
 
  $conn = new mysqli($servername, $username, $password, $dbname);
  $conn -> set_charset("utf8");
 
  if($conn ->connect_error){
      die("Connection failed: " . $conn->connect_error);
  }
  
  $sql = "SELECT cuId, nName, tRegister, sex, mail, introduce FROM customer WHERE cuId = $cuId";
  $result = $conn->query($sql);
    // echo $sql;
    // die();

  if ($result->num_rows > 0) {
   // Convert $result to json format
   $data = $result->fetch_all(MYSQLI_ASSOC);
   // var_dump($data);
   //  die();
   echo json_encode($data);
 } else {
   echo "{result: \"no data\"}";
 }      
  $conn->close();
}

function login($post){
  //Get data from database
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "subshare";

  //Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  $conn -> set_charset("utf8");

  //Check connection
  if($conn ->connect_error){
      die("Connection failed: " . $conn->connect_error);
  }

  $sql = "SELECT cuId, nName, cuRank, cuStatus FROM `customer` WHERE mail = '$post->mail' and pass = '$post->pass';";
  $result = $conn->query($sql);
  // echo $sql;
  // die();

  //Response result to client / user
  if ($result->num_rows > 0) {
    // Convert $result to json format
    $data = $result->fetch_all(MYSQLI_ASSOC);
    // var_dump($data);
    //  die();
    echo json_encode($data);
  } else {
    echo '[{"cuId":"-1"}]';
  }   

  //Close connection to database
  $conn -> close();
}
function loadUser(){
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "subshare";
 
  $conn = new mysqli($servername, $username, $password, $dbname);
  $conn -> set_charset("utf8");
 
  if($conn ->connect_error){
      die("Connection failed: " . $conn->connect_error);
  }
  $sql = "SELECT cuId, nName, mail, cuStatus FROM customer";
  $result = $conn->query($sql);
  //  echo $sql;
  // die();

  if ($result->num_rows > 0) {
   // Convert $result to json format
   $data = $result->fetch_all(MYSQLI_ASSOC);
   // var_dump($data);
   //  die();
   echo json_encode($data);
 } else {
   echo "{result: \"no data\"}";
 }
$conn->close();
}
?>