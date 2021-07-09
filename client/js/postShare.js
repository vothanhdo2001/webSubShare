function home() {
    getInformation();
    getComment();
}

function getInformation() {
    // Send Request to sever
    var shId = getCookie("shId");
    // Make Ajax request
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);

            document.getElementById("pName").innerHTML = searchResults[0].pName;
            document.getElementById("tShare").innerHTML = searchResults[0].tShare;
            document.getElementById("pLanguage").innerHTML = searchResults[0].pLanguage;
            document.getElementById("category").innerHTML = searchResults[0].category;
            document.getElementById("videoLink").innerHTML = searchResults[0].videoLink;
            document.getElementById("nName").innerHTML = '<span class="getLink" onclick="getLinkProfile(' + searchResults[0].cuId + ')">' + searchResults[0].nName + '</span>';
            document.getElementById("imageLink").innerHTML = "<img src='" + searchResults[0].imagesLink + "' alt='" + searchResults[0].pName + "' class='img-thumbnail'>";
            document.getElementById("subLink").innerHTML = '<a href="' + searchResults[0].subLink + '"><button type="button" class="btn btn-success"><b>Tải xuống subtitle</b></button></a>';
            document.getElementById("rate").innerHTML = '&nbsp' + searchResults[0].rate;

        }
    };
    xhttp.open("GET", "/webSubShare/server/controller.php?action=loadPostShare&shId=" + shId, true);
    xhttp.send();

}

function sendRate() {
    // Send Request to sever
    var shId = getCookie("shId");
    var rate = document.getElementById("getRate").value;
    // Make Ajax request
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
        }
    };

    var rate = document.getElementById("getRate").value;

    xhttp.open("GET", "/webSubShare/server/controller.php?action=sendRate&shId=" + shId + "&rate=" + rate, true);
    xhttp.send();
    getInformation();
    getInformation();

}


var searchResults;
var iResult = 0;

function getComment() {
    var shId = getCookie("shId");
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
    xhttp.open("GET", "/webSubShare/server/controller.php?action=loadCommentShare&id=" + shId, true);
    xhttp.send();
}

function sendCommentShare() {
    if (getCookie("cuId") == null || getCookie("cuId") < 0) {
        alert("Đăng nhập để tiếp tục !!!");
        window.location = "/webSubShare/client/account/login.html";
    } else {
        var cuId = getCookie("cuId");
        var shId = getCookie("shId");
        var content = document.getElementById("writeComment").value;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {

            }
        };
        var url = "/webSubShare/server/controller.php?action=sendCommentShare&shId=" + shId + "&cuId=" + cuId + "&content=" + content;
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