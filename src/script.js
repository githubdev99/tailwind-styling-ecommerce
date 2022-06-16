$(function () {
  $(".toggle-flyout").click(function (e) {
    e.preventDefault();

    let elementTarget = $(`${$(this).data("target")}`)

    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      elementTarget
        .removeClass("hidden fade-out")
        .addClass("fade-in");
    } else {
      elementTarget
        .removeClass("fade-in")
        .addClass("fade-out");

        setTimeout(() => {
            elementTarget.addClass('hidden')
        }, 200)
    }
  });

  $('.toggle-cart-panel').click(function (e) { 
    e.preventDefault();
    
    let elementTarget = $(`${$(this).data("target")}`)
  });
});
