function setMode(mode) {
    if (mode == "beta") {
        $("#beta").show();
        $("#signIn").hide();
        $("#signUp").hide();
    } else if (mode == "signIn") {
        $("#beta").hide();
        $("#signIn").show();
        $("#signUp").hide();
    } else if (mode == "signUp") {
        $("#beta").hide();
        $("#signIn").hide();
        $("#signUp").show();
    }
}

$(function() {
    setMode(getURLParameter("go"));
});