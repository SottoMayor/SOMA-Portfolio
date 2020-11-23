$(document).ready(function () {

    /*
        Implementar via JS sistema de stickNavigation!
        botar seletores em variáveis e sistema de desmarcação no body
    */

    //Execute Menu
    menu();
    

    //Stick Naviagtion
    atvStickNavigation();

    //slider Equipe
    $('.slider-equipe').slick({
        dots: true,
        speed: 1000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay:true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                mobileFirst:true
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              } 
          ]
    });

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
