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
            // document.getElementById("txtStatus").innerHTML = this.responseText;
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
    setCookie("id", 0, 0);
    var urlWeb = getCookie("urlWeb");
    window.location = urlWeb;
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
            // document.getElementById("txtStatus").innerHTML = this.responseText;
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
    setCookie("id", 0, 0);
    var urlWeb = getCookie("urlWeb");
    window.location = urlWeb;
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

var table_1 = 1;
var table_2 = 1;
var table_3 = 1;
var table_4 = 1;



function previous(indexTable, form) {
    if (indexTable == 1) {
        table_1--;
        if (table_1 == 0) {
            alert("Đã là trang đầu tiên !!!");
            table_1++;
        } else {
            var searchResults = JSON.parse(table1);
            var index = (table_1 - 1) * 10;
            document.getElementById("table_1").innerHTML = null;
            if (form == 1) {
                for (var iResult = index; iResult < index + 10; iResult++) {
                    var text = "<tr><td class='getLink' scope='row' onclick='getLinkShare(" + searchResults[iResult].shId + ")'>" + searchResults[iResult].pName + "</td><td class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tShare + "</td><td>" + searchResults[iResult].pLanguage + "</td></tr>";
                    document.getElementById("table_1").innerHTML += text;
                }
            } else if (form == 2) {
                for (let iResult = index; iResult < index + 10; iResult++) {
                    var text = "<tr><td class='getLink' scope='row' onclick='getLinkRequest(" + searchResults[iResult].reId + ")'>" + searchResults[iResult].pName + "</td><td class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tRequest + "</td><td>" + searchResults[iResult].pLanguage + "</td><td>" + searchResults[iResult].price + "</td></tr>";
                    document.getElementById("table_1").innerHTML += text;
                }
            } else if (form == 3) {
                for (let iResult = index; iResult < index + 10; iResult++) {
                    var text = "<tr><td class='text-center d-none d-xs-none'>" + searchResults[iResult].shId + "</td><td  class='getLink' scope='row' onclick='getLinkShare(" + searchResults[iResult].shId + ")'>" + searchResults[iResult].pName + "</td><td>" + searchResults[iResult].tShare + "</td><td>" + searchResults[iResult].pLanguage + "<td><button onclick='deleteShare(" + searchResults[iResult].shId + ")' class='btn btn-danger'><a class='m-0 text-center text-white'>Xoá</a></button></td><td><button onclick='editPost(" + searchResults[iResult].shId + ", 1)' class='btn btn-success'>Sửa</button></td></tr>";
                    document.getElementById("table_1").innerHTML += text;
                }
            } else if (form == 4) {
                for (let iResult = index; iResult < index + 10; iResult++) {
                    var text = "<tr><td class='text-center d-none d-xs-none'>" + searchResults[iResult].reId + "<td  class='getLink' scope='row' onclick='getLinkRequest(" + searchResults[iResult].reId + ")'>" + searchResults[iResult].pName + "</td><td>" + searchResults[iResult].tRequest + "</td><td>" + searchResults[iResult].pLanguage + "<td><button onclick='deleteRequest(" + searchResults[iResult].reId + ")' class='btn btn-danger'><a class='m-0 text-center text-white'>Xoá</button></td><td><button onclick='editPost(" + searchResults[iResult].reId + ", 2)' class='btn btn-success'>Sửa</button></td></tr>";
                    document.getElementById("table_2").innerHTML += text;
                }
            } else if (form == 5) {
                for (let iResult = index; iResult < index + 10; iResult++) {
                    var text = "<tr><td class='getLink' scope='row' onclick='getLinkShare(" + searchResults[iResult].shId + ")'>" + searchResults[iResult].pName + "</td><td class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tShare + "</td><td>" + searchResults[iResult].pLanguage + "</td><td><button onclick='deleteShare(" + searchResults[iResult].shId + ")' class='btn btn-danger'><a class='m-0 text-center text-white'>Xoá</a></button></td><td><button onclick='editPost(" + searchResults[iResult].shId + ", 1)' class='btn btn-success'>Sửa</button></td></tr>";
                    document.getElementById("table_1").innerHTML += text;
                }
            } else if (form == 6) {
                for (let iResult = index; iResult < index + 10; iResult++) {
                    var text = "<tr><td class='getLink' scope='row' onclick='getLinkRequest(" + searchResults[iResult].reId + ")'>" + searchResults[iResult].pName + "</td><td class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tRequest + "</td><td>" + searchResults[iResult].pLanguage + "</td><td><button onclick='deleteRequest(" + searchResults[iResult].reId + ")' class='btn btn-danger'><a class='m-0 text-center text-white'>Xoá</a></button></td><td><button onclick='editPost(" + searchResults[iResult].reId + ", 2)' class='btn btn-success'>Sửa</button></td></tr>";
                    document.getElementById("table_1").innerHTML += text;
                }
            } else if (form == 7) {
                for (let iResult = index; iResult < index + 10; iResult++) {
                    var text = "<tr><td>" + searchResults[iResult].cuId + "</td><td class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].mail + "</td> <td><button onclick='deleteUser(" + searchResults[iResult].cuId + ")' class='btn btn-danger'>Xoá</button></td> <td><button onclick='editUser(" + searchResults[iResult].cuId + ")' class='btn btn-success'>Sửa</button></td><td><button onclick='blockUser(" + searchResults[iResult].cuId + ")' class='btn btn-warning text-white'>Chặn</button></td></tr>";
                    document.getElementById("table_1").innerHTML += text;
                }
            }
        }
    } else if (indexTable == 2) {
        table_2--;
        if (table_2 == 0) {
            alert("Đã là trang đầu tiên !!!");
            table_2++;
        } else {
            var searchResults = JSON.parse(table2);
            var index = (table_2 - 1) * 10;
            document.getElementById("table_2").innerHTML = null;
            if (form == 1) {
                for (var iResult = index; iResult < index + 10; iResult++) {
                    var text = "<tr><td class='getLink' scope='row' onclick='getLinkShare(" + searchResults[iResult].shId + ")'>" + searchResults[iResult].pName + "</td><td class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tShare + "</td><td>" + searchResults[iResult].pLanguage + "</td></tr>";
                    document.getElementById("table_2").innerHTML += text;
                }
            } else if (form == 2) {
                for (let iResult = index; iResult < index + 10; iResult++) {
                    var text = "<tr><td class='getLink' scope='row' onclick='getLinkRequest(" + searchResults[iResult].reId + ")'>" + searchResults[iResult].pName + "</td><td class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tRequest + "</td><td>" + searchResults[iResult].pLanguage + "</td><td>" + searchResults[iResult].price + "</td></tr>";
                    document.getElementById("table_2").innerHTML += text;
                }
            } else if (form == 3) {
                for (let iResult = index; iResult < index + 10; iResult++) {
                    var text = "<tr><td class='text-center d-none d-xs-none'>" + searchResults[iResult].shId + "</td><td  class='getLink' scope='row' onclick='getLinkShare(" + searchResults[iResult].shId + ")'>" + searchResults[iResult].pName + "</td><td>" + searchResults[iResult].tShare + "</td><td>" + searchResults[iResult].pLanguage + "<td><button onclick='deleteShare(" + searchResults[iResult].shId + ")' class='btn btn-danger'><a class='m-0 text-center text-white'>Xoá</a></button></td><td><button onclick='editPost(" + searchResults[iResult].shId + ", 1)' class='btn btn-success'>Sửa</button></td></tr>";
                    document.getElementById("table_1").innerHTML += text;
                }
            } else if (form == 4) {
                for (let iResult = index; iResult < index + 10; iResult++) {
                    var text = "<tr><td class='text-center d-none d-xs-none'>" + searchResults[iResult].reId + "<td  class='getLink' scope='row' onclick='getLinkRequest(" + searchResults[iResult].reId + ")'>" + searchResults[iResult].pName + "</td><td>" + searchResults[iResult].tRequest + "</td><td>" + searchResults[iResult].pLanguage + "<td><button onclick='deleteRequest(" + searchResults[iResult].reId + ")' class='btn btn-danger'><a class='m-0 text-center text-white'>Xoá</button></td><td><button onclick='editPost(" + searchResults[iResult].reId + ", 2)' class='btn btn-success'>Sửa</button></td></tr>";
                    document.getElementById("table_2").innerHTML += text;
                }
            }
        }


    } else if (indexTable == 3) {
        table_3--;
        if (table_3 == 0)
            alert("Đã là trang đầu tiên !!!");
        else {
            var searchResults = JSON.parse(table3);
            var index = (table_3 - 1) * 10;
            document.getElementById("table_3").innerHTML = null;
            if (form == 1) {
                for (var iResult = index; iResult < index + 10; iResult++) {
                    var text = "<tr><td class='getLink' scope='row' onclick='getLinkShare(" + searchResults[iResult].shId + ")'>" + searchResults[iResult].pName + "</td><td class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tShare + "</td><td>" + searchResults[iResult].pLanguage + "</td></tr>";
                    document.getElementById("table_3").innerHTML += text;
                }
            } else if (form == 2) {
                for (let iResult = index; iResult < index + 10; iResult++) {
                    var text = "<tr><td class='getLink' scope='row' onclick='getLinkRequest(" + searchResults[iResult].reId + ")'>" + searchResults[iResult].pName + "</td><td class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tRequest + "</td><td>" + searchResults[iResult].pLanguage + "</td><td>" + searchResults[iResult].price + "</td></tr>";
                    document.getElementById("table_3").innerHTML += text;
                }
            }

        }


    } else if (indexTable == 4) {
        table_4--;
        if (table_4 == 0)
            alert("Đã là trang đầu tiên !!!");
        else {
            var searchResults = JSON.parse(table4);
            var index = (table_4 - 1) * 10;
            document.getElementById("table_4").innerHTML = null;
            if (form == 1) {
                for (var iResult = index; iResult < index + 10; iResult++) {
                    var text = "<tr><td class='getLink' scope='row' onclick='getLinkShare(" + searchResults[iResult].shId + ")'>" + searchResults[iResult].pName + "</td><td class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tShare + "</td><td>" + searchResults[iResult].pLanguage + "</td></tr>";
                    document.getElementById("table_4").innerHTML += text;
                }
            } else if (form == 2) {
                for (let iResult = index; iResult < index + 10; iResult++) {
                    var text = "<tr><td class='getLink' scope='row' onclick='getLinkRequest(" + searchResults[iResult].reId + ")'>" + searchResults[iResult].pName + "</td><td class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tRequest + "</td><td>" + searchResults[iResult].pLanguage + "</td><td>" + searchResults[iResult].price + "</td></tr>";
                    document.getElementById("table_4").innerHTML += text;
                }
            }

        }


    }

}

function next(indexTable, form) {
    if (indexTable == 1) {
        table_1++;
        var searchResults = JSON.parse(table1);
        var index = (table_1 - 1) * 10;
        if (index >= searchResults.length)
            alert("Đã là cuối danh sách !!!")
        else {
            document.getElementById("table_1").innerHTML = null;
            if (form == 1) {
                for (var iResult = index; iResult < index + 10; iResult++) {
                    var text = "<tr><td class='getLink' scope='row' onclick='getLinkShare(" + searchResults[iResult].shId + ")'>" + searchResults[iResult].pName + "</td><td class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tShare + "</td><td>" + searchResults[iResult].pLanguage + "</td></tr>";
                    document.getElementById("table_1").innerHTML += text;
                }
            } else if (form == 2) {
                for (let iResult = index; iResult < index + 10; iResult++) {
                    var text = "<tr><td class='getLink' scope='row' onclick='getLinkRequest(" + searchResults[iResult].reId + ")'>" + searchResults[iResult].pName + "</td><td class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tRequest + "</td><td>" + searchResults[iResult].pLanguage + "</td><td>" + searchResults[iResult].price + "</td></tr>";
                    document.getElementById("table_1").innerHTML += text;
                }
            } else if (form == 3) {
                for (let iResult = index; iResult < index + 10; iResult++) {
                    var text = "<tr><td class='text-center d-none d-xs-none'>" + searchResults[iResult].shId + "</td><td  class='getLink' scope='row' onclick='getLinkShare(" + searchResults[iResult].shId + ")'>" + searchResults[iResult].pName + "</td><td>" + searchResults[iResult].tShare + "</td><td>" + searchResults[iResult].pLanguage + "<td><button onclick='deleteShare(" + searchResults[iResult].shId + ")' class='btn btn-danger'><a class='m-0 text-center text-white'>Xoá</a></button></td><td><button onclick='editPost(" + searchResults[iResult].shId + ", 1)' class='btn btn-success'>Sửa</button></td></tr>";
                    document.getElementById("table_1").innerHTML += text;
                }
            } else if (form == 4) {
                for (let iResult = index; iResult < index + 10; iResult++) {
                    var text = "<tr><td class='text-center d-none d-xs-none'>" + searchResults[iResult].reId + "<td  class='getLink' scope='row' onclick='getLinkRequest(" + searchResults[iResult].reId + ")'>" + searchResults[iResult].pName + "</td><td>" + searchResults[iResult].tRequest + "</td><td>" + searchResults[iResult].pLanguage + "<td><button onclick='deleteRequest(" + searchResults[iResult].reId + ")' class='btn btn-danger'><a class='m-0 text-center text-white'>Xoá</button></td><td><button onclick='editPost(" + searchResults[iResult].reId + ", 2)' class='btn btn-success'>Sửa</button></td></tr>";
                    document.getElementById("table_2").innerHTML += text;
                }
            } else if (form == 5) {
                for (let iResult = index; iResult < index + 10; iResult++) {
                    var text = "<tr><td class='getLink' scope='row' onclick='getLinkShare(" + searchResults[iResult].shId + ")'>" + searchResults[iResult].pName + "</td><td class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tShare + "</td><td>" + searchResults[iResult].pLanguage + "</td><td><button onclick='deleteShare(" + searchResults[iResult].shId + ")' class='btn btn-danger'><a class='m-0 text-center text-white'>Xoá</a></button></td><td><button onclick='editPost(" + searchResults[iResult].shId + ", 1)' class='btn btn-success'>Sửa</button></td></tr>";
                    document.getElementById("table_1").innerHTML += text;
                }
            } else if (form == 6) {
                for (let iResult = index; iResult < index + 10; iResult++) {
                    var text = "<tr><td class='getLink' scope='row' onclick='getLinkRequest(" + searchResults[iResult].reId + ")'>" + searchResults[iResult].pName + "</td><td class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tRequest + "</td><td>" + searchResults[iResult].pLanguage + "</td><td><button onclick='deleteRequest(" + searchResults[iResult].reId + ")' class='btn btn-danger'><a class='m-0 text-center text-white'>Xoá</a></button></td><td><button onclick='editPost(" + searchResults[iResult].reId + ", 2)' class='btn btn-success'>Sửa</button></td></tr>";
                    document.getElementById("table_1").innerHTML += text;
                }
            } else if (form == 7) {
                for (let iResult = index; iResult < index + 10; iResult++) {
                    var text = "<tr><td>" + searchResults[iResult].cuId + "</td><td class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].mail + "</td> <td><button onclick='deleteUser(" + searchResults[iResult].cuId + ")' class='btn btn-danger'>Xoá</button></td> <td><button onclick='editUser(" + searchResults[iResult].cuId + ")' class='btn btn-success'>Sửa</button></td><td><button onclick='blockUser(" + searchResults[iResult].cuId + ")' class='btn btn-warning text-white'>Chặn</button></td></tr>";
                    document.getElementById("table_1").innerHTML += text;
                }
            }
        }


    } else if (indexTable == 2) {
        table_2++;
        var searchResults = JSON.parse(table2);
        var index = (table_2 - 1) * 10;
        if (index >= searchResults.length)
            alert("Đã là cuối danh sách !!!")
        else {
            document.getElementById("table_2").innerHTML = null;
            if (form == 1) {
                for (var iResult = index; iResult < index + 10; iResult++) {
                    var text = "<tr><td class='getLink' scope='row' onclick='getLinkShare(" + searchResults[iResult].shId + ")'>" + searchResults[iResult].pName + "</td><td class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tShare + "</td><td>" + searchResults[iResult].pLanguage + "</td></tr>";
                    document.getElementById("table_2").innerHTML += text;
                }
            } else if (form == 2) {
                for (let iResult = index; iResult < index + 10; iResult++) {
                    var text = "<tr><td class='getLink' scope='row' onclick='getLinkRequest(" + searchResults[iResult].reId + ")'>" + searchResults[iResult].pName + "</td><td class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tRequest + "</td><td>" + searchResults[iResult].pLanguage + "</td><td>" + searchResults[iResult].price + "</td></tr>";
                    document.getElementById("table_2").innerHTML += text;
                }
            } else if (form == 3) {
                for (let iResult = index; iResult < index + 10; iResult++) {
                    var text = "<tr><td class='text-center d-none d-xs-none'>" + searchResults[iResult].shId + "</td><td  class='getLink' scope='row' onclick='getLinkShare(" + searchResults[iResult].shId + ")'>" + searchResults[iResult].pName + "</td><td>" + searchResults[iResult].tShare + "</td><td>" + searchResults[iResult].pLanguage + "<td><button onclick='deleteShare(" + searchResults[iResult].shId + ")' class='btn btn-danger'><a class='m-0 text-center text-white'>Xoá</a></button></td><td><button onclick='editPost(" + searchResults[iResult].shId + ", 1)' class='btn btn-success'>Sửa</button></td></tr>";
                    document.getElementById("table_1").innerHTML += text;
                }
            } else if (form == 4) {
                for (let iResult = index; iResult < index + 10; iResult++) {
                    var text = "<tr><td class='text-center d-none d-xs-none'>" + searchResults[iResult].reId + "<td  class='getLink' scope='row' onclick='getLinkRequest(" + searchResults[iResult].reId + ")'>" + searchResults[iResult].pName + "</td><td>" + searchResults[iResult].tRequest + "</td><td>" + searchResults[iResult].pLanguage + "<td><button onclick='deleteRequest(" + searchResults[iResult].reId + ")' class='btn btn-danger'><a class='m-0 text-center text-white'>Xoá</button></td><td><button onclick='editPost(" + searchResults[iResult].reId + ", 2)' class='btn btn-success'>Sửa</button></td></tr>";
                    document.getElementById("table_2").innerHTML += text;
                }
            }
        }

    } else if (indexTable == 3) {
        table_3++;
        var searchResults = JSON.parse(table3);
        var index = (table_3 - 1) * 10;
        if (index >= searchResults.length)
            alert("Đã là cuối danh sách !!!")
        else {
            document.getElementById("table_3").innerHTML = null;
            if (form == 1) {
                for (var iResult = index; iResult < index + 10; iResult++) {
                    var text = "<tr><td class='getLink' scope='row' onclick='getLinkShare(" + searchResults[iResult].shId + ")'>" + searchResults[iResult].pName + "</td><td class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tShare + "</td><td>" + searchResults[iResult].pLanguage + "</td></tr>";
                    document.getElementById("table_3").innerHTML += text;
                }
            } else if (form == 2) {
                for (let iResult = index; iResult < index + 10; iResult++) {
                    var text = "<tr><td class='getLink' scope='row' onclick='getLinkRequest(" + searchResults[iResult].reId + ")'>" + searchResults[iResult].pName + "</td><td class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tRequest + "</td><td>" + searchResults[iResult].pLanguage + "</td><td>" + searchResults[iResult].price + "</td></tr>";
                    document.getElementById("table_3").innerHTML += text;
                }
            }
        }

    } else if (indexTable == 4) {
        table_4++;
        var searchResults = JSON.parse(table4);
        var index = (table_4 - 1) * 10;
        if (index >= searchResults.length)
            alert("Đã là cuối danh sách !!!")
        else {
            document.getElementById("table_4").innerHTML = null;
            if (form == 1) {
                for (var iResult = index; iResult < index + 10; iResult++) {
                    var text = "<tr><td class='getLink' scope='row' onclick='getLinkShare(" + searchResults[iResult].shId + ")'>" + searchResults[iResult].pName + "</td><td class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tShare + "</td><td>" + searchResults[iResult].pLanguage + "</td></tr>";
                    document.getElementById("table_4").innerHTML += text;
                }
            } else if (form == 2) {
                for (let iResult = index; iResult < index + 10; iResult++) {
                    var text = "<tr><td class='getLink' scope='row' onclick='getLinkRequest(" + searchResults[iResult].reId + ")'>" + searchResults[iResult].pName + "</td><td class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tRequest + "</td><td>" + searchResults[iResult].pLanguage + "</td><td>" + searchResults[iResult].price + "</td></tr>";
                    document.getElementById("table_4").innerHTML += text;
                }
            }
        }

    }
}

function editPost(id, select) {
    var urlWeb = window.location;
    setCookie("urlWeb", urlWeb, 1);
    if (select == 1) {
        setCookie("id", id, 10)
        window.location = "../library/editShare.html";
    } else if (select == 2) {
        setCookie("id", id, 10)
        window.location = "../library/editRequest.html";
    }

}

function editUser(cuId) {
    setCookie("pId", cuId, 1);
    var urlWeb = window.location.pathname;
    setCookie("urlWeb", urlWeb, 1);
    window.location = "/webSubShare/client/library/editUser.html";
}

function editProfile() {
    setCookie("pId", getCookie("cuId"), 1);
    var urlWeb = window.location.pathname;
    setCookie("urlWeb", urlWeb, 1);
    window.location = "/webSubShare/client/library/editUser.html";
}

function deleteComment(coId) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

        }
    };
    var url = "/webSubShare/server/controller.php?action=deleteComment&coId=" + coId;
    xhttp.open("GET", url, true);
    xhttp.send();
    location.reload();
}