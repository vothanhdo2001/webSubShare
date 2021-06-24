
function table1() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var searchResults = JSON.parse(this.responseText);
        document.getElementById("table_1").innerHTML = "";
            for (var iResult in searchResults)
            {
                var text = "<tr><td class='text-center d-none d-xs-none'>" + searchResults[iResult].shId + "</td><td id='getLink' class='getLink' scope='row' onclick='getLinkShare()'>" + searchResults[iResult].pName + "</td><td>" + searchResults[iResult].tShare + "</td><td>" + searchResults[iResult].pLanguage+ "<td><button onclick='deleteShare()' class='btn btn-danger'><a class='m-0 text-center text-white' href='http://localhost:8888/webSubShare/sever/controller.php?action=deleteShare&shId="+ searchResults[iResult].shId+"'>Xoá</a></button></td><td><button onclick='editShare()' class='btn btn-success'><a class='m-0 text-center text-white' href='../narbar/editShare.html'>Cập nhật</a></button></td></tr>" ;
                document.getElementById("table_1").innerHTML += text;
            }
        }
    };
    xhttp.open("GET", "http://localhost:8888/webSubShare/sever/controller.php?action=LoadTable1", true);
    xhttp.send();
  }

function table2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
      var searchResults = JSON.parse(this.responseText);
      document.getElementById("table_2").innerHTML = "";
          for (var iResult in searchResults)
          {
              var text = "<tr><td class='text-center d-none d-xs-none'>" + searchResults[iResult].reId +"<td id='getLink' class='getLink' scope='row' onclick='getLinkShare()'>" + searchResults[iResult].pName + "</td><td>" + searchResults[iResult].tRequest + "</td><td>" + searchResults[iResult].pLanguage+ "<td><button onclick='deleteRequest()' class='btn btn-danger'><a class='m-0 text-center text-white' href='http://localhost:8888/webSubShare/sever/controller.php?action=deleteRequest&reId="+ searchResults[iResult].reId+"'>Xoá</button></td><td><button onclick='editRequest()' class='btn btn-success'><a class='m-0 text-center text-white' href='../narbar/editShare.html'>Cập nhật</a></button></td></tr>" ;
              document.getElementById("table_2").innerHTML += text;
          }
      }
  };
  xhttp.open("GET", "http://localhost:8888/webSubShare/sever/controller.php?action=LoadTable2", true);
  xhttp.send();
  }

function profile() {

}

onload = function home() {
    profile();
    table1();
    table2();
}