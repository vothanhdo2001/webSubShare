function table1() {
    // Send Request to sever
    // Send Request to sever
    // var keyword = document.getElementById("txtKeyword").value;
    var cuId = getCookie("cuId");
    // Make Ajax request
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            document.getElementById("table_1").innerHTML = "";
            document.getElementById("noData_1").innerHTML = "";
            for (var iResult in searchResults) {
                var text = "<tr><td  class='getLink' scope='row' onclick='getLinkRequest(" + searchResults[iResult].reId + ")'>" + searchResults[iResult].pName + "</td><td id='getLinkProfile' class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tRequest + "</td><td>" + searchResults[iResult].pLanguage + "</td><td>" + searchResults[iResult].price + "</td></tr>";
                document.getElementById("table_1").innerHTML += text;
            }
        }
    };
    xhttp.open("GET", "/webSubShare/server/controller.php?action=loadRequestMe&cuId=" + cuId, true);
    xhttp.send();

}

function table2() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            document.getElementById("table_2").innerHTML = "";
            document.getElementById("noData_2").innerHTML = "";
            for (var iResult = 0; iResult < 10; iResult++) {
                var text = "<tr><td  class='getLink' scope='row' onclick='getLinkRequest(" + searchResults[iResult].reId + ")'>" + searchResults[iResult].pName + "</td><td id='getLinkProfile' class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tRequest + "</td><td>" + searchResults[iResult].pLanguage + "</td><td>" + searchResults[iResult].price + "</td></tr>";
                document.getElementById("table_2").innerHTML += text;
            }
        }
    };
    xhttp.open("GET", "/webSubShare/server/controller.php?action=loadRequest", true);
    xhttp.send();
}

function home() {
    //Get data from sever
    table1(); //Reder data on table1
    table2(); //Reder data on table1
}

function createRequest() {
    if (getCookie("cuId") == null || getCookie("cuId") < 0) {
        alert("Bạn không có quyền truy cập trang này !!!!");
        window.location = "/webSubShare/client/home.html";
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("txtStatus").innerHTML = this.responseText;
        }
    };
    var cuId = getCookie("cuId");
    var pName = document.getElementById("pName").value;
    var pLanguage = document.getElementById("pLanguage").value;
    var category = document.getElementById("category").value;
    var imagesLink = document.getElementById("imagesLink").value;
    var videoLink = document.getElementById("videoLink").value;
    var price = document.getElementById("price").value;
    var info = document.getElementById("info").value;
    var pPrivate = document.getElementById("pPrivate").value;

    var url = "/webSubShare/server/controller.php?action=createRequest&pName=" + pName + "&cuId=" + cuId + "&pLanguage=" + pLanguage + "&category=" + category + "&imagesLink=" + imagesLink + "&videoLink=" + videoLink + "&price=" + price + "&info=" + info + "&pPrivate=" + pPrivate;
    // alert(url);

    //Send Ajax request
    xhttp.open("GET", url, true);
    xhttp.send();
    alert("Tạo yêu cầu thành công.");
}