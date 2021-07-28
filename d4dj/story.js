$( document ).ready(function() {
    mw.loader.using('mediawiki.api', function() {
        $('body[class*="Transcripts"] .portable-infobox').addClass('story-transcript');
    });
   $('.story-transcript .portable-infobox:first-child > .pi-item .pi-data .pi-item-spacing > *:nth-child(1)').after(`
<h2 class="pi-item pi-item-spacing pi-title pi-secondary-background" data-source="episode">Story</h2>
`);
});
