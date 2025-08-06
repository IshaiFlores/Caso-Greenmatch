$(document).ready(function () {

    // Obtenemos los valores guardados en localStorage
    const vives = localStorage.getItem('vives');
    const valoras = localStorage.getItem('valoras');
    const compromiso = localStorage.getItem('compromiso');

    fetch('Combinaciones_completas_con_productos.csv')
        .then(response => response.text())
        .then(data => {
            const filas = data.split('\n'); // separar por líneas
            filas.shift(); // quitar encabezado

            // Dejamos únicamente la fila correcpondiente.
            for (let fila of filas) {
                const columnas = fila.trim().split(',');

                if (
                    columnas[0] === vives &&
                    columnas[1] === valoras &&
                    columnas[2] === compromiso
                ) {

                    // Le indicamos que normalize el nombre de la columna del producto para poder poner la imagen correspondiente.
                    console.log(columnas)
                    document.getElementById('img_p').src = 'imagenes/' + columnas[3]
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .replace(/\s+/g, '_')
                        + '.jpg';

                    document.getElementById('img_p').alt = columnas[3]
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .replace(/\s+/g, '_')

                    $('#name_p').text(columnas[3]);
                    $('#desc').text(columnas[4]);
                    $('#frase').text('"' + columnas[5] + '"');

                    break; // salimos del bucle al encontrar la coincidencia
                }
            }
        })
        .catch(error => console.error('Error leyendo CSV:', error));
});
