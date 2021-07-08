//Hàm tạo cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//Hàm lấy cookie từ usename
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}


function table1() {
    var cuId = getCookie("cuId");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            table1 = this.responseText;
            document.getElementById("table_1").innerHTML = "";
            document.getElementById("noData_1").innerHTML = "";
            for (var iResult = 0; iResult < 10; iResult++) {
                var text = "<tr><td class='text-center d-none d-xs-none'>" + searchResults[iResult].shId + "</td><td  class='getLink' scope='row' onclick='getLinkShare(" + searchResults[iResult].shId + ")'>" + searchResults[iResult].pName + "</td><td>" + searchResults[iResult].tShare + "</td><td>" + searchResults[iResult].pLanguage + "<td><button onclick='deleteShare(" + searchResults[iResult].shId + ")' class='btn btn-danger'><a class='m-0 text-center text-white'>Xoá</a></button></td><td><button onclick='editPost(" + searchResults[iResult].shId + ", 1)' class='btn btn-success'>Sửa</button></td></tr>";
                document.getElementById("table_1").innerHTML += text;
            }
        }
    };
    xhttp.open("GET", "/webSubShare/server/controller.php?action=LoadTable1&cuId=" + cuId, true);
    xhttp.send();
    return 0;
}

function table2() {
    var cuId = getCookie("cuId");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            table2 = this.responseText;
            document.getElementById("table_2").innerHTML = "";
            document.getElementById("noData_2").innerHTML = "";
            for (var iResult = 0; iResult < 10; iResult++) {
                var text = "<tr><td class='text-center d-none d-xs-none'>" + searchResults[iResult].reId + "<td  class='getLink' scope='row' onclick='getLinkRequest(" + searchResults[iResult].reId + ")'>" + searchResults[iResult].pName + "</td><td>" + searchResults[iResult].tRequest + "</td><td>" + searchResults[iResult].pLanguage + "<td><button onclick='deleteRequest(" + searchResults[iResult].reId + ")' class='btn btn-danger'><a class='m-0 text-center text-white'>Xoá</button></td><td><button onclick='editPost(" + searchResults[iResult].reId + ", 2)' class='btn btn-success'>Sửa</button></td></tr>";
                document.getElementById("table_2").innerHTML += text;
            }
        }
    };
    xhttp.open("GET", "/webSubShare/server/controller.php?action=LoadTable2&cuId=" + cuId, true);
    xhttp.send();

}

function profile() {
    // Send Request to sever
    // Send Request to sever
    // var keyword = document.getElementById("txtKeyword").value;
    var cuId = getCookie("cuId");
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




function logOut() {
    setCookie("cuId", -1, 0);
    setCookie("nName", -1, 0);
    setCookie("cuRank", -1, 0);
    window.location = "/webSubShare/client/account/login.html";
}

function home() {
    profile();
    table1();
    table2();
}