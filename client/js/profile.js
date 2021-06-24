
function table1() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var searchResults = JSON.parse(this.responseText);
        document.getElementById("table_1").innerHTML = "";
            for (var iResult in searchResults)
            {
                var text = "<tr><td id='getLink' class='getLink' scope='row' onclick='getLinkShare()'>" + searchResults[iResult].pName + "</td><td>" + searchResults[iResult].tShare + "</td><td>" + searchResults[iResult].pLanguage+ "<td><button onclick='deleteShare()' class='btn btn-danger'>Xoá</button></td><td><button onclick='editShare()' class='btn btn-success'><a class='m-0 text-center text-white' href='../narbar/editShare.html'>Cập nhật</a></button></td>" ;
                document.getElementById("table_1").innerHTML += text;
            }
        }
    };
    xhttp.open("GET", "http://localhost:8888/webSubShare/sever/controller.php?action=LoadShareTable1", true);
    xhttp.send();
  }

function table2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
      var searchResults = JSON.parse(this.responseText);
      document.getElementById("table_1").innerHTML = "";
          for (var iResult in searchResults)
          {
              var text = "<tr><td id='getLink' class='getLink' scope='row' onclick='getLinkShare()'>" + searchResults[iResult].pName + "</td><td>" + searchResults[iResult].tShare + "</td><td>" + searchResults[iResult].pLanguage+ "<td><button onclick='deleteShare()' class='btn btn-danger'>Xoá</button></td><td><button onclick='editShare()' class='btn btn-success'><a class='m-0 text-center text-white' href='../narbar/editShare.html'>Cập nhật</a></button></td>" ;
              document.getElementById("table_1").innerHTML += text;
          }
      }
  };
  xhttp.open("GET", "http://localhost:8888/webSubShare/sever/controller.php?action=LoadShareTable1", true);
  xhttp.send();
  }

function profile() {

}

onload = function home() {
    profile();
    table1();
    table2();
}