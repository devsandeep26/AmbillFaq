$(document).ready(function () {
    $(".set > a").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
                .siblings(".content")
                .slideUp(200);
            $(".set > a i")
                .removeClass("fa-angle-down")
                .addClass("fa-angle-up");
        } else {
            $(".set > a i")
                .removeClass("fa-angle-up")
                .addClass("fa-angle-down");
            $(this)
                .find("i")
                .removeClass("fa-angle-down")
                .addClass("fa-angle-up");
            $(".set > a").removeClass("active");
            $(this).addClass("active");
            $(".content").slideUp(200);
            $(this)
                .siblings(".content")
                .slideDown(200);
        }
    });
    $('#t1').click(function (e) {
        e.preventDefault();
        $('#t2,#t3').removeClass('context-selector-selected');
        $("#t1").addClass('context-selector-selected');
        $('#Android').css('display', "block");
        $('#IOS').css('display', "none");
        $('#Desktop').css('display', 'none');
    })
    $('#t2').click(function (e) {
        e.preventDefault();
        $('#t1, #t3').removeClass('context-selector-selected');
        $("#t2").addClass('context-selector-selected');
        $('#Android').css('display', "none");
        $('#Desktop').css('display', "none");
        $('#IOS').css('display', "block");
    })
    $('#t3').click(function (e) {
        e.preventDefault();
        $('#t1, #t2').removeClass('context-selector-selected')
        $("#t3").addClass('context-selector-selected');
        $('#Android').css('display', "none");
        $('#Desktop').css('display', "block");
        $('#IOS').css('display', "none");
    })
});