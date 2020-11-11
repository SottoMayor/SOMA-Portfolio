$(document).ready(function () {

    /*
        Implementar via JS sistema de stickNavigation!
        botar seletores em variáveis e sistema de desmarcação no body
    */

    //Execute Menu
    menu();
    

    //Stick Naviagtion
    

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