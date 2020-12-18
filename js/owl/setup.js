$('.owl-carousel').owlCarousel({
    loop:true,  /**Coloquei true para que quando chegue no último elemento, se eu arrastar as imagens com o mouse, ele volta para o primeiro elemento. Se deixar como false, ele irá para no último */
    margin:10,  /**Distância de um elemento e outro */
    nav:false,  /**Se deixar true, aparecerá além das bolinhas, umas setas embaixo das imagens */
    responsive:{    /**Infforma quantos itens serão exibidos de acordo com o tamanho da largura da tela. Por exemplo, se a largura for entre 0 e 600, ele exibe apenas 1 item*/
        0:{
            items:3
        },
        700:{
            items:4
        },
        1000:{
            items:5
        }
    }
})