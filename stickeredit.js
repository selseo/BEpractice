$(document).ready(function(){
    var angle=0;
    $(".sticker").draggable({
        cursor: "move",
        appendTo: "body",
        helper: "clone"
                

    });
    $(".dropped").droppable({
        drop: function( event, ui ) {
            var overlayleft = $("#overlay").offset().left;
            var overlaytop = $("#overlay").offset().top;
            $(ui.draggable).clone().css({"left": ui.position.left-overlayleft, "top": ui.position.top-overlaytop , "position":"absolute"}).appendTo(this);
            var pos = ui.draggable.position();
        }   
    });

    $("#overlay").on("click","img",function(e) {
        e.preventDefault();
        $("img").removeClass("selected");
        $(this).addClass("selected");
    });

    $('#overlay').click( function (e) { 
        if ( e.target == this ) {
        $("img").removeClass("selected");}
    });

    $(document).keypress(function(e) {
        if(e.keyCode == 37 && !e.shiftKey) {
            $( ".selected" ).animate({ "left": "-=5px"},10);
        }
        if(e.keyCode == 39 && !e.shiftKey) {
            $( ".selected" ).animate({ "left": "+=5px" },10);
        }
        if(e.keyCode == 38 && !e.shiftKey) {
            $( ".selected" ).animate({ "top": "-=5px" },10);
        }
        if(e.keyCode == 40 && !e.shiftKey) {
            $( ".selected" ).animate({ "top": "+=5px" },10);
        }

                

        
        if(e.keyCode == 37 && e.shiftKey) {
            angle-=5;
            $( ".selected" ).css({ transform: "rotate("+angle+"deg)" });
        }
        if(e.keyCode == 39 && e.shiftKey) {
            angle+=5;
            $( ".selected" ).css({ transform: "rotate("+angle+"deg)" });
        }
        if(e.keyCode == 38 && e.shiftKey) {
            $( ".selected" ).animate({ "width": "+=1%"});
        }
        if(e.keyCode == 40 && e.shiftKey) {
            $( ".selected" ).animate({ "width": "-=1%"});
        }
        if(e.keyCode == 8){
            $( ".selected" ).remove();
        }
    });

});