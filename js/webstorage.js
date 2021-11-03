function guardar(){
    var boton = document.querySelector('#guardar')
    boton.addEventListener('click', nuevaClase)
    mostrarClases()
    
}

function nuevaClase(){
    var nombre = document.querySelector('#nombre').value
    var edad = document.querySelector('#edad').value
    var fecha = document.querySelector('#fecha').value
    var entrenamiento = document.querySelector('#selecto').value 

    var valores = [nombre, edad, fecha, entrenamiento]

    localStorage.setItem(fecha, valores)
    alert('Tus datos fueron cargados')
    location.reload()
}

function mostrarClases() {
    var caja = document.querySelector('#caja')
    for(var i=0; i<localStorage.length; i++){
        var idClase = localStorage.key(i)
        var valor = localStorage.getItem(idClase)

        caja.innerHTML += '<p>'+ idClase + valor+ '</p>'
    }
}

function borrar (){
    localStorage.clear()
    location.reload()
    alert('Los inscriptos fueron borrados')
}
window.addEventListener('load', guardar)