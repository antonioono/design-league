$(document).ready(function(){
    var header      = $("body > header, body > nav"),
        headerIndex = $("body.index > header, body.index > nav"),
        headerLink  = $("body > header a, body > nav a"),
        nav         = $("body > nav"),
        content     = $("body > .content"),
        article     = $("body > .content > article"),
        bg          = $("body .bg"),
        isIndex     = $("body").hasClass("index"),
        isPost      = !isIndex;
        
    setBackground();
    
    function setBackground() {
        var imageSrc    = $("body > .content > article .body img").eq(1).attr("src");
        bg.css("background-image", "url('"+imageSrc+"')");
        console.log("url('" + imageSrc + "');");
    }

    focusHeader();
    
    if (isIndex) content.removeClass("inactive");
       
    setTimeout(function() {
        focusContent();
    }, 3000);
    
    headerLink.mouseenter(function() {
        if (isPost) {
            focusHeader();
        } else { // Index
            if ($(document).scrollTop() < 1) { // At top
                focusBoth()
            } else { // Not at top, default behavior
                focusHeader();
            }
        }
    });
    
    headerLink.mouseout(function() {
        if (isPost) {
            focusContent();
        } else { // Index
            if ($(document).scrollTop() < 1) { // At top
                focusBoth();
            } else { // Not at top, default behavior
                focusContent();
            }
        }
    });
    
    article.mouseenter(function() {
        if (isPost) {
            focusContent();
            console.log("ISPOST");
        } else {
            if ($(document).scrollTop() < 1) { // At top
                focusBoth();
            } else { // Not at top, default behavior
                focusContent()
            }
        }
    });
    

    $(document).on("scroll", function(){
        if ($(document).scrollTop() > 0) { // Not at top
            focusContent();
        } else { // At top
            focusHeader();
            if (isIndex) content.removeClass("inactive");
        }
    });
    
    function focusContent() {
        header.removeClass("rollover");
        content.removeClass("inactive");
        bg.addClass("muted");
    }
    
    function focusHeader() {
        header.addClass("rollover");
        content.addClass("inactive");
        bg.removeClass("muted");
    }
    
    function focusBoth() {
        header.addClass("rollover");
        content.removeClass("inactive");
    }
    
});