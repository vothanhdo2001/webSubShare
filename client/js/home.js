function table1() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            document.getElementById("table_1").innerHTML = null;
            for (var iResult = 0; iResult < 10; iResult++) {
                var text = "<tr><td id='getLink' class='getLink' scope='row' onclick='getLinkShare()'>" + searchResults[iResult].pName + "</td><td id='getLinkProfile' class='getLink' onclick='getLinkProfile()'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tShare + "</td><td>" + searchResults[iResult].pLanguage + "</td></tr>";
                document.getElementById("table_1").innerHTML += text;
            }
        }
    };
    xhttp.open("GET", "/webSubShare/server/controller.php?action=loadHomeTable1", true);
    xhttp.send();
}
var saveData;

function table2() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            saveData = searchResults;
            document.getElementById("table_2").innerHTML = null;
            for (let iResult = 0; iResult < 10; iResult++) {
                var text = "<tr><td id='getLinkRequest' class='getLink' scope='row' onclick='getLinkRequest()'>" + searchResults[iResult].pName + "</td><td id='getLinkProfile' class='getLink' onclick='getLinkProfile()'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].tRequest + "</td><td>" + searchResults[iResult].pLanguage + "</td><td>" + searchResults[iResult].price + "</td></tr>";
                document.getElementById("table_2").innerHTML += text;
            }
        }
    };

    xhttp.open("GET", "/webSubShare/server/controller.php?action=loadHomeTable2", true);
    xhttp.send();
}

function table3() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            document.getElementById("table_3").innerHTML = "";
            for (let iResult = 0; iResult < 5; iResult++) {
                var text = "<tr><td class='getLink' scope='row' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].sumRate + "</td></tr>";
                document.getElementById("table_3").innerHTML += text;
            }
        }
    };
    xhttp.open("GET", "/webSubShare/server/controller.php?action=loadHomeTable3", true);
    xhttp.send();

}

function table4() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            document.getElementById("table_4").innerHTML = "";
            for (let iResult = 0; iResult < 5; iResult++) {
                var text = "<tr><td class='getLink' scope='row' onclick='getLinkRequest(" + searchResults[iResult].shId + ")'>" + searchResults[iResult].pName + "</td><td class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].rate + "</td></tr>";
                document.getElementById("table_4").innerHTML += text;
            }
        }
    };

    xhttp.open("GET", "/webSubShare/server/controller.php?action=loadHomeTable4", true);
    xhttp.send();
}

function table5() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            document.getElementById("table_5").innerHTML = "";
            for (let iResult = 0; iResult < 5; iResult++) {
                var text = "<tr><td class='getLink' onclick='getLinkProfile(" + searchResults[iResult].cuId + ")'>" + searchResults[iResult].nName + "</td><td>" + searchResults[iResult].postShare + "</td></tr>";
                document.getElementById("table_5").innerHTML += text;
            }
        }
    };
    xhttp.open("GET", "/webSubShare/server/controller.php?action=loadHomeTable5", true);
    xhttp.send();
}

function home() {
    table1();
    table2();
    table3();
    table4();
    table5();
}