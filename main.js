$(document).ready(function(){
//document.querySelector('header button'); [Seletor semelhante no java-script]
    
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function (e) {
        e.preventDefault();
        const enderecoNovaImagem = $('#endereco-img-nova').val();
        const novoItem = $('<li style = "display: none;"></li>');
        $(`<img src="${enderecoNovaImagem}")></img>`).appendTo(novoItem)
        //coloca a imagem com o endereço dentro do novo idem
        $(`
            <div class="overlay-image-link">
                <a href="${enderecoNovaImagem}" target="_blank" title="Imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(500);
        $('endereco-img-nova').val('')
    })
})