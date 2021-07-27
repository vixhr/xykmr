// imported js for ytsample
$(function loader() {
    if (document.querySelector('.ytvideo') !== null) {
        load(".ytvideo",
            "<div style='width: 300px; overflow: hidden; height: 200px; margin-top: 5px; margin-bottom: 5px; margin-right: 5px; position:relative; top:0; border: 3px solid #0f0f0f; border-radius:10px'><iframe width='300' height='200' src='https://www.youtube.com/embed/",
            "?version=3&hl=en_US&theme=dark&color=white&loop=1&showinfo=0&autohide=0&disablekb=1&autoplay=0' frameborder='0' allowfullscreen=0></iframe></div>");
    }
    if (document.querySelector('.ytsample') !== null) {
        load(".ytsample",
            "<div style='width: 202px; overflow: hidden; height: 21px; margin-top: 5px; margin-bottom: 5px; margin-right: 5px; position:relative; top:0; border: 3px solid #0f0f0f; border-radius:10px'><iframe width='202px' height='21' src='https://www.youtube.com/embed/",
            "?version=3&hl=en_US&theme=dark&color=white&loop=1&showinfo=0&autohide=0&disablekb=1&autoplay=0' frameborder='0' allowfullscreen=0></iframe></div>");
    }
    if (document.querySelector('.tmsample') !== null) {
        load(".tmsample",
            "<source lang='html4strict'><div style='height:21px; width:202px; overflow:hidden; margin-top: 5px; margin-bottom: 5px; margin-right: 5px; background:#000000; border: 3px solid #0f0f0f; border-radius:10px'><audio controls='controls' style='width:202px'><source src='https://",
            "' type='audio/mp3'/></audio></div></source>");
    }
});

function load(sample, template1, template2) {
    $(sample).first().ready(function() {
        var id = document.querySelector(sample).title;
        $(sample).first().append(template1 + id + template2);
    });
    if ($(sample).length >= 2) {
        $(sample).eq(1).ready(function() {
            var id = document.querySelectorAll(sample)[1].title;
            $(sample).eq(1).append(template1 + id + template2);
        });
    }
    if ($(sample).length >= 3) {
        $(sample).eq(2).ready(function() {
            var id = document.querySelectorAll(sample)[2].title;
            $(sample).eq(2).append(template1 + id + template2);
        });
    }
    if ($(sample).length >= 4) {
        $(sample).eq(3).ready(function() {
            var id = document.querySelectorAll(sample)[3].title;
            $(sample).eq(3).append(template1 + id + template2);
        });
    }
}
