$(document).ready(function () {
    $('#carouselExampleControls').carousel({
        interval: 2500, // 3 segundos
        wrap: true // Habilita el loop
    });
});
$('#carouselExampleControls').carousel('cycle');