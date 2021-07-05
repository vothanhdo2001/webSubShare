var a;

function addSub() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("txtStatus").innerHTML = this.responseText;
        }
    };
    var cuId = getCookie("cuId");
    var pName = a[0].pName;
    var pLanguage = a[0].pLanguage;
    var category = a[0].category;
    var imagesLink = a[0].imagesLink;
    var videoLink = a[0].videolink;
    var subLink = document.getElementById("subLink").value;
    var pPrivate = document.getElementById("pPrivate").value;

    var url = "/webSubShare/server/controller.php?action=createShare&pName=" + pName + "&cuId=" + cuId + "&pLanguage=" + pLanguage + "&category=" + category + "&imagesLink=" + imagesLink + "&videoLink=" + videoLink + "&subLink=" + subLink + "&pPrivate=" + pPrivate;
    //Send Ajax request 
    xhttp.open("GET", url, true);
    xhttp.send();
    location.reload();
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
            document.getElementById("nName").innerHTML = searchResults[0].nName;
            document.getElementById("info").innerHTML = searchResults[0].info;
            document.getElementById("imageLink").innerHTML = "<img src='" + searchResults[0].imagesLink + "' alt='" + searchResults[0].pName + "' class='img-thumbnail'>";
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
}