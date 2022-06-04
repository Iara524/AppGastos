let miListado = [];

/* Evento Click Boton ENVIAR */
document.getElementById("enviar").addEventListener("click", enviarGastos);
document.getElementById("enviar").addEventListener("click", imprimirGastos);


/* Defino la funcion para el boton enviar */
function enviarGastos(nombre, gasto) {

    document.getElementById("alert-datos").classList.add('d-none');
    document.getElementById("alert-datos").classList.remove('d-block'); //

    nombre = document.getElementById("nombre").value;
    gasto = document.getElementById("gasto").value;

    if (nombre == "" || gasto == "") {
        document.getElementById("alert-datos").classList.add('d-block');
        document.getElementById("alert-datos").classList.remove('d-none'); 
    } else {
        const objGastos = { nombre, gasto }
        miListado.push(objGastos); 
        console.log(miListado); 
    }
};

function imprimirGastos() {
    let suma= 0;
    let division= 0;
    document.getElementById("listado").innerHTML ="";
    for(let value of miListado){
        document.getElementById("listado").innerHTML += '<li class="list-group-item">'+value.nombre+" : $"+value.gasto+'</li>';

        suma += parseInt(value.gasto);
        console.log(suma);
        document.getElementById("suma-total").innerHTML = '<li class="list-group-item">Total: $'+suma+'</li>';    
                               }     
division += suma/miListado.length
console.log(division);
document.getElementById("division-total").innerHTML = '<li class="list-group-item">Cada uno debe aportar: $'+division+'</li>'; 
}   
