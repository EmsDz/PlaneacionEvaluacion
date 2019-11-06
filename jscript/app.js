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
    utilidadbruta = ventasnetas - costoventas;

    var gastosadmin = document.getElementById("gastosadmin").value;
    var gastosventas = document.getElementById("gastosventas").value;
    var depreciacion = document.getElementById("depreciacion").value;
    utilidadoperativa = utilidadbruta - (gastosadmin + gastosventas + depreciacion);

    var gastosfinancieros = document.getElementById("gastosfinancieros").value;
    var utilidadantesimpuestosintereses = utilidadoperativa - gastosfinancieros;

    var intereses = document.getElementById("intereses").value;
    var utilidadantesimpuestos = utilidadantesimpuestosintereses - intereses;

    var impuestos = document.getElementById("impuestos").value;
    var utilidadneta = utilidadantesimpuestos - impuestos;

    console.log("variables");
    document.estadoresultado.utilidadbruta.value = utilidadbruta;
    document.estadoresultado.utilidadoperativa.value = utilidadoperativa;
    document.estadoresultado.utilidadantesimpuestosintereses.value = utilidadantesimpuestosintereses;
    document.estadoresultado.utilidadantesimpuestos.value = utilidadantesimpuestos;
    document.estadoresultado.utilidadneta.value = utilidadneta;
}