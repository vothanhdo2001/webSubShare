function getLinkProfile() {

}

function getLinkShare() {

}

function getLinkRequest() {

}




function deleteShare(shId) {

    var xhttp = new XMLHttpRequest();
    var url = "/webSubShare/server/controller.php?action=deleteShare&shId=" + shId;
    xhttp.open("GET", url, true);
    xhttp.send();
    location.reload();
}

function editShare(shId) {
    document.cookie = shId;
}

function deleteRequest(reId) {
    var xhttp = new XMLHttpRequest();
    var url = "/webSubShare/server/controller.php?action=deleteRequest&reId=" + reId;
    xhttp.open("GET", url, true);
    xhttp.send();
    location.reload();
}

function editRequest(reId) {
    document.cookie = reId;
}

function previous() {
    window.location = "http://www.vietjack.com";
}

function next() {
    window.location = "http://www.vietjack.com";
}