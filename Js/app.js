//desplegable 
$(document).ready(function () {
    $('.contenido1, .contenido2').hide();

    $('.titulo1').on('click', function(){
        $('.contenido1').slideToggle();
    });

    $('.titulo2').on('click', function(){
        $('.contenido2').slideToggle();
    });
});
//firma nombre
$(document).ready(function () {
    // variables reutilizables
    var input = $("#nombreinput");
    var contenidofirma = $("#contenidofirma");

    //Evento keyup
    input.keyup(function() {
    console.log(input.val()); //verificamos en consola
    contenidofirma.html(input.val()); //agregamos en contenido

    //Podemos verificar si está vacio el input
    if (input.val() === "") {
        contenidofirma.html("no hay firma...");
      }
    }); 

});
//firma apellido
$(document).ready(function () {
    // variables reutilizables
    var input2 = $("#apellidoinput");
    var contenidofirma2 = $("#contenidofirma2");

    //Evento keyup
    input2.keyup(function() {
    console.log(input2.val()); //verificamos en consola
    contenidofirma2.html(input2.val()); //agregamos en contenido

    //Podemos verificar si está vacio el input
    if (input2.val() === "") {
        contenidofirma2.html("no hay firma...");
      }
    }); 

});


//reloj
function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec + " " + ap;
    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}