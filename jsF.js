$(document).ready(function(){
    var $container = $('.container');
    $container.find('div').css({'height': '80%', 
                                 'width': '80%'});
    
    $container.find('div').each(function(index){
        var pHeight = $(this).parent().height();
        var mHeight = $(this).height();
        var margin = Math.floor((pHeight-mHeight)/2);
        $(this).css({'top': margin + 'px', 'left': margin + 'px'});
    });
var paused = false;
$('.audio').click(function(){
    if (!paused) {
        $('audio').animate({volume: 0}, 2000);
        //$('audio').get(0).pause();	
        paused = true;
    }
    else {
        $('audio').animate({volume: 1}, 2000);
        //$('audio').get(0).play();	
        paused = false;
    }
});
    
});

  