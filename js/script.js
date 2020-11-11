$(document).ready(function () {

    /*
        Implementar via JS sistema de stickNavigation!
        botar seletores em variáveis e sistema de desmarcação no body
    */

    $('#check').change(function() {

        var checked = $('#check').is(':checked');
        console.log(checked);

        if(checked){
            $('.abrir').delay('slow').fadeIn();
            $('.fechar').delay().fadeOut('slow');
        }else{
            $('.abrir').delay().fadeOut('slow');
            $('.fechar').delay('slow').fadeIn();
        }       

        $('.aside').animate({width:'toggle'}, 'slow');        



    })



})