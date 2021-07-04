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
//TODO: lấy pId từ cookie cho cuId = pId sau đó load những thông tin liên quan ở trạng thái chỉ xem như mẫu
function profile() {
    // Send Request to sever
    // Send Request to sever
    // var keyword = document.getElementById("txtKeyword").value;
    var cuId = getCookie("pId");
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
    xhttp.open("GET", "/webSubShare/server/controller.php?action=postProfile&cuId=" + cuId, true);
    xhttp.send();

}

function table1() {
    var cuId = getCookie("pId");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            // document.getElementById("noData_1").innerHTML = "";
            document.getElementById("table_1").innerHTML = "";
            for (var iResult = 0; iResult < 10; iResult++) {
                var text = "<tr><td class='getLink' scope='row' onclick='getLinkShare("+ searchResults[iResult].shId +")'>" + searchResults[iResult].pName + "</td><td class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>"+ searchResults[iResult].tShare + "</td><td>" + searchResults[iResult].pLanguage + "</td></tr>";
                document.getElementById("table_1").innerHTML += text;
            }
        }
    };
    xhttp.open("GET", "/webSubShare/server/controller.php?action=postTable1&cuId=" + cuId, true);
    xhttp.send();
    return 0;
}

function table2() {

    var cuId = getCookie("pId");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            document.getElementById("table_2").innerHTML = "";
            // document.getElementById("noData_1").innerHTML = "";
            for (var iResult = 0; iResult < 10; iResult++) {
                var text = "<tr><td class='getLink' scope='row' onclick='getLinkRequest("+ searchResults[iResult].reId +")'>" + searchResults[iResult].pName + "</td><td class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>"+ searchResults[iResult].tRequest + "</td><td>" + searchResults[iResult].pLanguage + "</td><td>" + searchResults[iResult].price + "</td></tr>";
                document.getElementById("table_2").innerHTML += text;
            }
        }
    };
    xhttp.open("GET", "/webSubShare/server/controller.php?action=postTable2&cuId=" + cuId, true);
    xhttp.send();
    return 0;


}

function home() {
    profile();
    table1();
    table2();
}