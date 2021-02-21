console.log("Your index.js file has loaded correctly!");

$(".link").mouseenter(function() {
  $(this).addClass('link-selected');
});

$(".link").mouseleave(function() {
  $(this).removeClass('link-selected');
});