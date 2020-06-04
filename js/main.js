   $(document).ready(function() {

    var array = [
      [
        '.main-header .mobile-wrap',
        '.main-header .main-header__list',
        '.main-header .line-burger'
      ],
      [
        '.main-header .main-header__inner',
        '.main-header .main-header__catalog'
      ],
      [
        '.main-header .main-header__inner',
        '.main-header .main-header__catalog'
      ],
    ];

    function setEvent(selector1, selector2, selector3) {
      $(selector1).on('click', function() {
        $(selector2).slideToggle();
        $(selector3).toggleClass('line-active');
      });
    }

    array.forEach(selectors => setEvent(selectors[0], selectors[1], selectors[2]));

        $(window).resize(function() {
      if ($(window).width() >= 840) {
        $('.main-header__list').attr('style', '');
        $('.line-burger').removeClass('line-active');
      }
    });

});