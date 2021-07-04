function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function register() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        var searchResults = JSON.parse(this.responseText);
        var iResult = searchResults[0].cuId;
        if (iResult <= 0) {
            var text = '<div class="card bg-danger border-1 h-100 "> <div class="card-body p-0 p-lg-0 pt-3 pt-lg-3 "> <p><b>Tài khoản đã tồn tại !!!</b></p> </div> </div>';
            document.getElementById("notification").innerHTML += text;
        }
        else{
            var text = '<div class="card bg-success border-1 h-100 "> <div class="card-body p-0 p-lg-0 pt-3 pt-lg-3 "> <p><b>Đăng ký thành công</b></p> </div> </div>';
            document.getElementById("notification").innerHTML += text;
            setTimeout(function() { window.location = "/webSubShare/client/account/login.html";}, 1000);
        }
    }
    }
    var nName = document.getElementById("nName").value;
    var sex = document.getElementById("sex").value;
    var mail = document.getElementById("mail").value;
    var pass = document.getElementById("pass").value;
    var introduce = document.getElementById("introduce").value;
    var cpass = document.getElementById("cpass").value;
    
    if(pass == cpass)
    {
        var url = "/webSubShare/server/controller.php?action=register&nName=" + nName + "&sex=" + sex + "&mail=" + mail + "&pass=" + pass + "&introduce=" + introduce;
        xhttp.open("GET", url, true);
        
        xhttp.send();
    }
    else {
        alert("Đăng ký thất bại");
        // var text = '<div class="card bg-danger border-1 h-100 "> <div class="card-body p-0 p-lg-0 pt-3 pt-lg-3 "> <p><b>Thông tin đăng nhập không chính xác !!!</b></p> </div> </div>';
        // document.getElementById("notification").innerHTML += text;
    }

}

function login() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var searchResults = JSON.parse(this.responseText);
            document.getElementById("notification").innerHTML = "";
            var iResult = searchResults[0].cuId;
            var nResult = searchResults[0].nName;
            var rResult = searchResults[0].cuRank;
            if (iResult <= 0) {
                var text = '<div class="card bg-danger border-1 h-100 "> <div class="card-body p-0 p-lg-0 pt-3 pt-lg-3 "> <p><b>Thông tin đăng nhập không chính xác !!!</b></p> </div> </div>';
                document.getElementById("notification").innerHTML += text;
            } else if (searchResults[0].cuStatus == "disnable") {
                var text = '<div class="card bg-warning border-1 h-100 "> <div class="card-body p-0 p-lg-0 pt-3 pt-lg-3 "> <p><b>Tài khoảng của bạn đã bị khoá vui lòng liên hệ quản trị viên để được hỗ trợ !!!</b></p> </div> </div>';
                document.getElementById("notification").innerHTML += text;
            } else {
                setCookie("cuId", iResult, 10);
                setCookie("nName", nResult, 10);
                setCookie("cuRank", rResult, 10);
                var text = '<div class="card bg-success border-1 h-100 "> <div class="card-body p-0 p-lg-0 pt-3 pt-lg-3 "> <p><b>Đăng nhập thành công</b></p> </div> </div>';
                document.getElementById("notification").innerHTML += text;
                setTimeout(function() { window.location = "/webSubShare/client/narbar/profile.html"; }, 1000);
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