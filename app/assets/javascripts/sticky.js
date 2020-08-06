var dist;

$(window).load(function(e) {
  dist = $("#site-show-widget-container").offset().top;
})

$(window).resize(function (e) {
  dist = $("#site-show-widget-container").offset().top;
})

$(window).scroll(function (e) {
  var $bookWidget = $("#site-show-widget-container");
  var isPositionFixed = $bookWidget.css("position") == "fixed";
  if ($(this).scrollTop() > dist && !isPositionFixed) {
    $bookWidget.css({ position: "fixed", top: "75px", bottom: "" });
  }
  if ($(this).scrollTop() < dist && isPositionFixed) {
    $bookWidget.css({ position: "absolute", top: "", bottom: "0px" });
  }
});