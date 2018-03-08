function showPass() {
    var x = document.getElementsByName("user_password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}