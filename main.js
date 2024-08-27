$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true,
        arrows:true
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle(500); //Aqui dentro contiguramos a velocidade do movimento
    })

    $('#campo-telefone').mask('(00)00000-0000', {
        placeholder: '(99)98199-9999'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
        }
        
    },

        messages: {
            nome: 'Por favor, insira seu nome'
        },
        messages: {
            telefone: 'Por favor, insira seu telefone'
        },
        messages: {
            email: 'Por favor, insira seu email'
        },
        messages: {
            mensagem: 'Por favor, insira sua mensagem'
        },

        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        },1000)

    })
})