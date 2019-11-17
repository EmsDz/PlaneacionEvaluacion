// 

var getData = function() {
    var name = document.getElementById("name").value;

    console.log("variables");
    document.estadoresultado.utilidadbruta.value = utilidadbruta;
};

function obtenerdatos() {

    // Estado de Resultado
    var ventasnetas = document.getElementById("ventasnetas").value;
    var costoventas = document.getElementById("costoventas").value;
    var utilidadbruta = parseInt(ventasnetas) - parseInt(costoventas);

    var gastosadmin = document.getElementById("gastosadmin").value;
    var gastosventas = document.getElementById("gastosventas").value;
    var depreciacion = document.getElementById("depreciacion").value;
    var utilidadoperativa = parseInt(utilidadbruta) - (parseInt(gastosadmin) + parseInt(gastosventas) + parseInt(depreciacion));

    var gastosfinancieros = document.getElementById("gastosfinancieros").value;
    var utilidadantesimpuestosintereses = utilidadoperativa - parseInt(gastosfinancieros);

    // var intereses = document.getElementById("intereses").value;
    // var utilidadantesimpuestos = utilidadantesimpuestosintereses - parseInt(intereses);
    var utilidadantesimpuestos = utilidadantesimpuestosintereses;

    var impuestos = document.getElementById("impuestos").value;
    // calculo de impuestos
    var utilidadneta = utilidadantesimpuestos - parseInt(impuestos);

    // console.log();

    document: estadoresultado.utilidadbruta.value = utilidadbruta;
    document.estadoresultado.utilidadoperativa.value = utilidadoperativa;
    // document.estadoresultado.utilidadantesimpuestosintereses.value = utilidadantesimpuestosintereses;
    document.estadoresultado.utilidadantesimpuestos.value = utilidadantesimpuestos;
    document.estadoresultado.utilidadneta.value = utilidadneta;


    //Balance General
    var efectivo = document.getElementById("efectivo").value;
    var cuentasporcobrar = document.getElementById("cuentasporcobrar").value;
    var inventario = document.getElementById("inventario").value;
    var activoscirculantes = parseInt(efectivo) + parseInt(cuentasporcobrar) + parseInt(inventario);

    var activosfijos = document.getElementById("activosfijos").value;
    var totalactivos = parseInt(activoscirculantes) + parseInt(activosfijos);

    var pasivoscirculantes = document.getElementById("pasivoscirculantes").value;
    var pasivoslargoplazo = document.getElementById("pasivoslargoplazo").value;
    var pasivostotales = parseInt(pasivoscirculantes) + parseInt(pasivoslargoplazo);


    var capitalcomun = document.getElementById("capitalcomun").value;

    var pasivomascapital = parseInt(pasivostotales) + parseInt(capitalcomun);


    document.balancegeneral.activoscirculantes.value = activoscirculantes.toString(10);
    document.balancegeneral.totalactivos.value = totalactivos;
    document.balancegeneral.activos.value = totalactivos;
    document.balancegeneral.totalpasivos.value = pasivostotales;
    document.balancegeneral.pmasc.value = pasivomascapital;
    // document.balancegeneral..value = ;
}

function calcularRazones() {
    var ventasNetas = parseInt(document.getElementById("ventasnetas").value);
    // var EBIT = parseInt(document.getElementById("utilidadantesimpuestosintereses").value);
    var EBIT = parseInt(document.getElementById("utilidadoperativa").value);
    var intereses = parseInt(document.getElementById("intereses").value);
    var ingresosNetos = parseInt(document.getElementById("utilidadneta").value);
    var cuentasporcobrar = parseInt(document.getElementById("cuentasporcobrar").value);
    var inventario = parseInt(document.getElementById("inventario").value);
    var activoscirculantes = parseInt(document.getElementById("activoscirculantes").value);
    var activosfijos = parseInt(document.getElementById("activosfijos").value);
    var activostotales = parseInt(document.getElementById("totalactivos").value);
    var pasivoscirculantes = parseInt(document.getElementById("pasivoscirculantes").value);
    var pasivostotales = parseInt(document.getElementById("totalpasivos").value);
    var capitalcomun = parseInt(document.getElementById("capitalcomun").value);

    var R1 = activoscirculantes / pasivoscirculantes;
    var R2 = (activoscirculantes - inventario) / pasivoscirculantes;
    var R3 = ventasNetas / inventario;
    var R4 = cuentasporcobrar / (ventasNetas / 360);
    var R5 = ventasNetas / activosfijos;
    var R6 = ventasNetas / activostotales;
    var R7 = pasivostotales / activostotales;
    var R8 = EBIT / intereses;
    var R9 = ingresosNetos / ventasNetas;
    var R10 = EBIT / activostotales;
    var R11 = ingresosNetos / activostotales;
    var R12 = ingresosNetos / capitalcomun;

    var razones = [R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12];


    for (ted = 0; ted < razones.length; ted++) {
        document.getElementById('r' + (ted + 1)).innerHTML = razones[ted].toFixed(2);
        // element = razones[ted];
    }

}

function comparacion() {

    var razones = [];
    var comparar = [];

    for (ted = 0; ted < array.length; ted++) {
        razones.push(parseInt(document.getElementById('r' + (ted + 1)).value));
        comparar.push(parseInt(document.getElementById('estado' + (ted + 1)).value));
    }
    // console.log(razones, comparar);
    for (ted = 0; ted < razones.length; ted++) {
        if (razones[ted] > comparar[ted]) {
            document.getElementById('estado' + (ted + 1)).innerText = "ALTO";
        } else {
            document.getElementById('estado' + (ted + 1)).innerHTML = "BAJO";
        }
        // element = razones[ted];
    }

}

// calculo on real time
let inputs = document.getElementsByTagName('input'),
    inputsArray = [];

for (const input of inputs) {
    inputsArray.push(input);
}

inputsArray
    .filter(input => input.id)
    .forEach(input => {
        input.addEventListener('change', () => {
            obtenerdatos();
            calcularRazones();
        });
    });

// JavaScript + jQuery
// function resizeInput() {
//     $(this).attr('size', $(this).val().length);
// }

// $('input[type="text"]')
//     // event handler
//     .keyup(resizeInput)
//     // resize on page load
//     .each(resizeInput);