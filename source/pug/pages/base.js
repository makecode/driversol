import './../../styles/main.sass';

$( document ).ready(function() {
  const $langContainer = $('#lang-select');
  const $langItems = $('#lang-select .language__el');
  const $langActive = $('#lang-select .language__active');
  let activeLang = 'en';

  $($langContainer).click(function() {
    $(this).toggleClass('opened');
  });

  $($langItems).each(function() {
    $(this).click(switchLang);
  });

  function switchLang() {
    activeLang = $(this).attr('data-lang');

    $($langItems).each(function(i, el) {
      const attr = $(el).attr('data-lang');
      const text = $(el).text();

      $(el).removeClass('selected');

      if (attr === activeLang) {
        $(el).addClass('selected');
        $($langActive).text(text);
      }
    })
  }

});