(function ($) {
    $(document).ready(function ($) {
        fixedMenu();
        unScrollBody();
        initBaseSelect2();
    });

    function fixedMenu() {
        const header = $('header');
        $(window).scroll(function () {
            let scroll = $(window).scrollTop();
            if (scroll >= 500) {
                header.addClass('sticky-header');
            }
            else {
                header.removeClass("sticky-header");
            }
        });
    }

    function unScrollBody() {
        let iconMenu = $('header .navbar-toggler');
        iconMenu.click(function () {
            if (!$('.navbar-collapse').hasClass('show')) {
                $('body').addClass('overflow-hidden');
            }
            else {
                $('body').removeClass('overflow-hidden');
            }
        });
    }

    function initBaseSelect2() {
        $(".custom-select").select2({
            maximumSelectionLength: 2
        });
    }

})(jQuery);