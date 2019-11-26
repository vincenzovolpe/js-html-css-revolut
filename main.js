$("document").ready(function() {
        $(".menu-item").mouseover(function() {
            if (!$(this).hasClass("lingua")) {
                $(this).children("#attivo").addClass("colore");
                $(this).children('.dropdown-menu').stop().slideDown(300);
            } else {
                $(this).children("a").children("span").removeClass("fa fa-angle-down");
                $(this).children("a").children("span").addClass("fa fa-angle-up");
                    $(this).children("#attivo").addClass("colore");
                $(this).children('.dropdown-menu').stop().slideDown(300);
            }
        })
            $(".menu-item").mouseout(function() {
                if (!$(this).hasClass("lingua")) {
                    $(this).children("#attivo").removeClass("colore");
                    $(this).children('.dropdown-menu').stop().slideUp(300);
                } else {
                    $(this).children("a").children("span").removeClass("fa fa-angle-up");
                    $(this).children("a").children("span").addClass("fa fa-angle-down");
                    $(this).children("#attivo").removeClass("colore");
                    $(this).children('.dropdown-menu').stop().slideUp(300);
            }
            })
})
