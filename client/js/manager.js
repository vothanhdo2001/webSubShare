function addAdmin() {

    var cuId = document.getElementById("cuId").value;
    var xhttp = new XMLHttpRequest();
    var url = "/webSubShare/server/controller.php?action=addAdmin&cuId=" + cuId;
    xhttp.open("GET", url, true);
    xhttp.send();
    location.reload();
}

function deleteAdmin(cuId) {

    var xhttp = new XMLHttpRequest();
    var url = "/webSubShare/server/controller.php?action=deleteAdmin&cuId=" + cuId;
    xhttp.open("GET", url, true);
    xhttp.send();
    location.reload();
}

function table1() {
    // var cuId = getCookie("cuId");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            document.getElementById("table_1").innerHTML = "";
            for (var iResult = 0; iResult < 10; iResult++) {
                var text = "<tr><td>" + searchResults[iResult].cuId + "</td><td>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].mail + "<td><button onclick='deleteAdmin(" + searchResults[iResult].cuId + ")' class='btn btn-danger'><a class='m-0 text-center text-white'>Xoá</a></button></td></tr>";
                document.getElementById("table_1").innerHTML += text;
            }
        }
    };
    xhttp.open("GET", "/webSubShare/server/controller.php?action=loadadmin&cuId=", true);
    xhttp.send();
    return 0;
}

function home() {
   table1();
    countShare();
    countRequest();
    countUser();
}


function countShare()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            document.getElementById("countShare").innerHTML = searchResults[0].countShare;
        }
    };
    xhttp.open("GET", "/webSubShare/server/controller.php?action=countShare" , true);

    xhttp.send();
    return 0;
}

function countRequest()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            document.getElementById("countRequest").innerHTML = searchResults[0].countRequest;
        }
    };
    xhttp.open("GET", "/webSubShare/server/controller.php?action=countRequest" , true);
    xhttp.send();
    return 0;
}

function countUser()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            document.getElementById("countUser").innerHTML = searchResults[0].countUser;
        }
    };
    xhttp.open("GET", "/webSubShare/server/controller.php?action=countUser" , true);
    xhttp.send();
    return 0;
}