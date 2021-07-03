function table1() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            document.getElementById("table_1").innerHTML = "";
            document.getElementById("noData_1").innerHTML = "";
            for (let iResult = 0; iResult < 10; iResult++) {
                var text = "<tr><td  class='getLink' scope='row' onclick='getLinkShare(" + searchResults[iResult].shId + ")'>" + searchResults[iResult].pName + "</td><td  class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tShare + "</td><td>" + searchResults[iResult].pLanguage + "</td></tr>";
                document.getElementById("table_1").innerHTML += text;
            }
        }
    };

    xhttp.open("GET", "/webSubShare/server/controller.php?action=loadCategoryTable1", true);
    xhttp.send();
}

function table2() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            document.getElementById("table_2").innerHTML = "";
            document.getElementById("noData_2").innerHTML = "";
            for (let iResult = 0; iResult < 10; iResult++) {
                var text = "<tr><td  class='getLink' scope='row' onclick='getLinkShare(" + searchResults[iResult].shId + ")'>" + searchResults[iResult].pName + "</td><td  class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tShare + "</td><td>" + searchResults[iResult].pLanguage + "</td></tr>";
                document.getElementById("table_2").innerHTML += text;
            }
        }
    };

    xhttp.open("GET", "/webSubShare/server/controller.php?action=loadCategoryTable2", true);
    xhttp.send();
}

function table3() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            document.getElementById("table_3").innerHTML = "";
            document.getElementById("noData_3").innerHTML = "";
            for (let iResult = 0; iResult < 10; iResult++) {
                var text = "<tr><td  class='getLink' scope='row' onclick='getLinkShare(" + searchResults[iResult].shId + ")'>" + searchResults[iResult].pName + "</td><td  class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tShare + "</td><td>" + searchResults[iResult].pLanguage + "</td></tr>";
                document.getElementById("table_3").innerHTML += text;
            }
        }
    };

    xhttp.open("GET", "/webSubShare/server/controller.php?action=loadCategoryTable3", true);
    xhttp.send();
}

function table4() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            document.getElementById("table_4").innerHTML = "";
            document.getElementById("noData_4").innerHTML = "";
            for (let iResult = 0; iResult < 10; iResult++) {
                var text = "<tr><td  class='getLink' scope='row' onclick='getLinkShare(" + searchResults[iResult].shId + ")'>" + searchResults[iResult].pName + "</td><td  class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tShare + "</td><td>" + searchResults[iResult].pLanguage + "</td></tr>";
                document.getElementById("table_4").innerHTML += text;
            }
        }
    };

    xhttp.open("GET", "/webSubShare/server/controller.php?action=loadCategoryTable4", true);
    xhttp.send();
}

function home() {
    table1();
    table2();
    table3();
    table4();
}