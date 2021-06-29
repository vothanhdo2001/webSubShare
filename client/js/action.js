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

function getLinkProfile(cuID) {
    setCookie("pId", cuID, 1);
    window.location = "/webSubShare/client/post/postProfile.html";
}

function getLinkShare(shId) {
    setCookie("shId", shId, 1);
    window.location = "/webSubShare/client/post/postShare.html";
}

function getLinkRequest(reId) {
    setCookie("reId", reId, 1);
    window.location = "/webSubShare/client/post/postRequest.html";
}




function deleteShare(shId) {

    var xhttp = new XMLHttpRequest();
    var url = "/webSubShare/server/controller.php?action=deleteShare&shId=" + shId;
    xhttp.open("GET", url, true);
    xhttp.send();
    location.reload();
}

function editShare() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("txtStatus").innerHTML = this.responseText;
        }
    };

    var shId = getCookie("id");
    var pName = document.getElementById("pName").value;
    var pLanguage = document.getElementById("pLanguage").value;
    var category = document.getElementById("category").value;
    var imagesLink = document.getElementById("imagesLink").value;
    var videoLink = document.getElementById("videoLink").value;
    var pPrivate = document.getElementById("pPrivate").value;
    var subLink = document.getElementById("subLink").value;
    var url = "/webSubShare/server/controller.php?action=editShare&shId=" + shId +
        "&pName=" + pName + "&pLanguage=" + pLanguage + "&category=" + category + "&imagesLink=" +
        imagesLink + "&videoLink=" + videoLink + "&subLink=" + subLink + "&pPrivate=" + pPrivate;
    xhttp.open("GET", url, true);
    xhttp.send();
    alert("Cập nhập thành công !");
    setCookie("id", id, 0);
    window.location = "/webSubShare/client/narbar/profile.html";
}

function deleteRequest(reId) {
    var xhttp = new XMLHttpRequest();
    var url = "/webSubShare/server/controller.php?action=deleteRequest&reId=" + reId;
    xhttp.open("GET", url, true);
    xhttp.send();
    location.reload();
}

function editRequest() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("txtStatus").innerHTML = this.responseText;
        }
    };

    var reId = getCookie("id");
    var pName = document.getElementById("pName").value;
    var pLanguage = document.getElementById("pLanguage").value;
    var category = document.getElementById("category").value;
    var imagesLink = document.getElementById("imagesLink").value;
    var videoLink = document.getElementById("videoLink").value;
    var pPrivate = document.getElementById("pPrivate").value;
    var price = document.getElementById("price").value;
    var info = document.getElementById("info").value;

    var url = "/webSubShare/server/controller.php?action=editRequest&reId=" + reId +
        "&pName=" + pName + "&pLanguage=" + pLanguage + "&category=" + category + "&imagesLink=" +
        imagesLink + "&videoLink=" + videoLink + "&price=" + price + "&info=" + info + "&pPrivate=" + pPrivate;
    xhttp.open("GET", url, true);
    xhttp.send();
    alert("Cập nhập thành công !");
    setCookie("id", id, 0);
    window.location = "/webSubShare/client/narbar/profile.html";
}

function account() {
    if (getCookie("cuId") == null || getCookie("cuId") < 0) {
        document.getElementById("status").innerHTML += '<a class="nav-link" href="/webSubShare/client/account/login.html"><b>Đăng nhập / Đăng ký<b></b></a>';
    } else {
        var urlWeb = window.location.pathname;
        if (urlWeb == "/webSubShare/client/narbar/profile.html")
            document.getElementById("status").innerHTML += '<a class="nav-link active" href="/webSubShare/client/narbar/profile.html"><b><i class="bi bi-person-circle"></i>&nbsp;' + getCookie("nName") + '</b></a>';
        else
            document.getElementById("status").innerHTML += '<a class="nav-link" href="/webSubShare/client/narbar/profile.html"><b><i class="bi bi-person-circle"></i>&nbsp;' + getCookie("nName") + '</b></a>';
    }

    if (getCookie("cuId") != null && getCookie("cuId") >= 0) {
        if (getCookie("cuRank") == "admin") {
            var urlWeb = window.location.pathname;
            if (urlWeb == "/webSubShare/client/admin/manager.html")
                document.getElementById("admin").innerHTML += '<a class="nav-link active" href="/webSubShare/client/admin/manager.html"><b>Admin<b></b></a>'
            else
                document.getElementById("admin").innerHTML += '<a class="nav-link" href="/webSubShare/client/admin/manager.html"><b>Admin<b></b></a>'
        }
    }
}

function viewNarbar() {
    var urlWeb = window.location.pathname;

    if (urlWeb == "/webSubShare/client/home.html") {
        document.getElementById("viewNarbar").innerHTML += '<li class="nav-item"><a class="nav-link active" aria-current="page" href="home.html"><b>Trang chủ</b></a></li> <li class="nav-item"><a class="nav-link" href="../client/narbar/search.html"><b>Tìm kiếm</b></a></li> <li class="nav-item"><a class="nav-link" href="../client/narbar/category.html"><b>Danh mục</b></a></li> <li class="nav-item"><a class="nav-link" href="../client/narbar/createShares.html"><b>Chia sẻ</b></a></li> <li class="nav-item"><a class="nav-link" href="../client/narbar/createRequest.html"><b>Yêu cầu</b></a></li> <li id="admin" class="nav-item"></li> <li id="status" class="nav-item"></li>';
    } else if (urlWeb == "/webSubShare/client/narbar/search.html") {
        document.getElementById("viewNarbar").innerHTML += '<li class="nav-item"><a class="nav-link " aria-current="page" href="/webSubShare/client/home.html"><b>Trang chủ</b></a></li> <li class="nav-item "><a class="nav-link active" href="/webSubShare/client/narbar/search.html"><b>Tìm kiếm</b></a></li> <li class="nav-item"><a class="nav-link" href="/webSubShare/client/narbar/category.html"><b>Danh mục</b></a></li> <li class="nav-item"><a class="nav-link" href="/webSubShare/client/narbar/createShares.html"><b>Chia sẻ</b></a></li> <li class="nav-item"><a class="nav-link" href="/webSubShare/client/narbar/createRequest.html"><b>Yêu cầu</b></a></li> <li id="admin" class="nav-item"></li> <li id="status" class="nav-item"></li>';
    } else if (urlWeb == "/webSubShare/client/narbar/category.html") {
        document.getElementById("viewNarbar").innerHTML += '<li class="nav-item"><a class="nav-link " aria-current="page" href="/webSubShare/client/home.html"><b>Trang chủ</b></a></li> <li class="nav-item "><a class="nav-link " href="/webSubShare/client/narbar/search.html"><b>Tìm kiếm</b></a></li> <li class="nav-item"><a class="nav-link active" href="/webSubShare/client/narbar/category.html"><b>Danh mục</b></a></li> <li class="nav-item"><a class="nav-link" href="/webSubShare/client/narbar/createShares.html"><b>Chia sẻ</b></a></li> <li class="nav-item"><a class="nav-link" href="/webSubShare/client/narbar/createRequest.html"><b>Yêu cầu</b></a></li> <li id="admin" class="nav-item"></li> <li id="status" class="nav-item"></li>';
    } else if (urlWeb == "/webSubShare/client/narbar/createShares.html") {
        document.getElementById("viewNarbar").innerHTML += '<li class="nav-item"><a class="nav-link " aria-current="page" href="/webSubShare/client/home.html"><b>Trang chủ</b></a></li> <li class="nav-item "><a class="nav-link " href="/webSubShare/client/narbar/search.html"><b>Tìm kiếm</b></a></li> <li class="nav-item"><a class="nav-link" href="/webSubShare/client/narbar/category.html"><b>Danh mục</b></a></li> <li class="nav-item"><a class="nav-link active" href="/webSubShare/client/narbar/createShares.html"><b>Chia sẻ</b></a></li> <li class="nav-item"><a class="nav-link" href="/webSubShare/client/narbar/createRequest.html"><b>Yêu cầu</b></a></li> <li id="admin" class="nav-item"></li> <li id="status" class="nav-item"></li>';
    } else if (urlWeb == "/webSubShare/client/narbar/createRequest.html") {
        document.getElementById("viewNarbar").innerHTML += '<li class="nav-item"><a class="nav-link " aria-current="page" href="/webSubShare/client/home.html"><b>Trang chủ</b></a></li> <li class="nav-item "><a class="nav-link " href="/webSubShare/client/narbar/search.html"><b>Tìm kiếm</b></a></li> <li class="nav-item"><a class="nav-link" href="/webSubShare/client/narbar/category.html"><b>Danh mục</b></a></li> <li class="nav-item"><a class="nav-link" href="/webSubShare/client/narbar/createShares.html"><b>Chia sẻ</b></a></li> <li class="nav-item"><a class="nav-link active" href="/webSubShare/client/narbar/createRequest.html"><b>Yêu cầu</b></a></li> <li id="admin" class="nav-item"></li> <li id="status" class="nav-item"></li>';
    } else if (urlWeb == "/webSubShare/client/admin/manager.html") {
        document.getElementById("viewNarbar").innerHTML += '<li class="nav-item"><a class="nav-link " aria-current="page" href="/webSubShare/client/home.html"><b>Trang chủ</b></a></li> <li class="nav-item "><a class="nav-link " href="/webSubShare/client/narbar/search.html"><b>Tìm kiếm</b></a></li> <li class="nav-item"><a class="nav-link" href="/webSubShare/client/narbar/category.html"><b>Danh mục</b></a></li> <li class="nav-item"><a class="nav-link" href="/webSubShare/client/narbar/createShares.html"><b>Chia sẻ</b></a></li> <li class="nav-item"><a class="nav-link" href="/webSubShare/client/narbar/createRequest.html"><b>Yêu cầu</b></a></li> <li id="admin" class="nav-item"></li> <li id="status" class="nav-item"></li>';
    } else if (urlWeb == "/webSubShare/client/narbar/profile.html") {
        document.getElementById("viewNarbar").innerHTML += '<li class="nav-item"><a class="nav-link " aria-current="page" href="/webSubShare/client/home.html"><b>Trang chủ</b></a></li> <li class="nav-item "><a class="nav-link " href="/webSubShare/client/narbar/search.html"><b>Tìm kiếm</b></a></li> <li class="nav-item"><a class="nav-link" href="/webSubShare/client/narbar/category.html"><b>Danh mục</b></a></li> <li class="nav-item"><a class="nav-link" href="/webSubShare/client/narbar/createShares.html"><b>Chia sẻ</b></a></li> <li class="nav-item"><a class="nav-link" href="/webSubShare/client/narbar/createRequest.html"><b>Yêu cầu</b></a></li> <li id="admin" class="nav-item"></li> <li id="status" class="nav-item"></li>';
    } else
        document.getElementById("viewNarbar").innerHTML += '<li class="nav-item"><a class="nav-link" href="/webSubShare/client/home.html"><b>Trang chủ</b></a></li> <li class="nav-item"><a class="nav-link" href="/webSubShare/client/narbar/search.html"><b>Tìm kiếm</b></a></li> <li class="nav-item"><a class="nav-link" href="/webSubShare/client/narbar/category.html"><b>Danh mục</b></a></li> <li class="nav-item"><a class="nav-link" href="/webSubShare/client/narbar/createShares.html"><b>Chia sẻ</b></a></li> <li class="nav-item"><a class="nav-link" href="/webSubShare/client/narbar/createRequest.html"><b>Yêu cầu</b></a></li> <li id="admin" class="nav-item"></li> <li id="status" class="nav-item"></li>';
}

function checkAdmin() {
    var urlWeb = window.location.pathname;

    if (urlWeb == "/webSubShare/client/admin/manager.html" || urlWeb == "/webSubShare/client/admin/managerShare.html" || urlWeb == "/webSubShare/client/admin/managerRequest.html" || urlWeb == "/webSubShare/client/admin/managerUser.html" || urlWeb == "/webSubShare/client/admin/editRequestAdmin.html" || urlWeb == "/webSubShare/client/admin/editShareAdmin.html" || urlWeb == "/webSubShare/client/admin/editUser.html") {
        if (getCookie("cuRank") == null || getCookie("cuRank") != "admin") {
            alert("Bạn không có quyền truy cập trang này !!!!");
            window.location = "/webSubShare/client/home.html";
        }

    }
}

function previous() {

}

function next() {

}