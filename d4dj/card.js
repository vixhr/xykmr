$( document ).ready(function() {
    mw.loader.using('mediawiki.api', function() 
       addCategories();

        $('body[class*="Cards"] .quote').addClass('cardQuote');
});

// addcategories - code creds jeaoq(kyuu)
function addCategories(){
    (function($, mw) {
    var fn = function() {
        var cats = mw.config.get('wgCategories'), newClasses;
        if (cats) {
        newClasses = $.map(cats, function(el) {
            return 'cat-' + encodeURIComponent(el.replace(/[ .]/g, '_')).replace(/%/g, '_');
        }).join(' ');
        $(document.body).addClass(newClasses);
        // console.log(newClasses);
        }
    };
    if (document.body) {
        fn();
    } else {
        $(fn);
    }
    })(jQuery, mw);

}

var cssStyle = document.createElement('link');
cssStyle.href = 'https://vixhr.github.io/mediawiki/d4dj/card.css';
cssStyle.rel = 'stylesheet';
document.head.appendChild(cssStyle);
