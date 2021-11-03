function dibujo (){
    var dibujo1 = document.querySelector('#lienzo1')
    lienzo = dibujo1.getContext('2d')

    lienzo.font="bold 23px verdana, sans-serif";
    lienzo.textAlign="start";
    lienzo.fillText("No te lo pierdas", 30,100);
    

    lienzo.beginPath ()
    lienzo.moveTo(250,90)
    lienzo.lineTo(477,28)

    lienzo.moveTo(470,50)
    lienzo.lineTo(480,25)

    lienzo.moveTo(480,25)
    lienzo.lineTo(455,20)

    lienzo.lineWidth=5;
    lienzo.stroke()
    
    

    lienzo.closePath()
}

window.addEventListener("load", dibujo);