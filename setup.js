$('.owl-carousel').owlCarousel({
    loop:true, 
    margin:10,
    nav:false, //botão de navegação//
    responsive:{ //tela se adapta ao tamanho da tela//
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})