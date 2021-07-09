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

function editUser() {
    var cuId = getCookie("pId");
    // Make Ajax request
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            document.getElementById("nName").innerHTML = "";
            document.getElementById("nName").innerHTML += searchResults[0].nName;

            document.getElementById("sex").innerHTML = "";
            document.getElementById("sex").innerHTML += searchResults[0].sex;

            document.getElementById("mail").innerHTML = "";
            document.getElementById("mail").innerHTML += searchResults[0].mail;

            document.getElementById("introduce").innerHTML = "";
            document.getElementById("introduce").innerHTML += searchResults[0].introduce;
        }
    };
    xhttp.open("GET", "/webSubShare/server/controller.php?action=postProfile&cuId=" + cuId, true);
    xhttp.send();

}

function edit(number) {
    document.getElementById("notification").innerHTML = "";
    if (number == 1) {
        var textContent = document.getElementById("nName").textContent;
        var text = '<label for="basic-url">Sửa nick name</label> <div class="input-group mb-3"> <input type="text" class="form-control" id="content"  placeholder="' + textContent + '" aria-describedby="basic-addon3"> </div><button type="button" class="btn btn-success"  onclick="updateEdit(1)">Cập nhật</button>';
        document.getElementById("editOne").innerHTML = text;

    } else if (number == 2) {
        var textContent = document.getElementById("sex").textContent;
        var text = '<label for="basic-url">Sửa giới tính</label> <div class="input-group mb-3"> <input type="text" class="form-control" id="content"  placeholder="' + textContent + '"  aria-describedby="basic-addon3"> </div><button  type="button" class="btn btn-success" onclick="updateEdit(2)">Cập nhật</button>';
        document.getElementById("editOne").innerHTML = text;

    } else if (number == 3) {
        var textContent = document.getElementById("mail").textContent;
        var text = '<label for="basic-url">Sửa mail</label> <div class="input-group mb-3"> <input type="text" class="form-control" id="content"  placeholder="' + textContent + '"  aria-describedby="basic-addon3"> </div><button  type="button" class="btn btn-success" onclick="updateEdit(3)">Cập nhật</button>';
        document.getElementById("editOne").innerHTML = text;

    } else if (number == 4) {
        var textContent = document.getElementById("introduce").textContent;
        var text = '<label for="basic-url">Sửa giới thiệu</label> <div class="input-group mb-3"> <input type="text" class="form-control" id="content"  placeholder="' + textContent + '"  aria-describedby="basic-addon3"> </div><button  type="button" class="btn btn-success" onclick="updateEdit(4)">Cập nhập</button>';
        document.getElementById("editOne").innerHTML = text;
    }
}

function updateEdit(number) {
    var cuId = getCookie("pId");
    if (number == 1) {
        var content = document.getElementById("content").value;
        if (content == null || content == " " || content == "  " || content == "   " || content == "    " || content == "")
            alert("Không được để trống phần này!!!");
        else {
            var xhttp = new XMLHttpRequest();
            var url = "/webSubShare/server/controller.php?action=editUser&content=" + content + "&edit=nName&cuId=" + cuId;
            xhttp.open("GET", url, true);
            xhttp.send();
            notification();
            editUser();
            editUser();

            var urlWeb = getCookie("urlWeb");
            if (urlWeb == "/webSubShare/client/narbar/profile.html") {
                setCookie("nName", content, 10);
                location.reload();
            }


        }
    } else if (number == 2) {
        var content = document.getElementById("content").value;
        if (content == null || content == " " || content == "  " || content == "   " || content == "    " || content == "")
            alert("Không được để trống phần này!!!");
        else {
            var xhttp = new XMLHttpRequest();
            var url = "/webSubShare/server/controller.php?action=editUser&content=" + content + "&edit=sex&cuId=" + cuId;
            xhttp.open("GET", url, true);
            xhttp.send();
            notification();
            editUser();
            editUser();
        }


    } else if (number == 3) {
        var content = document.getElementById("content").value;
        if (content == null || content == " " || content == "  " || content == "   " || content == "    " || content == "")
            alert("Không được để trống phần này!!!");
        else {
            var xhttp = new XMLHttpRequest();
            var url = "/webSubShare/server/controller.php?action=editUser&content=" + content + "&edit=mail&cuId=" + cuId;
            xhttp.open("GET", url, true);
            xhttp.send();
            notification();
            editUser();
            editUser();
        }

    } else if (number == 4) {
        var content = document.getElementById("content").value;
        if (content == null || content == " " || content == "  " || content == "   " || content == "    " || content == "")
            alert("Không được để trống phần này!!!");
        else {
            var xhttp = new XMLHttpRequest();
            var url = "/webSubShare/server/controller.php?action=editUser&content=" + content + "&edit=introduce&cuId=" + cuId;
            xhttp.open("GET", url, true);
            xhttp.send();
            notification();
            editUser();
            editUser();
        }
    }
}

function notification() {
    var text = '<div class="card bg-success border-1 h-100 "> <div class="card-body p-0 p-lg-0 pt-3 pt-lg-3 "> <p><b>Cập nhật thành công</b></p> </div> </div>';
    document.getElementById("notification").innerHTML = text;
    document.getElementById("editOne").innerHTML = "";
}

function returnPre() {
    window.location = getCookie("urlWeb");
}