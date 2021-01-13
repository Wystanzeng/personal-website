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

function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }