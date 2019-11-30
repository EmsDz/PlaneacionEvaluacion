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
    var utilidadbruta = parseInt(0 + ventasnetas) - parseInt(0 + costoventas);

    var gastosadmin = document.getElementById("gastosadmin").value;
    var gastosventas = document.getElementById("gastosventas").value;
    var depreciacion = document.getElementById("depreciacion").value;
    var utilidadoperativa = parseInt(0 + utilidadbruta) - (parseInt(0 + gastosadmin) + parseInt(0 + gastosventas) + parseInt(0 + depreciacion));

    var gastosfinancieros = document.getElementById("gastosfinancieros").value;
    var utilidadantesimpuestosintereses = utilidadoperativa - parseInt(0 + gastosfinancieros);

    // var intereses = document.getElementById("intereses").value;
    // var utilidadantesimpuestos = utilidadantesimpuestosintereses - parseInt(intereses);
    var utilidadantesimpuestos = utilidadantesimpuestosintereses;

    var impuestos = document.getElementById("impuestos").value;
    // calculo de impuestos
    // var utilidadneta = utilidadantesimpuestos - parseInt(0 + impuestos);
    var utilidadneta = utilidadantesimpuestos - (parseInt(0 + impuestos * 0.01 * utilidadantesimpuestos));

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
    var activoscirculantes = parseInt(0 + efectivo) + parseInt(0 + cuentasporcobrar) + parseInt(0 + inventario);

    var activosfijos = document.getElementById("activosfijos").value;

    var totalactivos = parseInt(0 + activoscirculantes) + parseInt(0 + activosfijos);


    var prestamobancario = document.getElementById("prestamobancario").value;
    var proveedores = document.getElementById("proveedores").value;
    var pasivoscirculantes = parseInt(0 + prestamobancario) + parseInt(0 + proveedores);

    var documentosporpagar = document.getElementById("documentosporpagar").value;
    var deudahipotecaria = document.getElementById("deudahipotecaria").value;
    var pasivoslargoplazo = document.getElementById("pasivoslargoplazo").value;
    var pasivosfijos = parseInt(0 + documentosporpagar) + parseInt(0 + deudahipotecaria) + parseInt(0 + pasivoslargoplazo);

    var pasivostotales = pasivoscirculantes + pasivosfijos;


    var capitalsocial = document.getElementById("capitalsocial").value;
    var reservadeutilidades = document.getElementById("reservadeutilidades").value;
    var utilidaddelejercicio = document.getElementById("utilidaddelejercicio").value;
    // var capitalcomun = document.getElementById("capitalcomun").value;
    var capitalcomun = parseInt(0 + capitalsocial) + parseInt(0 + reservadeutilidades) + parseInt(0 + utilidaddelejercicio);

    var pasivomascapital = parseInt(0 + pasivostotales) + parseInt(0 + capitalcomun);


    document.balancegeneral.activoscirculantes.value = activoscirculantes.toString(10);
    document.balancegeneral.totalactivos.value = totalactivos;

    document.balancegeneral.activos.value = totalactivos;

    document.balancegeneral.pasivoscirculantes.value = pasivoscirculantes;
    document.balancegeneral.pasivosfijos.value = pasivosfijos;
    document.balancegeneral.totalpasivos.value = pasivostotales;
    document.balancegeneral.capitalcomun.value = capitalcomun;
    document.balancegeneral.pmasc.value = pasivomascapital;
    // document.balancegeneral..value = ;


    if (totalactivos != pasivomascapital) {
        // document.getElementById('activos').style.backgroundColor = "red";
        // document.getElementById('pmasc').style.backgroundColor = "red";
        document.getElementById('activos').className = 'grownd';
        document.getElementById('pmasc').className = 'grownd';
    } else {
        // document.getElementById('activos').style.borderColor = "green";
        // document.getElementById('activos').style.border = "4px green solid";
        // document.getElementById('pmasc').style.border = "4px green solid";
        document.getElementById('activos').className = 'correct';
        document.getElementById('pmasc').className = 'correct';
    }
    /*
    https://entrellaves.com/javascript/cambiar-css-con-javascript/

    intro.style.cssText = 'background-color: black; color: white;';
    intro.className = 'negativo';

    intro.classList.add('gatitos', 'ositos');
    intro.classList.remove('ositos');
    intro.classList.toggle('gatitos'); // Si tiene "gatitos" bórralos, si no añádelos
    console.log(intro.classList.contains('gatitos')); // → false
    */
}

function calcularRazones() {
    var ventasNetas = parseInt(0 + document.getElementById("ventasnetas").value) + 0;
    // var EBIT = parseInt(document.getElementById("utilidadantesimpuestosintereses").value)+0;
    var EBIT = parseInt(0 + document.getElementById("utilidadoperativa").value) + 0;
    // var intereses = parseInt(document.getElementById("intereses").value)+0;
    var impuestos = parseInt(0 + document.getElementById("impuestos").value) + 0;
    var ingresosNetos = parseInt(0 + document.getElementById("utilidadneta").value) + 0;
    var cuentasporcobrar = parseInt(0 + document.getElementById("cuentasporcobrar").value) + 0;
    var inventario = parseInt(0 + document.getElementById("inventario").value) + 0;
    var activoscirculantes = parseInt(0 + document.getElementById("activoscirculantes").value) + 0;
    var activosfijos = parseInt(0 + document.getElementById("activosfijos").value) + 0;
    var totalactivos = parseInt(0 + document.getElementById("totalactivos").value) + 0;
    var pasivoscirculantes = parseInt(0 + document.getElementById("pasivoscirculantes").value) + 0;
    var pasivostotales = parseInt(0 + document.getElementById("totalpasivos").value) + 0;
    var capitalcomun = parseInt(0 + document.getElementById("capitalcomun").value) + 0;

    var R1 = activoscirculantes / pasivoscirculantes;
    var R2 = (activoscirculantes - inventario) / pasivoscirculantes;
    var R3 = ventasNetas / inventario;
    var R4 = cuentasporcobrar / (ventasNetas / 360);
    var R5 = ventasNetas / activosfijos;
    var R6 = ventasNetas / totalactivos;
    var R7 = pasivostotales / totalactivos;
    // var R8 = EBIT / intereses;
    var R8 = EBIT / impuestos;
    var R9 = ingresosNetos / ventasNetas;
    var R10 = EBIT / totalactivos;
    var R11 = ingresosNetos / totalactivos;
    var R12 = ingresosNetos / capitalcomun;

    var razones = [R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12];
    // console.log(razones);
    // llenar tabla con valores
    for (let ted = 0; ted < razones.length; ted++) {
        if (!isNaN(razones[ted]) && isFinite(razones[ted])) {
            document.getElementById('r' + (ted + 1)).innerHTML = (razones[ted].toFixed(2)).toString();
        }
        // element = razones[ted];
    }

}

function comparacion() {

    var razones = [];
    var comparar = [];
    // obtener datos de la tabla
    for (let ted = 0; ted < 12; ted++) {
        razones.push(parseFloat(document.getElementById('r' + (ted + 1)).innerText));
        // razones.push(ted);
        comparar.push(parseFloat(document.getElementById('c' + (ted + 1)).value));
    }
    // console.log(razones, comparar);
    // llenar tabla con la comparativa
    for (let ted = 0; ted < razones.length; ted++) {
        if (!isNaN(razones[ted]) && !isNaN(comparar[ted]) &&
            isFinite(razones[ted]) && isFinite(comparar[ted])) {
            if (razones[ted] > comparar[ted]) {
                document.getElementById('estado' + (ted + 1)).innerText = "ALTO";
                document.getElementById('estado' + (ted + 1)).style.backgroundColor = "#59e659";
                document.getElementById('estado' + (ted + 1)).style.fontWeight = "bold";
            } else if (razones[ted] < comparar[ted]) {
                document.getElementById('estado' + (ted + 1)).innerHTML = "BAJO";
                document.getElementById('estado' + (ted + 1)).style.backgroundColor = "#ff5555";
                document.getElementById('estado' + (ted + 1)).style.fontWeight = "bold";
            } else {
                document.getElementById('estado' + (ted + 1)).innerHTML = "IGUAL";
                document.getElementById('estado' + (ted + 1)).style.backgroundColor = "#b3acac";
                document.getElementById('estado' + (ted + 1)).style.fontWeight = "bold";
            }
        }
        // element = razones[ted];
    }

}

// mostrar data

function showData(toshow) {
    var elemtoshow = document.getElementById(toshow);
    var elemtohide = document.getElementsByClassName('Show');

    console.log(elemtohide);
    elemtohide[0].classList.replace('Show', 'Hide');
    elemtoshow.classList.replace('Hide', 'Show');
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
            comparacion();
        });
    });


// // JavaScript + jQuery
// function resizeInput() {
//     $(this).attr('size', $(this).val().length);
// }

// $('input[type="number"]')
//     // event handler
//     .keyup(resizeInput)
//     // resize on page load
//     .each(resizeInput);