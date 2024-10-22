$(document).ready(function () {
    $('#consultarButton').click(function () {
        var ddd = $('#dddInput').val();
        $.ajax({
            url: `https://brasilapi.com.br/api/ddd/v1/${ddd}`,
            method: 'GET',
            success: function (data) {
                $('#resultado').html(`<p>Estado: ${data.state}</p><p>Cidades: ${data.cities.join(', ')}</p>`);
            },
            error: function () {
                $('#resultado').html('<p>DDD não encontrado. Por favor, tente novamente.</p>');
            }
        });
    });
});
