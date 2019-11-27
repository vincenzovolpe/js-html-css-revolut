$("document").ready(function() {
        $(".menu-item").mouseenter(function() {
            if ($(this).hasClass("lingua")) {
                $(this).children("a").children("span").removeClass("fa fa-angle-down");
                $(this).children("a").children("span").addClass("fa fa-angle-up");
            }
            $(this).children("a").addClass("colore");
            $(this).children('.dropdown-menu').stop().slideDown(300);
        })
            $(".menu-item").mouseleave(function() {
                if ($(this).hasClass("lingua")) {
                    $(this).children("a").children("span").removeClass("fa fa-angle-up");
                    $(this).children("a").children("span").addClass("fa fa-angle-down");
                }
                $(this).children("a").removeClass("colore");
                $(this).children('.dropdown-menu').slideUp(300);
            })
})
