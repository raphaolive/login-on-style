$("input").focus(function () {
  $(this).parents(".form-group").addClass("focused");
});

$("input").blur(function () {
  var inputValue = $(this).val();
  if (inputValue == "") {
    $(this).removeClass("filled");
    $(this).parents(".form-group").removeClass("focused");
  } else {
    $(this).addClass("filled");
  }
});

$(".fa-solid").click(() => {
  if ($(".fa-solid").hasClass("fa-moon")) {
    $(".fa-solid").removeClass("fa-moon").addClass("fa-sun");
    $("#formSide").removeClass('light-form').addClass("dark-form");
    return;
  }
  $(".fa-solid").removeClass("fa-sun").addClass("fa-moon");
  $("#formSide").removeClass('dark-form').addClass("light-form");
});

