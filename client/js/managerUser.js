function controlButton(cuStatus, cuId) {
    var text;
    if (cuStatus == "enable")
        text = '<td><button onclick="blockMember(' + cuId + ')" class="btn btn-warning text-white">Chặn</button></td></tr>';
    else
        text = '<td><button onclick="unlockMember(' + cuId + ')" class="btn btn-success text-white">Bỏ chặn</button></td></tr>'
    return text;

}

function home() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            document.getElementById("table_1").innerHTML = "";
            for (var iResult in searchResults) {
                var text = '<tr> <td>' + searchResults[iResult].cuId + '</td> <td class="getLink" onclick="getLinkProfile()">kimvinh</td> <td>' + searchResults[iResult].mail + '</td> <td><button onclick="deleteMember(' + +searchResults[iResult].cuId + ')" class="btn btn-danger">Xoá</button></td> <td><button onclick="editMember(' + searchResults[iResult].cuId + ')" class="btn btn-success">Sửa</button></td>';
                text += controlButton(searchResults[iResult].cuStatus, searchResults[iResult].cuId)
                document.getElementById("table_1").innerHTML += text;
            }
        }
    };
    xhttp.open("GET", "/webSubShare/server/controller.php?action=loadUser", true);
    xhttp.send();
    return 0;
}

function searchUser() {
    //TODO: tìm kiếm người dùng thông qua tên
}

function deleteUser(cuId) {
    //TODO: Xoá một người dùng khỏi hệ thống
}

function editUser(cuId) {
    //TODO: Chỉnh sửa thông tin cá nhân của người dùng
}

function unlockMember(cuId) {
    //TODO: bỏ chặn truy cập từ người dùng
}

function blockMember(cuId) {
    //TODO: chặn truy cập từ người dùng
}