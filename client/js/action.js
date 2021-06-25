// function getLinkDownload() {

// }

// function getLinkProfile() {

// }

// function getLinkShare() {

// }

// function getLinkRequest() {

// }

// function addSub() {

// }

// function sendRate() {

// }

function deleteShare(shId) {

    var xhttp = new XMLHttpRequest();
    var url = "http://localhost/webSubShare/server/controller.php?action=deleteShare&shId=" + shId;
    xhttp.open("GET", url, true);
    xhttp.send();
    location.reload();
}

function editShare(shId) {
    document.cookie = shId;
}

function deleteRequest(reId) {
    var xhttp = new XMLHttpRequest();
    var url = "http://localhost/webSubShare/server/controller.php?action=deleteRequest&reId=" + reId;
    xhttp.open("GET", url, true);
    xhttp.send();
    location.reload();
}

function editRequest(reId) {
    document.cookie = reId;
}