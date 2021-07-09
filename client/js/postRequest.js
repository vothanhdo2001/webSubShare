var a;

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

function addSub() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("txtStatus").innerHTML = this.responseText;
        }
    };
    var cuId = getCookie("cuId");
    var reId = getCookie("reId");
    var pName = a[0].pName;
    var pLanguage = a[0].pLanguage;
    var category = a[0].category;
    var imagesLink = a[0].imagesLink;
    var videoLink = a[0].videolink;
    var subLink = document.getElementById("subLink").value;
    var pPrivate = document.getElementById("pPrivate").value;
    if (subLink == null || subLink == "" || subLink == "  " || subLink == " ")
        alert("subtitle link không được để trống!!");

    else {
        var url = "/webSubShare/server/controller.php?action=createShareFromRe&pName=" + pName + "&cuId=" + cuId + "&reId=" + reId + "&pLanguage=" + pLanguage + "&category=" + category + "&imagesLink=" + imagesLink + "&videoLink=" + videoLink + "&subLink=" + subLink + "&pPrivate=" + pPrivate;
        //Send Ajax request 
        xhttp.open("GET", url, true);
        xhttp.send();
        location.reload();
    }
}

function getInformation() {
    var xhttp = new XMLHttpRequest();
    var reId = getCookie("reId");
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            a = searchResults;
            document.getElementById("pName").innerHTML = searchResults[0].pName;
            document.getElementById("tRequest").innerHTML = searchResults[0].tRequest;
            document.getElementById("planguage").innerHTML = searchResults[0].pLanguage;
            document.getElementById("category").innerHTML = searchResults[0].category;
            document.getElementById("videoLink").innerHTML = searchResults[0].videolink;
            document.getElementById("price").innerHTML = searchResults[0].price;
            document.getElementById("nName").innerHTML = '<span class="getLink" onclick="getLinkProfile(' + searchResults[0].cuId + ')">' + searchResults[0].nName + '</span>';
            document.getElementById("info").innerHTML = searchResults[0].info;
            document.getElementById("imageLink").innerHTML = "<img src='" + searchResults[0].imagesLink + "' alt='" + searchResults[0].pName + "' class='img-thumbnail'>";
            var reId = getCookie("reId");
            if (getCookie("cuRank") == "admin") {
                document.getElementById("control").innerHTML = '<button onclick="deleteRequest(' + reId + ')" type="button" class="btn btn-danger"><b>Xoá bài</b></button> <span>&#9876;&#9876;&#9876;</span> <button onclick="editPost(' + reId + ', 2)" type="button" class="btn btn-success"><b>Chỉnh sửa</b></button>';
            }
        }
    };
    var url = "/webSubShare/server/controller.php?action=LoadTableRequest&reId=" + reId;
    xhttp.open("GET", url, true);
    xhttp.send();
}

function table1() {
    var xhttp = new XMLHttpRequest();
    var reId = getCookie("reId");
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            document.getElementById("table_1").innerHTML = "";
            // document.getElementById("noData_1").innerHTML = "";
            for (let iResult = 0; iResult < 10; iResult++) {
                var text = "<tr><td class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tShare + "</td><td><button onclick='getLinkShare(" + searchResults[iResult].shId + ")' type='button' class='btn btn-success'>Truy cập</button></td></tr>";
                document.getElementById("table_1").innerHTML += text;
            }
        }
    };
    var url = "/webSubShare/server/controller.php?action=LoadTable1Request&reId=" + reId;
    xhttp.open("GET", url, true);
    xhttp.send();
}

function home() {
    getInformation();
    table1();
    getComment();
}

var searchResults;
var iResult = 0;

function getComment() {
    var reId = getCookie("reId");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            searchResults = JSON.parse(this.responseText);
            document.getElementById("contentComment").innerHTML = "";
            for (iResult; iResult < 10; iResult++) {
                var text = '<div class="d-flex flex-row comment-row"> <div class="p-2"><img src="/webSubShare/client/images/Profile.png" alt="user" width="50" class="rounded-circle"></div> <div class="comment-text active w-100"> <h6 class="font-medium">' + searchResults[iResult].nName + '</h6> <span class="m-b-15 d-block">' + searchResults[iResult].content + '</span> ';
                if (getCookie("cuRank") == "admin")
                    text += '</div> <button type="button" class="btn btn-danger btn-sm" onclick="deleteComment(' + searchResults[iResult].coId + ')">Xoá</button>';
                text += '</div></div> <hr>';
                document.getElementById("contentComment").innerHTML += text;
            }
        }
    };
    xhttp.open("GET", "/webSubShare/server/controller.php?action=loadCommentRequest&id=" + reId, true);
    xhttp.send();
}

function sendCommentRequest() {
    if (getCookie("cuId") == null || getCookie("cuId") < 0) {
        alert("Đăng nhập để tiếp tục !!!");
        window.location = "/webSubShare/client/account/login.html";
    } else {
        var cuId = getCookie("cuId");
        var reId = getCookie("reId");
        var content = document.getElementById("writeComment").value;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {

            }
        };
        var url = "/webSubShare/server/controller.php?action=sendCommentRequest&reId=" + reId + "&cuId=" + cuId + "&content=" + content;
        xhttp.open("GET", url, true);
        xhttp.send();
        location.reload();
    }

}

function loadMore() {
    var end = iResult + 10;
    for (iResult; iResult < end; iResult++) {
        var text = '<div class="d-flex flex-row comment-row"> <div class="p-2"><img src="/webSubShare/client/images/Profile.png" alt="user" width="50" class="rounded-circle"></div> <div class="comment-text active w-100"> <h6 class="font-medium">' + searchResults[iResult].nName + '</h6> <span class="m-b-15 d-block">' + searchResults[iResult].content + '</span> </div> </div> <hr>';
        document.getElementById("contentComment").innerHTML += text;
    }
}