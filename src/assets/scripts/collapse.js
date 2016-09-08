//collapse
(function ( $ ) {
  $.fn.collapseContent = function(){
    $(this).each(function(){
      var self = $(this);
      var target = $(this).attr('data-collapsecontent');
      $(this).click(function(e){
        e.preventDefault();
        $(target).toggleClass('open');
        $(this).toggleClass('active');
        if( $(this).hasClass('hamburger') ) { $(this).toggleClass('is-active'); }
      });
      $(target+' .close-collapse').click(function(){
        $(target).removeClass('open');
        self.removeClass('active');
      });
    });
  };

  $('[data-collapsecontent]').collapseContent();
}( jQuery ));
