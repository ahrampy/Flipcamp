var distTop;

// function setSize () {

// }

$(window).on("load resize", function (e) {
  distTop = $("#site-show-widget-container").offset().top;
  mapSize =
    $(window).height() - $("#site-show-widget-container").height() - 135;
  $(".site-show-widget-map-container").css({ height: mapSize });
});

// $(window).resize(function (e) {
//   distTop = $("#site-show-widget-container").offset().top;
// });

$(window).scroll(function (e) {
  var $bookWidget = $("#site-show-widget-container");
  var isPositionFixed = $bookWidget.css("position") == "fixed";
  if ($(this).scrollTop() > distTop && !isPositionFixed) {
    $bookWidget.css({ position: "fixed", top: "75px", bottom: "" });
  }
  if ($(this).scrollTop() < distTop && isPositionFixed) {
    $bookWidget.css({ position: "absolute", top: "", bottom: "0px" });
  }
});
