function addSub() {

}

function getInformation() {
    var xhttp = new XMLHttpRequest();
    var reId = getCookie("reId");
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            document.getElementById("pName").innerHTML = searchResults[0].pName;
            document.getElementById("tRequest").innerHTML = searchResults[0].tRequest;
            document.getElementById("planguage").innerHTML = searchResults[0].pLanguage;
            document.getElementById("category").innerHTML = searchResults[0].category;
            document.getElementById("videoLink").innerHTML = searchResults[0].videolink;
            document.getElementById("price").innerHTML = searchResults[0].price;
            document.getElementById("nName").innerHTML = searchResults[0].nName;
            document.getElementById("info").innerHTML = searchResults[0].info;
            document.getElementById("imageLink").innerHTML = "<img src='"+searchResults[0].imagesLink+"' alt='"+searchResults[0].pName+"' class='img-thumbnail'>";
        }
    };
    var url = "/webSubShare/server/controller.php?action=LoadTableRequest&reId=" + reId;
    xhttp.open("GET", url, true);
    xhttp.send();
}

function table1() {

}

function home() {
    getInformation();
    table1();
}
