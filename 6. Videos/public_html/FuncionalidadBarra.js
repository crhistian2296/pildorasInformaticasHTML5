var MyVideo, reproducir, barra, progreso, maximo;
maximo = 600;
/**
 * Asingna etiquetas a las variables y les pone escuchas a estas
 */
function comenzar() {
    MyVideo = document.getElementById("MyVideo");
    reproducir = document.getElementById("reproducir");
    barra = document.getElementById("barra");
    progreso = document.getElementById("progreso");

    reproducir.addEventListener("click", playAndPause, false);
    barra.addEventListener("click", adelantandoAndRetrocediendo, false);
}
/**
 * Funcionalidad del boton play/pause
 */
function playAndPause() {
    if ((MyVideo.paused == false) && (MyVideo.ended == false)) {
        MyVideo.pause();
        reproducir.innerHTML = "Play";
    } else {
        MyVideo.play();
        reproducir.innerHTML = "Pause";
        /*llama a la funcion estado cada 250 milisegundos*/
        bucle = setInterval(estado, 30);
    }
}

/**
 * Indica en que punto del video nos encontramos mediante la longitud de la barra
 * de progreso
 */
function estado() {
    if (MyVideo.ended == false) {
        /**
         * (600px)/(x) = (9.6s)/(2.5s)      9.6s = duracion del video
         *                                  2.5s = instante al azar
         *                                  x = cantidad de pixeles en el momento 2.5
         * var total = parseInt((2.5)*(600)/9.6)
         */
        var total = parseInt(MyVideo.currentTime * maximo / MyVideo.duration);
        progreso.style.width = total + "px";
    }
}
/**
 * 
 * @param {*} posicion 
 * a la variable posicion se le asigna la informacion del click
 */
function adelantandoAndRetrocediendo(posicion) {
    /**(posicion eje x del raton) - (espacio a la izquierda de la barra) = punto ene pixeles 
     *                                                                     de la barra
     */
    var ratonX = posicion.pageX - barra.offsetLeft;

    /**
     * (600px)/(257px) = (9.6)/(t)        t = segundo a obtener usando la ecuacion
     *                                    257px = pixel de ejemplo donde se supone hemos clickeado
     */
    var nuevoSec = ratonX * MyVideo.duration / maximo;
    /*asigno nuevo segundo*/
    MyVideo.currentTime = nuevoSec;
    /*asigno nueva posicion en la barra*/
    progreso.style.width = ratonX + "px";
}

window.addEventListener("load", comenzar, false);