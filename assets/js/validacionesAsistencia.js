$(document).ready(function () {
    $("#bEnviar").click(function (event) {
        // Prevenir el envío del formulario
        event.preventDefault();

        // Limpiar mensajes de error anteriores
        $(".error-message").hide();

        var nombre = $("#name_asistencia").val();
        var correo = $("#email_asistencia").val();
        var mensaje = $("#mensaje_asistencia").val();
        var isValid = true;

        if (nombre == "") {
            $("#nameError").text("El campo nombre es obligatorio").show();
            isValid = false;
        }
        if (!correo.includes('@')) {
            $("#emailError").text("Por favor ingrese un correo válido").show();
            isValid = false;
        }
        if (mensaje == "") {
            $("#mensajeError").text("Debe contener un mensaje").show();
            isValid = false;
        }

        // Si todos los campos son válidos, envía el formulario
        if (isValid) {
            $("#registrationForm").submit();
        }
    });
});

$(document).ready(function(){
    var cardData = [
      {
        title: "Card 1",
        image: "https://via.placeholder.com/150",
        description: "Descripción de la tarjeta 1."
      },
      {
        title: "Card 2",
        image: "https://via.placeholder.com/150",
        description: "Descripción de la tarjeta 2."
      },
      {
        title: "Card 3",
        image: "https://via.placeholder.com/150",
        description: "Descripción de la tarjeta 3."
      },
      {
        title: "Card 4",
        image: "https://via.placeholder.com/150",
        description: "Descripción de la tarjeta 4."
      },
      {
        title: "Card 5",
        image: "https://via.placeholder.com/150",
        description: "Descripción de la tarjeta 5."
      },
      {
        title: "Card 6",
        image: "https://via.placeholder.com/150",
        description: "Descripción de la tarjeta 6."
      }
    ];
  
    var numVisibleCards = 3; // Numero de cards visibles a la vez
    var currentIndex = 0; // Indice actual de la primera card visible
  
    // Funcion para mostrar las cards
    function showCards() {
      $('#card-container').empty(); // Limpia el contenedor
      for (var i = currentIndex; i < currentIndex + numVisibleCards; i++) {
        var card = cardData[i % cardData.length]; // Usamos módulo para que vuelva al principio al final
        var cardHTML = `
          <div class="col-md-4">
            <div class="card">
              <img src="${card.image}" class="card-img-top" alt="${card.title}">
              <div class="card-body">
                <h5 class="card-title">${card.title}</h5>
                <p class="card-text">${card.description}</p>
              </div>
            </div>
          </div>
        `;
        $('#card-container').append(cardHTML);
      }
    }
  
    // Funcion para avanzar las cards
    function nextCards() {
      currentIndex++;
      showCards();
    }
  
    // Funcion para retroceder las cards
    function prevCards() {
      currentIndex--;
      showCards();
    }
  
    // Mostrar las cards iniciales
    showCards();
  
    // Intervalo para cambiar las cards cada 2 segundos
    var intervalID = setInterval(nextCards, 2000);
  
    // Boton Siguiente
    $('#next-btn').click(function(){
      clearInterval(intervalID); // Detiene el intervalo
      nextCards();
      intervalID = setInterval(nextCards, 2000); // Reinicia el intervalo
    });
  
    // Boton Anterior
    $('#prev-btn').click(function(){
      clearInterval(intervalID); // Detiene el intervalo
      prevCards();
      intervalID = setInterval(nextCards, 2000); // Reinicia el intervalo
    });
  });