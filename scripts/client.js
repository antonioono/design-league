$(document).ready(function(){
    var container   = $("body > header, body > nav"),
        a           = $("body > header a, body > nav a");
        
    container.addClass("rollover");
    
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
            container.removeClass("rollover");
            $("body > .content").removeClass("inactive");
        } else {
            container.addClass("rollover");
            $("body > .content").removeClass("inactive");
        }
    });
});