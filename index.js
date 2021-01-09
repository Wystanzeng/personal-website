$(".navigation__list-item").click(function(){
    $(".navigation__active").removeClass("navigation__active");
    $(this).addClass("navigation__active");
    $("#page-active").removeAttr("id");
    $("." + $(this).attr("name")).attr("id", "page-active");
})


$(".home__contact-button").click(function(){
    $(".navigation__active").removeClass("navigation__active");
    $("[name='resume']").addClass("navigation__active");
    $("#page-active").removeAttr("id");
    $(".resume").attr("id", "page-active");
})