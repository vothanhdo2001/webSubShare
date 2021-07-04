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
  else if($action == "searchUser")
  {
    $keyword = $_GET["keyword"];
    searchUser($keyword);
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

else if($action == "unblockUser"){
  $post = new Customer();
  $post->cuId = $_GET["cuId"];
  $post->cuStatus = $_GET["cuStatus"];

  unblockUser($post);
}

else if($action == "blockUser"){
  $post = new Customer();
  $post->cuId = $_GET["cuId"];
  $post->cuStatus = $_GET["cuStatus"];

  blockUser($post);
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
else if($action == "searchTable1Share"){
  $keyword = $_GET["keyword"];
  searchTable1Share($keyword);
}
else if($action == "cSearchTable1Share"){
  $category = $_GET["category"];
  $time = $_GET["time"];
  $planguage = $_GET["planguage"];
  cSearchTable1Share($category,$time,$planguage);
}
else if($action == "searchTable1Request"){
  $keyword = $_GET["keyword"];
  searchTable1Request($keyword);
}
else if($action == "cSearchTable1Request"){
  $category = $_GET["category"];
  $time = $_GET["time"];
  $planguage = $_GET["planguage"];
  cSearchTable1Request($category,$time,$planguage);
}
elseif($action == "LoadTableRequest"){
  $reId = $_GET["reId"];
  LoadTableRequest($reId);
}
else if($action == "loadadmin")
{
  $cuId = $_GET["cuId"];
  loadadmin($cuId);
}
else if($action == "deleteAdmin")
{
  $cuId = $_GET["cuId"];
  deleteAdmin($cuId);
}
else if($action == "addAdmin")
{
  $cuId = $_GET["cuId"];
  addAdmin($cuId);
}
else if($action == "countShare")
{
  countShare();
}
else if($action == "countRequest")
{
  countRequest();
}
else if($action == "countUser")
{
  countUser();
}

else if ($action == "deleteUser")
{
  $cuId = $_GET["cuId"];
  deleteUser($cuId);
}
else if($action == "register")
{
  $post = new Customer();
  $post->nName= $_GET["nName"];
  //$post->cuId= $_GET["cuId"];
  $post->pass = $_GET["pass"];
  $post->mail = $_GET["mail"];
  $post->sex = $_GET["sex"];
  $post->introduce = $_GET["introduce"];
  createRegister($post);
}
else if ($action == "LoadTable1Request"){
  $reId = $_GET["reId"];
  LoadTable1Request($reId);
}

else if ($action == "loadPostShare"){
  $shId = $_GET["shId"];
  loadPostShare($shId);
}

else if ($action == "sendRate"){
  $shId = $_GET["shId"];
  $rate = $_GET["rate"];
  sendRate($shId,$rate);
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
  
  $sql = "SELECT CU.cuId, SH.shId, CU.nName, SH.pName, SH.tShare, SH.pLanguage  FROM customer as CU, share as SH WHERE  CU.cuId = SH.cuId AND SH.pPrivate = 'Công khai' ORDER BY SH.shId DESC;";
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
  
  $sql = "SELECT CU.cuId, RE.reId, CU.nName, RE.pName, RE.tRequest, RE.price, RE.pLanguage  FROM customer as CU, request as RE WHERE  CU.cuId = RE.cuId AND RE.pPrivate = 'Công khai'  ORDER BY RE.reId DESC;";

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
function searchTable1Share($keyword){
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
  FROM share INNER JOIN customer ON share.cuId = customer.cuId WHERE share.pName LIKE '%$keyword%' LIMIT 100;";
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
function cSearchTable1Share($category,$time,$planguage){
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
  FROM share INNER JOIN customer ON share.cuId = customer.cuId WHERE share.category = '$category' AND YEAR(share.tShare) = $time AND share.pLanguage = '$planguage';";
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
function searchTable1Request($keyword){
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
  FROM request INNER JOIN customer ON request.cuId = customer.cuId WHERE request.pName LIKE '%$keyword%' LIMIT 100;";
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
function cSearchTable1Request($category,$time,$planguage){
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
  FROM request INNER JOIN customer ON request.cuId = customer.cuId WHERE request.category = '$category' AND YEAR(request.tRequest) = $time AND request.pLanguage = '$planguage';";
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
function LoadTableRequest($reId){
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "subshare";
 
  $conn = new mysqli($servername, $username, $password, $dbname);
  $conn -> set_charset("utf8");
 
  if($conn ->connect_error){
      die("Connection failed: " . $conn->connect_error);
  }
  $sql = "SELECT reId, pName, tRequest, pLanguage, category, videolink, price, customer.nName, info, imagesLink FROM request INNER JOIN customer ON request.cuId = customer.cuId  WHERE reId = $reId";
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

function loadadmin($cuId)
{

  //test: action=loadadmin
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
  
  $sql = "SELECT cuId, nName, mail FROM customer WHERE cuRank = 'admin'";
  $result = $conn->query($sql);
  
  if ($result->num_rows > 0) {
      $data = $result->fetch_all(MYSQLI_ASSOC);
      //  var_dump($data);
      //  die();
      echo json_encode($data);
  } else {
      echo "{result:\"No result found\"}";
  }
  $conn->close();
}

function deleteAdmin($cuId)
{

  //link action=deleteAdmin&cuId=3
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "subshare";
    
    $conn = new mysqli($servername, $username, $password, $dbname);
    $conn -> set_charset("utf8");
    
    if($conn ->connect_error){
        die("Connection failed: " . $conn->connect_error);
    }
    $sql = "UPDATE customer SET cuRank = 'user' WHERE cuId = $cuId" ;

    if ($conn->query($sql) == TRUE) {
        echo "Deleted admin successfully";
        // echo($sql);
        // die();
    } 
    else {
        echo "Error deleting record:". $conn->error;
    }
    $conn->close();

}

function addAdmin($cuId)
{
  // action=addAdmin&cuId=3
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "subshare";
    
    $conn = new mysqli($servername, $username, $password, $dbname);
    $conn -> set_charset("utf8");
    
    if($conn ->connect_error){
        die("Connection failed: " . $conn->connect_error);
    }
    $sql = "UPDATE customer SET cuRank = 'admin' WHERE cuId = $cuId" ;
    // echo($sql);
    // die();

    if ($conn->query($sql) == TRUE) {
        echo "Add admin successfully";

    } 
    else {
        echo "Error deleting record:". $conn->error;
    }
    $conn->close();
}

function countShare()
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
  $sql = "SELECT COUNT(shId) AS countShare FROM share;";
  $result = $conn->query($sql);
  // echo($sql);
   //die();

   if ($result->num_rows > 0) {
    // Convert $result to json format
    $data = $result->fetch_all(MYSQLI_ASSOC);
    // var_dump($data);
    //  die();
    echo json_encode($data);}
    else {
      echo "fail". $conn->error;
    }
  $conn->close();
}

function countRequest()
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
  $sql = "SELECT COUNT(reId) AS countRequest FROM request;";
  $result = $conn->query($sql);
  // echo($sql);
   //die();

   if ($result->num_rows > 0) {
    // Convert $result to json format
    $data = $result->fetch_all(MYSQLI_ASSOC);
    // var_dump($data);
    //  die();
    echo json_encode($data);}
    else {
      echo "fail". $conn->error;
    }
  $conn->close();
}

function countUser()
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
  $sql = "SELECT COUNT(cuId) AS countUser FROM customer;";
  $result = $conn->query($sql);
  // echo($sql);
   //die();

   if ($result->num_rows > 0) {
    // Convert $result to json format
    $data = $result->fetch_all(MYSQLI_ASSOC);
    // var_dump($data);
    //  die();
    echo json_encode($data);}
    else {
      echo "fail". $conn->error;
    }
  $conn->close();
}

function searchUser($keyword){
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

  $sql = "SELECT cuId, nName, mail FROM customer WHERE nName LIKE '%$keyword%' LIMIT 100";

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

function deleteUser($cuId)
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

    $sql = "DELETE FROM comment WHERE cuId = $cuId";
    $result = $conn->query($sql);

    $sql = "DELETE FROM share WHERE cuId = $cuId";
    $result = $conn->query($sql);

    $sql = "DELETE FROM request WHERE cuId = $cuId";
    $result = $conn->query($sql);

    $sql = "DELETE FROM customer WHERE cuId = $cuId";
    $result = $conn->query($sql);

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

function unblockUser($post){
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "subshare";

  $conn = new mysqli($servername, $username, $password, $dbname);
  $conn -> set_charset("utf8");
 
  if($conn ->connect_error){
      die("Connection failed: " . $conn->connect_error);
  }
  
  $sql = "UPDATE customer SET cuStatus = 'enable'  WHERE cuId = $post->cuId";
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


function blockUser($post){
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "subshare";

  $conn = new mysqli($servername, $username, $password, $dbname);
  $conn -> set_charset("utf8");
 
  if($conn ->connect_error){
      die("Connection failed: " . $conn->connect_error);
  }
  
  $sql = "UPDATE customer SET cuStatus = 'disable'  WHERE cuId = $post->cuId";
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
function createRegister($post)
{
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
  $sql = "INSERT INTO customer(nName, sex, mail, pass, introduce) VALUES ('$post->nName','$post->sex','$post->mail','$post->pass','$post->introduce')";
  //$result = $conn->query($sql);
  // echo $sql;
  // die();
  //Response result to client / user
  if($conn->query($sql) == true){
     // echo "Add register successfully";
      echo '[{"cuId":"1"}]';
     // echo($sql);
     // die();
  } else {
     // echo "Error: " . $sql . "<br>" . $conn->error;
      echo '[{"cuId":"-1"}]';
  }

  //Close connection to database
  $conn -> close();

}
function LoadTable1Request($reId){
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "subshare";
 
  $conn = new mysqli($servername, $username, $password, $dbname);
  $conn -> set_charset("utf8");
 
  if($conn ->connect_error){
      die("Connection failed: " . $conn->connect_error);
  }
  $sql = "SELECT cu.nName, sh.tShare, sh.shId, cu.cuId FROM customer as cu, share as sh WHERE cu.cuId=sh.cuId and sh.reId= $reId";
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

function loadPostShare($shId){
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

  $sql = "SELECT SH.shId , SH.pName, SH.tShare, SH.pLanguage, SH.category, SH.videoLink, SH.imagesLink, SH.cuId, CU.cuId, CU.nName, SH.subLink, SH.rate FROM share as SH, customer as CU WHERE SH.cuId = CU.cuId and shID = $shId";
  $result = $conn->query($sql);
  //echo $sql;
  //die();

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

function sendRate($shId,$rate){
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

  $sql = "UPDATE share SET rate = rate + $rate WHERE shID = $shId;";
  $result = $conn->query($sql);
  //echo $sql;
  //die();

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
