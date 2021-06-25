function table1() {
    // Send Request to sever
    var keyword = document.getElementById("txtKeyword").value;
    // Make Ajax request
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            document.getElementById("table_1").innerHTML = "";
            for (var iResult in searchResults) {
                var text = "<tr><td id='getLink' class='getLink' scope='row' onclick='getLinkShare()'>" + searchResults[iResult].pName + "</td><td id='getLinkProfile' class='getLink' onclick='getLinkProfile()'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tShare + "</td><td>" + searchResults[iResult].pLanguage + "</td></tr>";
                document.getElementById("table_1").innerHTML += text;
            }
        }
    };
    xhttp.open("GET", "http://localhost/SubShare/server/controler.php?action=searchTable1&keyword=" + keyword, true);
    xhttp.send();
}

function table2() {
    // Send Request to sever
    var keyword = document.getElementById("txtKeyword").value;
    // Make Ajax request
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            document.getElementById("table_2").innerHTML = "";
            for (var iResult in searchResults) {
                var text = "<tr><td id='getLink' class='getLink' scope='row' onclick='getLinkShare()'>" + searchResults[iResult].pName + "</td><td id='getLinkProfile' class='getLink' onclick='getLinkProfile()'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tRequest + "</td><td>" + searchResults[iResult].pLanguage + "</td><td>" + searchResults[iResult].price + "</td></tr>";
                document.getElementById("table_2").innerHTML += text;
            }
        }
    };
    xhttp.open("GET", "http://localhost/SubShare/server/controler.php?action=searchTable2&keyword=" + keyword, true);
    xhttp.send();
}

function cTable1() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            document.getElementById("table_1").innerHTML = "";
            for (var iResult in searchResults) {
                var text = "<tr><td id='getLink' class='getLink' scope='row' onclick='getLinkShare()'>" + searchResults[iResult].pName + "</td><td id='getLinkProfile' class='getLink' onclick='getLinkProfile()'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tShare + "</td><td>" + searchResults[iResult].pLanguage + "</td></tr>";
                document.getElementById("table_1").innerHTML += text;
            }
        }
    };
    var category = document.getElementById("category").value;
    var time = document.getElementById("time").value;
    var planguage = document.getElementById("planguage").value;

    xhttp.open("GET", "http://localhost/SubShare/server/controler.php?action=cSearchTable1&category=" + category + "&time=" + time + "&planguage=" + planguage);
    xhttp.send();
}

function cTable2(str) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            document.getElementById("table_2").innerHTML = "";
            for (var iResult in searchResults) {
                var text = "<tr><td id='getLink' class='getLink' scope='row' onclick='getLinkShare()'>" + searchResults[iResult].pName + "</td><td id='getLinkProfile' class='getLink' onclick='getLinkProfile()'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tRequest + "</td><td>" + searchResults[iResult].pLanguage + "</td><td>" + searchResults[iResult].price + "</td></tr>";
                document.getElementById("table_2").innerHTML += text;
            }
        }
    };
    var category = document.getElementById("category").value;
    var time = document.getElementById("time").value;
    var planguage = document.getElementById("planguage").value;

    xhttp.open("GET", "http://localhost/SubShare/server/controler.php?action=cSearchTable2&category=" + category + "&time=" + time + "&planguage=" + planguage);
    xhttp.send();
}

function search() {
    //Send Request to sever
    table1();
    table2();
}

function cSearch() {
    //Send Request to sever
    cTable1();
    cTable2();
}