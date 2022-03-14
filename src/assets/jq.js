import $ from 'jquery'
$(document).ready(function () { 
    var posX = 920; 
    var posY = 700; 
    $('.ship').css('left', posX); 
    $('.ship').css('top', posY); 
    window.addEventListener('keydown', function (event) { 
        if (event.keyCode == 65) { 
            posX -= 5; 
            $('.ship').css('left', posX); 
            $('.ship').addClass('left'); 
        } else if (event.keyCode == 68) { 
            posX += 5; 
            $('.ship').css('left', posX); 
            $('.ship').addClass('right'); 
        } else if (event.keyCode == 87) { 
            posY -= 5; 
            $('.ship').css('top', posY); 
            $('.ship').addClass('top'); 
        } else if (event.keyCode == 83) { 
            posY += 5; 
            $('.ship').css('top', posY); 
            $('.ship').addClass('bottom'); 
        } 
        if (event.keyCode == 37) { 
            posX -= 5; 
            $('.ship').css('left', posX); 
            $('.ship').addClass('left'); 
        } else if (event.keyCode == 39) { 
            posX += 5; 
            $('.ship').css('left', posX); 
            $('.ship').addClass('right'); 
        } else if (event.keyCode == 38) { 
            posY -= 5; 
            $('.ship').css('top', posY); 
            $('.ship').addClass('top'); 
        } else if (event.keyCode == 40) { 
            posY += 5; 
            $('.ship').css('top', posY); 
            $('.ship').addClass('bottom'); 
        } 
        if ($('.ship').hasClass('left') && $('.ship').hasClass('top')) {  
            posX -= 5; 
            posY -= 5; 
            $('.ship').css({ 'top': posY, 'left': posX, 'transform': 'rotate(-45deg)' }); 
        } else if ($('.ship').hasClass('right') && $('.ship').hasClass('top')) {  
            posX += 5; 
            posY -= 5; 
            $('.ship').css({ 'top': posY, 'left': posX, 'transform': 'rotate(45deg)' }); 
        } else if ($('.ship').hasClass('left') && $('.ship').hasClass('bottom')) {  
            posX -= 5; 
            posY += 5; 
            $('.ship').css({ 'top': posY, 'left': posX, 'transform': 'rotate(-135deg)' }); 
        } else if ($('.ship').hasClass('right') && $('.ship').hasClass('bottom')) {  
            posX += 5; 
            posY += 5; 
            $('.ship').css({ 'top': posY, 'left': posX, 'transform': 'rotate(135deg)' }); 
        } 
    }); 
    window.addEventListener('keyup', function (event) {  
        $('.ship').removeClass('top left right bottom');
        $('.ship').css('transform', 'rotate(0)');
    });
    $('html').on('click', function(shoot){
        $('.space').append('<img class="laser" style="top:' + posY + 'px; left:' + posX + 'px" src="/img/laser2.e15bc93f.png">');
        $('.laser').css({'transform': 'rotate(180deg)'});
        if (shoot) {
            console.log('пиу');
            $('.laser').animate({"top":"-100px"});
        }
    });
});