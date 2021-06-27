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

function getLinkProfile() {

}

function getLinkShare() {

}

function getLinkRequest() {

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
    window.location = "/webSubShare/client/narbar/profile.html";
}

function account() {
    if (getCookie("cuId") == null || getCookie("cuId") < 0) {
        document.getElementById("status").innerHTML += '<a class="nav-link" href="/webSubShare/client/account/login.html"><b>Đăng nhập / Đăng ký<b></b></a>';
    } else {
        document.getElementById("status").innerHTML += '<a class="nav-link" href="/webSubShare/client/narbar/profile.html"><b><i class="bi bi-person-circle"></i>&nbsp;' + getCookie("nName") + '</b></a>';
    }
}


function previous() {

}

function next() {

}