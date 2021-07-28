                
 $( document ).ready(function() {
    mw.loader.using('mediawiki.api', function() {
        $('body[class*="Transcripts"] .portable-infobox').addClass('story-transcript');
    });
});
