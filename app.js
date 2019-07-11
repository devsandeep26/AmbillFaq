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
// TODO: this got hacky quick..... needs major refactor
//       hide the two icons if the search box is below a certain size.
$(document).ready(function () {
    $('.mdh-toggle-search').click(function () {
        // No search bar is currently shown
        if ($(this).find('i').text() == 'search') {
            $(this).find('i').text('cancel');
            $(this).removeClass('mdl-cell--hide-tablet mdl-cell--hide-desktop'); // Ensures the close button doesn't disappear if the screen is resized.

            $('.mdl-layout__drawer-button, .mdl-layout-title, .mdl-badge, .mdl-layout-spacer').hide();
            $('.mdl-layout__header-row').css('padding-left', '16px'); // Remove margin that used to hold the menu button
            $('.mdh-expandable-search').removeClass('mdl-cell--hide-phone').css('margin', '0 16px 0 0');

        }
        // Search bar is currently showing
        else {
            $(this).find('i').text('search');
            $(this).addClass('mdl-cell--hide-tablet mdl-cell--hide-desktop');

            $('.mdl-layout__drawer-button, .mdl-layout-title, .mdl-badge, .mdl-layout-spacer').show();
            $('.mdl-layout__header-row').css('padding-left', '');
            $('.mdh-expandable-search').addClass('mdl-cell--hide-phone').css('margin', '0 50px');
        }

    });
});