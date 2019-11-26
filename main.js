$("document").ready(function() {
    $(".menu-item").mouseover(function() {
        //$(this).children('a').addClass('.hover');
        $(this).children('.dropdown-menu').stop().slideDown(300);
    })
    $(".menu-item").mouseout(function() {
        //$(this).children('a').removeClass('.hover');
        $(this).children('.dropdown-menu').stop().slideUp(300);
    })

})
