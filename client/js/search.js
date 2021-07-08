var table1, table2;

function table1() {
    // Send Request to sever
    var keyword = document.getElementById("txtKeyword").value;
    // Make Ajax request
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            table1 = this.responseText;
            document.getElementById("table_1").innerHTML = "";
            document.getElementById("noData_1").innerHTML = "";
            for (let iResult = 0; iResult < 10; iResult++) {
                var text = "<tr><td  class='getLink' scope='row' onclick='getLinkShare(" + searchResults[iResult].shId + ")'>" + searchResults[iResult].pName + "</td><td  class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tShare + "</td><td>" + searchResults[iResult].pLanguage + "</td></tr>";
                document.getElementById("table_1").innerHTML += text;
            }
        }
    };
    xhttp.open("GET", "/webSubShare/server/controller.php?action=searchTable1&keyword=" + keyword, true);
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
            table2 = this.responseText;
            document.getElementById("table_2").innerHTML = "";
            document.getElementById("noData_2").innerHTML = "";
            for (let iResult = 0; iResult < 10; iResult++) {
                var text = "<tr><td  class='getLink' scope='row' onclick='getLinkRequest(" + searchResults[iResult].reId + ")'>" + searchResults[iResult].pName + "</td><td  class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tRequest + "</td><td>" + searchResults[iResult].pLanguage + "</td><td>" + searchResults[iResult].price + "</td></tr>";
                document.getElementById("table_2").innerHTML += text;
            }
        }
    };
    xhttp.open("GET", "/webSubShare/server/controller.php?action=searchTable2&keyword=" + keyword, true);
    xhttp.send();
}

function cTable1() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            table1 = this.responseText;
            document.getElementById("table_1").innerHTML = "";
            document.getElementById("noData_1").innerHTML = "";
            for (let iResult = 0; iResult < 10; iResult++) {
                var text = "<tr><td  class='getLink' scope='row' onclick='getLinkShare(" + searchResults[iResult].shId + ")'>" + searchResults[iResult].pName + "</td><td  class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tShare + "</td><td>" + searchResults[iResult].pLanguage + "</td></tr>";
                document.getElementById("table_1").innerHTML += text;
            }
        }
    };
    var category = document.getElementById("category").value;
    var time = document.getElementById("time").value;
    var planguage = document.getElementById("planguage").value;

    xhttp.open("GET", "/webSubShare/server/controller.php?action=cSearchTable1&category=" + category + "&time=" + time + "&planguage=" + planguage);
    xhttp.send();
}

function cTable2(str) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            table2 = this.responseText;
            document.getElementById("table_2").innerHTML = "";
            document.getElementById("noData_2").innerHTML = "";
            for (let iResult = 0; iResult < 10; iResult++) {

                var text = "<tr><td  class='getLink' scope='row' onclick='getLinkRequest(" + searchResults[iResult].reId + ")'>" + searchResults[iResult].pName + "</td><td  class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tRequest + "</td><td>" + searchResults[iResult].pLanguage + "</td><td>" + searchResults[iResult].price + "</td></tr>";
                document.getElementById("table_2").innerHTML += text;
            }
        }
    };
    var category = document.getElementById("category").value;
    var time = document.getElementById("time").value;
    var planguage = document.getElementById("planguage").value;

    xhttp.open("GET", "/webSubShare/server/controller.php?action=cSearchTable2&category=" + category + "&time=" + time + "&planguage=" + planguage);
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