$(document).ready(function(){
    var header      = $("body > header, body > nav"),
        headerIndex = $("body.index > header, body.index > nav"),
        headerLink  = $("body > header a, body > nav a"),
        nav         = $("body > nav"),
        content     = $("body > .content"),
        article     = $("body > .content > article");
        
    /* setBackground(); */
    
    /*
function setBackground() {
        var imageSrc    = $("body > .content > article .body img").first().attr("src");
        $("body").css("background-image", "url('" + imageSrc + "');");
        console.log(imageSrc);
    }*/

    focusHeader();
        
    /*
setTimeout(function() {
        focusContent();
    }, 4000);
*/
    
    headerLink.mouseenter(function() {
        focusHeader();
    });
    
    headerLink.mouseout(function() {
        focusContent();
    });
    
    $(document).on("scroll", function(){
        if ($(document).scrollTop() > 0) { // Not at top
            focusContent();
        } else { // At top
            focusHeader();
        }
    });
    
    article.mouseenter(function() {
        focusContent();
    });
    
    function focusContent() {
        header.removeClass("rollover");
        content.removeClass("inactive");
    }
    
    function focusHeader() {
        header.addClass("rollover");
        content.addClass("inactive");
    }
    
});