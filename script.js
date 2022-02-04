$(window).on("load", function () {
  $(".pkiri").addClass("pmuncul");
  $(".pkanan").addClass("pmuncul");
});

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  // Jumbotron
  $(".jumbotron img").css({
    transform: "translate(0px, " + wScroll / 10 + "%)",
  });

  $(".jumbotron h1").css({
    transform: "translate(0px, " + wScroll / 2.5 + "%)",
  });

  $(".jumbotron p").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });

  // Project
  if (wScroll > $("#project").offset().top - 200) {
    $("#project .card").each(function (i) {
      setTimeout(function () {
        $("#project .card").eq(i).addClass("muncul");
      }, 300 * (i + 1));
    });

    // $("#project .card").addClass("muncul");
  }
});

//Parallax
