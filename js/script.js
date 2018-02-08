var $cat = $('.category');
var $li = $cat.find('li');

$('#box').on("input", function() {

  var inputValue = $.trim(this.value); // Trim values!
  var rgx = new RegExp(inputValue, "i"); // Case insensitive

  // Handle LI elements visibility first
  $li.show().filter(function() {
    return ! rgx.test($(this).text())
  }).hide();

  // Than handle .category wrappers
  $cat.show().filter(function() {
    return ! $(this).find("li:visible").length;
  }).hide();

});