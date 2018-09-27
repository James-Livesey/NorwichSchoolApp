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

            // $(this).css({
            //     "padding-right": "0px",
            //     "width": "300px"
            // });
        })

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
        })
    });
});