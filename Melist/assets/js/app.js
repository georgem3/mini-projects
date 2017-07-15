// handle todos in js
// cache

// li listener
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// anchor listener
$("ul").on("click", ".anchor", function(event) {
  $(this).parent().toggleClass("prioritise");
  $(this).parent().removeClass("completed");
  $(this).stopPropagation();
});

// trash listener
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() { 
    $(this).remove();
  });
  // avoid event bubbling
  event.stopPropagation();
});

// adding tasks
$("input[type=text]").keypress(function(event) {
  // wait on enter press and non empty tasks
  if(event.which === 13 && $(this).val().length > 0) {
    var todoText = $(this).val();
    // clear input
    $(this).val("");
    $("ul").append("<li><span class='trash'><i class='fa fa-trash'></i></span>" + todoText + "<span class='anchor'><i class='fa fa-anchor'</i></span></li>");
  }
});

// hides input
$(".fa-plus-square-o").click(function() {
  $("input[type=text]").fadeToggle(250);
  alert(x);
});

// theme button listener
$("#theme-btn").click(function() {
  $("body").toggleClass("day");
});
