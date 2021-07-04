//TODO: Tìm kiếm danh sách yêu cầu theo 1 số tiêu chí nhất định
//hiển thị kết quả theo mẫu có sẵn
function table1() {
    //tìm theo tên
    var keyword = document.getElementById("txtKeyword").value;
    // Make Ajax request
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            document.getElementById("table_1").innerHTML = "";
            //document.getElementById("noData_1").innerHTML = "";
            for (let iResult = 0; iResult < 10; iResult++) {
                var text = "<tr><td class='getLink' scope='row' onclick='getLinkRequest(" + searchResults[iResult].reId + ")'>"+searchResults[iResult].pName+"</td><td class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>"+searchResults[iResult].nName+"</td><td>"+searchResults[iResult].tShare+"</td><td>"+searchResults[iResult].pLanguage+"</td><td><button onclick='deleteRequest(" + searchResults[iResult].reId + ")' class='btn btn-danger'><a class='m-0 text-center text-white'>Xoá</a></button></td><td><button onclick='editPost(" + searchResults[iResult].reId + ", 2)' class='btn btn-success'>Sửa</button></td></tr>";
                document.getElementById("table_1").innerHTML += text;
            }
        }
    };
    xhttp.open("GET", "/webSubShare/server/controller.php?action=searchTable1Request&keyword=" + keyword, true);
    xhttp.send();
}


function ctable1() {
    // tìm theo loại
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            document.getElementById("table_1").innerHTML = "";
            //document.getElementById("noData_1").innerHTML = "";
            for (let iResult = 0; iResult < 10; iResult++) {
                var text = "<tr><td class='getLink' scope='row' onclick='getLinkRequest(" + searchResults[iResult].reId + ")'>"+searchResults[iResult].pName+"</td><td class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>"+searchResults[iResult].nName+"</td><td>"+searchResults[iResult].tShare+"</td><td>"+searchResults[iResult].pLanguage+"</td><td><button onclick='deleteRequest(" + searchResults[iResult].reId + ")' class='btn btn-danger'><a class='m-0 text-center text-white'>Xoá</a></button></td><td><button onclick='editPost(" + searchResults[iResult].reId + ", 2)' class='btn btn-success'>Sửa</button></td></tr>";
                document.getElementById("table_1").innerHTML += text;
            }
        }
    };
    var category = document.getElementById("category").value;
    var time = document.getElementById("time").value;
    var planguage = document.getElementById("planguage").value;

    xhttp.open("GET", "/webSubShare/server/controller.php?action=cSearchTable1Request&category=" + category + "&time=" + time + "&planguage=" + planguage);
    xhttp.send();
}



function search() {
    //Send Request to sever
    table1();
}

function cSearch() {
    //Send Request to sever
    ctable1();
}