function table1() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            document.getElementById("table_1").innerHTML = "";
            for (var iResult in searchResults) {
                document.cookie = searchResults[iResult].shId;
                var text = "<tr><td class='text-center d-none d-xs-none'>" + searchResults[iResult].shId + "</td><td id='getLink' class='getLink' scope='row' onclick='getLinkShare()'>" + searchResults[iResult].pName + "</td><td>" + searchResults[iResult].tShare + "</td><td>" + searchResults[iResult].pLanguage + "<td><button onclick='deleteShare(" + searchResults[iResult].shId + ")' class='btn btn-danger'><a class='m-0 text-center text-white'>Xoá</a></button></td><td><button onclick='editShare(" + searchResults[iResult].shId + ")' class='btn btn-success'><a class='m-0 text-center text-white' href='../narbar/editShare.html'>Cập nhật</a></button></td></tr>";
                document.getElementById("table_1").innerHTML += text;
            }
        }
    };
    xhttp.open("GET", "/webSubShare/server/controller.php?action=LoadTable1", true);
    xhttp.send();
    return 0;
}

function table2() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            document.getElementById("table_2").innerHTML = "";
            for (var iResult in searchResults) {
                var text = "<tr><td class='text-center d-none d-xs-none'>" + searchResults[iResult].reId + "<td id='getLink' class='getLink' scope='row' onclick='getLinkShare()'>" + searchResults[iResult].pName + "</td><td>" + searchResults[iResult].tRequest + "</td><td>" + searchResults[iResult].pLanguage + "<td><button onclick='deleteRequest(" + searchResults[iResult].reId + ")' class='btn btn-danger'><a class='m-0 text-center text-white'>Xoá</button></td><td><button onclick='editRequest(" + searchResults[iResult].reId + ")' class='btn btn-success'><a class='m-0 text-center text-white' href='../narbar/editRequest.html'>Cập nhật</a></button></td></tr>";
                document.getElementById("table_2").innerHTML += text;
            }
        }
    };
    xhttp.open("GET", "/webSubShare/server/controller.php?action=LoadTable2", true);
    xhttp.send();

}

function profile() {
    // Send Request to sever
    // Send Request to sever
    // var keyword = document.getElementById("txtKeyword").value;
    var cuId = 8;
    // Make Ajax request
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            document.getElementById("nName").innerHTML = "";
            document.getElementById("nName").innerHTML += searchResults[0].nName;

            document.getElementById("cuId").innerHTML = "";
            document.getElementById("cuId").innerHTML += searchResults[0].cuId;

            document.getElementById("tRegister").innerHTML = "";
            document.getElementById("tRegister").innerHTML += searchResults[0].tRegister;

            document.getElementById("sex").innerHTML = "";
            document.getElementById("sex").innerHTML += searchResults[0].sex;

            document.getElementById("mail").innerHTML = "";
            document.getElementById("mail").innerHTML += searchResults[0].mail;

            document.getElementById("introduce").innerHTML = "";
            document.getElementById("introduce").innerHTML += searchResults[0].introduce;
        }
    };
    xhttp.open("GET", "/webSubShare/server/controller.php?action=loadProfile&cuId=" + cuId, true);
    xhttp.send();

}

onload = function home() {
    profile();
    table1();
    table2();
}