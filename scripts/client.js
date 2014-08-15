$(document).ready(function(){
    var container   = $("body > header, body > nav"),
        indexContainer = $("body.index > header, body.index > nav");
        a           = $("body > header a, body > nav a");
        
    indexContainer.addClass("rollover");
    
    a.mouseenter(function() {
        container.addClass("rollover");
        $("body > .content").addClass("inactive");
    });
    
    a.mouseout(function() {
        container.removeClass("rollover");
        $("body > .content").removeClass("inactive");
    });
    
    $(document).on("scroll", function(){
        if ($(document).scrollTop() > 100) {
            indexContainer.removeClass("rollover");
            $("body.index > .content").removeClass("inactive");
        } else {
            indexContainer.addClass("rollover");
            $("body.index > .content").removeClass("inactive");
        }
    });
});