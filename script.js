function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

$(function() {
    $("input[type='email']").each(function() {
        $(this).next().children().css({
            "padding-left": "315px",
            "width": "0px",
            "transition": "1s"
        });

        $(this).focus(function() {
            $(this).next().children().css({
                "padding-left": "0px",
                "width": "300px"
            });
        });

        $(this).blur(function() {      
            if ($(this).val() == "") {
                $(this).next().children().css({
                    "padding-left": "315px",
                    "width": "0px"
                });
            } else {
                $(this).next().children().css({
                    "padding-left": "0px",
                    "width": "300px"
                });
            }
        });

        $(this).on("input", function() {      
            if ($(this).val() != "" && !validateEmail($(this).val() + "@norwich-school.org.uk")) {
                $(this).css("color", "red");
            } else {
                $(this).css("color", "black");
            }
        });
    });
});