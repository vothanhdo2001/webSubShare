function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function register() {

}

function login() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            document.getElementById("notification").innerHTML = "";
            var iResult = searchResults[0].cuId;
            var nResult = searchResults[0].nName;
            if (iResult <= 0) {
                var text = '<div class="card bg-danger border-1 h-100 "> <div class="card-body p-0 p-lg-0 pt-0 pt-lg-0 "> <p><b>Thông tin đăng nhập không chính xác !!!</b></p> </div> </div>';
                document.getElementById("notification").innerHTML += text;
            } else {
                setCookie("cuId", iResult, 10);
                setCookie("nName", nResult, 10);
                window.location = "/webSubShare/client/narbar/profile.html";
            }

        }
    };

    var mail = document.getElementById("mail").value;
    var pass = document.getElementById("pass").value;
    var url = "/webSubShare/server/controller.php?action=login&mail=" + mail + "&pass=" + pass;
    // alert(url);
    //Send Ajax request
    xhttp.open("GET", url, true);
    xhttp.send();
}
onclick = function hide() {
    document.getElementById("notification").innerHTML = "";
}