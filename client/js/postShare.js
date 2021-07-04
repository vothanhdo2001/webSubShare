function home() {
    getInformation();
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
            document.getElementById("nName").innerHTML = searchResults[0].nName;
            document.getElementById("imageLink").innerHTML = "<img src='"+searchResults[0].imagesLink+"' alt='"+searchResults[0].pName+"' class='img-thumbnail'>";
            document.getElementById("subLink").innerHTML = '<a href="'+searchResults[0].subLink +'"><button type="button" class="btn btn-success"><b>Tải xuống subtitle</b></button></a>';
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

    xhttp.open("GET", "/webSubShare/server/controller.php?action=sendRate&shId=" + shId + "&rate=" + rate,  true);
    xhttp.send();
    location.reload();

}
