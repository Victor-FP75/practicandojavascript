//Elementos del DOM (Document object model) - Elementos del documento
//seleccionamos un elemento a través de su ID
const inputElement = document.getElementById("miDatoAleatorio");
const inputElementElegido1 = document.getElementById("miDatoElegido1");
const inputElementElegido2 = document.getElementById("miDatoElegido2");
const inputElementElegido3 = document.getElementById("miDatoElegido3");
const miImagenGanador = document.getElementById("miGanador");

//Asigno el objeto botón a una variable, para manipularlo dede javascript.
const buttonElement = document.getElementById("bntAceptar");

miImagenGanador.style.visibility= 'hidden';  //Ocultar la imagen

//Creo una funcion para el botón, para ejecutar el contenido
//Agrego un evento Click al botón, para ejecutar el contenido
buttonElement.addEventListener("click", () => {
    let numAleatorio = Math.floor(Math.random() * 10 + 1);
    inputElement.value = numAleatorio;
    console.log("Número aleatorio generado:", numAleatorio);

    let intento = 1;
    inputElementElegido1.value = 0;
    inputElementElegido2.value = 0;
    inputElementElegido3.value = 0;

    while (intento <= 3) {
        let entrada = prompt("Ingresa un número entre 1 y 10");
        if (entrada === null) {
            alert("Juego cancelado.");
            break;
        }

        let numElegido = Number(entrada);

        if (numElegido >= 1 && numElegido <= 10) {
            alert(`Intento #${intento}: Número ingresado: ${numElegido}`);

            // Mostrar el valor en los inputs correspondientes
            if (intento === 1) inputElementElegido1.value = numElegido;
            if (intento === 2) inputElementElegido2.value = numElegido;
            if (intento === 3) inputElementElegido3.value = numElegido;

            if (numElegido === numAleatorio) {
                alert("¡Felicitaciones, has ganado!");
                miImagenGanador.style.visibility= 'visible';    //Mostrar la imágen

                break;
            } else {
                if (Math.abs(numElegido - numAleatorio) === 1) {
                    alert("Estuviste muy cerca...");
                } else {
                    alert("Muy alejado de la meta...");
                }
            }
        } else {
            alert("El número debe estar en el rango de 1 a 10.");
        }

        intento++;
    }

    if (intento > 3) {
        alert(`Se acabaron los intentos. El número correcto era: ${numAleatorio}`);
    }
});
