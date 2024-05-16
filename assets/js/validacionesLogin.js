$(document).ready(function () {
    $("#btn").click(function (event) {
        // Prevenir el envío del formulario
        event.preventDefault();

        // Limpiar mensajes de error anteriores
        $(".error-message").hide();

        
        var correo = $("#email").val();
        var contraseña = $("#password").val();
        
        var isValid = true;

    
        if (!correo.includes('@')){
            $("#mailError").text("Por favor ingrese un correo válido").show();
            isValid = false;
        }
        if (contraseña == "") {
            $("#contraError").text("El campo contraseña es obligatorio").show();
            isValid = false;
        }
        
        // Si todos los campos son válidos, envía el formulario
        if (isValid) {
            
            $("#login").submit();
            
        }
        
    });
});