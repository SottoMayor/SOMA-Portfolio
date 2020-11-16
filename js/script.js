$(document).ready(function () {

    /*
        Implementar via JS sistema de stickNavigation!
        botar seletores em variáveis e sistema de desmarcação no body
    */

    //Execute Menu
    menu();
    

    //Stick Naviagtion
    atvStickNavigation();

});

function menu() {

    var check = $('#check');

    check.change(function() {

        var checked = check.is(':checked');
        var abrir = $('.abrir');
        var fechar = $('.fechar');
        var aside = $('.aside');

        // Icon Change
        if(checked){
            abrir.delay('slow').fadeIn();
            fechar.delay().fadeOut('slow');
        }else{
            abrir.delay().fadeOut('slow');
            fechar.delay('slow').fadeIn();
        }       

        // Animate Aside
        aside.animate({width:'toggle'}, 'slow');        

    });

};


function atvStickNavigation(){

    $(window).scroll(function() {

        var windowTop = $(window).scrollTop();
        var stickNavigation = $('.stickNavigation');

        if(windowTop > 300){
            stickNavigation.stop().fadeIn('slow');
        }else{
            stickNavigation.stop().fadeOut('slow');
        }

    });

};
