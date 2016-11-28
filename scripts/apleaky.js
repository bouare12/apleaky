var NAV = {
    toggleActive: function (li) {
        $(li).toggleClass('active');
    },

    handleDisplay: function (anchor) {
        if (anchor.parent().hasClass('active')) {
            $(anchor).siblings('ul').slideDown(30);
        } else {
            $(anchor).siblings('ul').slideUp(30);
        }
    },

    attachEvents: function (nav) {
        nav.click(function(event) {
            if ($(event.target).siblings('ul').length > 0) {
                event.preventDefault();
                NAV.toggleActive($(event.target).parent());
                NAV.handleDisplay($(event.target));
            }
        });
    },

    init: function () {
        NAV.attachEvents($('nav'));
    }
}

NAV.init();

