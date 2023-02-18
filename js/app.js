// vaild date
function data() {
    let username = document.getElementById("user").value;
    let emailadd = document.getElementById("email").vlaue;
    let pass = document.getElementById("password").value;
    let date = document.getElementById("db").value;
    let reguler = new RegExp("[A-Z][A-Z0-9]{5,32}@[A-Z][A-Z0-9]{3,32}.[A-Z]{2,5}")
    let vaild = true;
    if (username == "") {
        document.getElementById("suser").innerText = "required";
        vaild = false;
    }
    else if (username.indexOf(" ") > 0) {
        document.getElementById("suser").innerText = "can not use space!";
        vaild = false

    }
    else {
        document.getElementById("suser").innerText = "";

    }
    if (emailadd == "") {
        document.getElementById("semail").innerText = "required"
        vaild = false;
    }
    else if (!reguler.test(emailadd)) {
        document.getElementById("semail").innerText = "Invalid your emali address"
    }
    else {
        document.getElementById("semail").innerText = ""

    }
    if (pass == "") {
        document.getElementById("spassword").innerText = "required"
        vaild = false;
    }
    else {
        document.getElementById("spassword").innerText = ""

    }
    if (date == "") {
        document.getElementById("sbd").innerText = "required"
        vaild = false;
    }
    else {
        document.getElementById("sbd").innerText = ""

    }
    window.setTimeout(time, 8000)
    return vaild;
}
// time function 
function time() {
    document.getElementById("suser").innerText = ""
    document.getElementById("semail").innerText = ""
    document.getElementById("spassword").innerText = ""
    document.getElementById("sbd").innerText = ""

}