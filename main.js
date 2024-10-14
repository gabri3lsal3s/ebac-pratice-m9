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
        const img = $(`<img src="${enderecoNovaImagem}")>`);
        // O navegador não permite acesso direto aos arquivos do computador portanto, é necessário um servidor para acessar as imagens
        novoItem.append(img);
        // Coloca a imagem com o endereço dentro do novo idem
        $(`
            <div class="overlay-image-link">
                <a href="${enderecoNovaImagem}" target="_blank" title="Imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        // coloca a div com o link da nova imagem dentro do novoItem. target="_blank" faz com que o link seja aberto em outra aba.
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('endereco-img-nova').val('')
    })
})