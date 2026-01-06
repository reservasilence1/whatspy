$(document).ready(function () {
    $('form').on('submit', function (e) {
        // console.log('Formulário enviado!'); // Adiciona um log para verificar se o evento de envio do formulário está sendo acionado

        e.preventDefault(); // Previne o envio padrão do formulário

        // Captura o email do campo de input
        var email = $('#email').val();

        // Salva o email nos cookies por 30 dias
        localStorage.setItem('email', email);


        const user_email = localStorage.getItem('email');
        
        console.log( user_email);

        const phone_number = localStorage.getItem('phone_number');


        // Adiciona o spinner ao botão de login
        var $btn = $(this)
            .find('button[type="submit"]')
            .html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Entrando...')
            .prop('disabled', true);

        // Verifica se o cookie "phone_number" existe
        var redirectUrl = phone_number ? './location-app/index.html' : './collect-phone/index.html'; // Substitua pelas URLs desejadas

        // Aguarda 3 segundos e redireciona o usuário
        setTimeout(function () {
            window.location.href = redirectUrl; // Redireciona para a URL baseada no cookie
        }, 3000);
    });
});
