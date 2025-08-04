$(document).ready(function() {
    $('#formEncuesta').submit(function(event) {
        event.preventDefault(); // Evita que se refresque la pagina
        
        //Se asignan los valores de las variables
        const vives = $('#vives').val();
        const valoras = $('#valoras').val();
        const compromiso = $('#compromiso').val();

        //Condicion para asegurarse de que las preguntas tengan respuestas
        if (vives && valoras && compromiso) {

            //Guarda esa informacion de manera local
            localStorage.setItem('vives', vives);
            localStorage.setItem('valoras', valoras);
            localStorage.setItem('compromiso', compromiso);
            
            //Redirige a la pagina de recomendaicon
            window.location.href = "recomendacion.html";
        } else {
            //Indica que se llenen todas las paginas (si tienen otra forma de mostrar la alerta mejor porque es nativa
            // esta opcion).
            alert('Por favor, responde todas las preguntas.');
        }
    });
});