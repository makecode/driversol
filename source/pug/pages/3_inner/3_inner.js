import './../base';

$( document ).ready(function() {

  const hardware =  $('.toggle');

  hardware.each(function (index, element) {
    $(element).click(function () {
      $(element).next().toggle(300);
    });
  });

});