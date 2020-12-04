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
        prevArrow:'.arrow-prev',
        nextArrow:'.arrow-next',
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

    //Dynamic Scroll
    dynamicScroll();



    //Email Block
    emailBlock();



});

function menu() {

    var check = $('#check');

    check.change(function() {

        var checked = check.is(':checked');
        var abrir = $('.abrir');
        var fechar = $('.fechar');
        var menu = $('.menu');
        var menuNavigation = $('.menu-navigation');

        // Icon Change
        if(checked){
            abrir.delay('slow').fadeIn();
            fechar.delay().fadeOut('slow');
            menu.css('left', '-300px');
        }else{
            abrir.delay().fadeOut('slow');
            fechar.delay('slow').fadeIn();
            menu.css('left', '0');
        }       
     
        menuNavigation.slideToggle('slow');

    });

};


function atvStickNavigation(){

    $(window).scroll(function() {

        var windowTop = $(window).scrollTop();
        var stickNavigation = $('.stickNavigation');

        if(windowTop > 350){
            stickNavigation.stop().fadeIn('slow');
        }else{
            stickNavigation.stop().fadeOut('slow');
        }

    });

};


function dynamicScroll(){

    var scrollTrigger = $('nav a');
    var menuNavigation = $('.menu-navigation');

    scrollTrigger.click(function() {

        var href = $(this).attr('href');
        var scrollTopElement = $(href).offset().top;

        $('html, body').animate({
            'scrollTop': scrollTopElement,
        }, 1500);

    });

};

function emailBlock(){

    var targetEmailBlock = $('.email-block');
    var activeEmailBlock = $('.active-email-block');

    activeEmailBlock.click(function() {

        targetEmailBlock.fadeToggle('slow');

    });
};