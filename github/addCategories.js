(function($, mw) {
  var fn = function() {
    var cats = mw.config.get('wgCategories'), newClasses;
    if (cats) {
      newClasses = $.map(cats, function(el) {
        return 'cat-' + encodeURIComponent(el.replace(/[ .]/g, '_')).replace(/%/g, '_');
      }).join(' ');
      $(document.body).addClass(newClasses);
    }
  };
  if (document.body) {
    fn();
  } else {
    $(fn);
  }
})(jQuery, mw);
