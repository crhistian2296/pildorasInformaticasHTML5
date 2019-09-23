var MyVideo, reproducir, barra, progreso;

function comenzar() {
    MyVideo = document.getElementById("MyVideo");
    reproducir = document.getElementById("reproducir");
    barra = document.getElementById("barra");
    progreso = document.getElementById("progreso");

    reproducir.addEventListener("click", playAndPause, false);
    progreso.addEventListener("click", adelantandoAndRetrocediendo, false);
}

function playAndPause() {
    if ((MyVideo.paused == false) && (MyVideo.ended == false)) {
        MyVideo.pause();
        reproducir.innerHTML = "Play";
    } else {
        MyVideo.play();
        reproducir.innerHTML = "Pause";
    }
}

window.addEventListener("load", comenzar, false);