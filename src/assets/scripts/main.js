$(document).ready(function(){
  $('.main-header .hamburger').click(function(){
    $(this).toggleClass('is-active');
  });

});


var items = $('a, abbr, acronym, address, applet, area, audio, b, base, ' +
    'basefont, bdo, bgsound, big, body, blockquote, br, button, canvas, ' +
    'caption, center, cite, code, col, colgroup, comment, custom, dd, del, ' +
    'dfn, dir, div, dl, document, dt, em, embed, fieldset, font, form, frame, ' +
    'frameset, head, hn, hr, html, i, iframe, img, input, ins, isindex, kbd, ' +
    'label, legend, li, link, listing, map, marquee, media, menu, meta, ' +
    'nextid, nobr, noframes, noscript, object, ol, optgroup, option, p, ' +
    'param, plaintext, pre, q, rt, ruby, s, samp, script, select, small, ' +
    'source, span, strike, strong, style, sub, sup, table, tbody, td, ' +
    'textarea, tfoot, th, thead, title, tr, tt, u, ul, var, wbr, video, ' +
    'window, xmp'), itemslen = items.length;

items.bind('load', function(){
    $('.page-overlay').removeClass('in');
});
