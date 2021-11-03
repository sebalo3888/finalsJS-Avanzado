/* comienza js del archivo CONTACTO*/
function validarForm (){
    var nombre = document.getElementById ('nombre').value
    var mail = document.getElementById('mail').value
    var edad = document.getElementById('edad').value
    var fecha = document.getElementById('fecha').value
    var consulta = document.getElementById('consulta').value

    expresion = /\w+@\w+\.[a-z]/;
    
    if (nombre === "" || mail === "" || edad === "" || consulta === "" || fecha === "") {
        alert ("Todos los campos son obligatorios")
        return false;
    }

    else if (nombre.lenght>60){
        alert ("El nombre es demasiado largo")
        return false;
    }

    else if (nombre.lenght<8){
        alert ("El nombre es demasiado corto")
        return false;
    }
    else if (mail.lenght>80){
        alert ("El email es demasiado largo")
        return false;
    }

    else if (mail.lenght<10){
        alert ("El email es demasiado corto")
        return false;
    }

    else if (!expresion.test(mail)){
        alert ("El email no es valido")
        return false;
    }
}
/* finaliza js del archivo CONTACTO*/

/* botonera archivo adelanto*/

var video = document.querySelector('#vid-fuerza')
var btn_rep = document.querySelector('#reproducir')
function reproducir() {
    
    if (video.paused){
        video.play ()
        btn_rep.innerHTML = 'Pausar'
    }
    else {
        video.pause()
        btn_rep.innerHTML = 'Reproducir ▶'
    }
}

function detener() {
    video.pause()
    video.currentTime = 0
}

function adelantar (fotograma){
    video.currentTime += fotograma
}

function alerta(){
    if (onload) {
     var mail = prompt ('Para poder continuar con el adelanto dejanos tu mail debajo :D')
     alert ('Gracias por tu respuesta, que disfrutes del adelanto!')
    
    }
 
        
}

