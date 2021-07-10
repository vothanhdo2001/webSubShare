function controlButton(cuStatus, cuId) {
    var text;
    if (cuStatus == "enable")
        text = '<td><button onclick="blockUser(' + cuId + ')" class="btn btn-warning text-white">Chặn</button></td></tr>';
    else
        text = '<td><button onclick="unblockUser(' + cuId + ')" class="btn btn-success text-white">Bỏ chặn</button></td></tr>'
    return text;

}

function home() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            table1 = this.responseText;
            document.getElementById("table_1").innerHTML = "";
            for (let iResult = 0; iResult < 10; iResult++) {
                var text = '<tr> <td>' + searchResults[iResult].cuId + '</td> <td class="getLink" onclick="getLinkProfile(' + searchResults[iResult].cuId + ')">' + searchResults[iResult].nName + '</td> <td>' + searchResults[iResult].mail + '</td> <td><button onclick="deleteUser(' + +searchResults[iResult].cuId + ')" class="btn btn-danger">Xoá</button></td> <td><button onclick="editUser(' + searchResults[iResult].cuId + ')" class="btn btn-success">Sửa</button></td>';
                text += controlButton(searchResults[iResult].cuStatus, searchResults[iResult].cuId);
                document.getElementById("table_1").innerHTML += text;
            }
        }
    };
    xhttp.open("GET", "/webSubShare/server/controller.php?action=loadUser", true);
    xhttp.send();
    return 0;
}

function searchUser() {
    // Send Request to sever
    var keyword = document.getElementById("nName").value;
    // Make Ajax request
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            table1 = this.responseText;
            document.getElementById("table_1").innerHTML = "";
            // document.getElementById("noData_1").innerHTML = "";
            for (let iResult = 0; iResult < 10; iResult++) {
                var text = '<tr> <td>' + searchResults[iResult].cuId + '</td> <td class="getLink" onclick="getLinkProfile(' + searchResults[iResult].cuId + ')">' + searchResults[iResult].nName + '</td> <td>' + searchResults[iResult].mail + '</td> <td><button onclick="deleteUser(' + +searchResults[iResult].cuId + ')" class="btn btn-danger">Xoá</button></td> <td><button onclick="editUser(' + searchResults[iResult].cuId + ')" class="btn btn-success">Sửa</button></td>';
                text += controlButton(searchResults[iResult].cuStatus, searchResults[iResult].cuId);
                document.getElementById("table_1").innerHTML += text;
            }
        }
    };
    xhttp.open("GET", "/webSubShare/server/controller.php?action=searchUser&keyword=" + keyword, true);
    xhttp.send();



}

function deleteUser(cuId) {
    var xhttp = new XMLHttpRequest();
    var url = "/webSubShare/server/controller.php?action=deleteUser&cuId=" + cuId;
    xhttp.open("GET", url, true);
    xhttp.send();
    // alert ("success");
    location.reload();

}

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



function unblockUser(cuId) {
    // Send Request to sever
    // Make Ajax request
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/webSubShare/server/controller.php?action=unblockUser&cuId=" + cuId, true);
    xhttp.send();
    location.reload();

}

function blockUser(cuId) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/webSubShare/server/controller.php?action=blockUser&cuId=" + cuId, true);
    xhttp.send();
    location.reload();

}