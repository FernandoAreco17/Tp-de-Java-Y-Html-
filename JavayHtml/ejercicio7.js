
var precio_procesador = 0;
var precio_monitor = 0;
var precio_disco = 0;


function procesador() {
  var seleccion = document.getElementById("precio-procesador");
  precio_procesador = parseInt(seleccion.options[seleccion.selectedIndex].value);
  calcular_precio();
}


function monitor() {
  var seleccion = document.getElementById("precio-monitor");
  precio_monitor = parseInt(seleccion.options[seleccion.selectedIndex].value);
  calcular_precio();
}


function disco() {
  var seleccion = document.getElementById("precio-discoduro");
  precio_disco = parseInt(seleccion.options[seleccion.selectedIndex].value);
  calcular_precio();
}


function calcular_precio() {
  var total = precio_procesador + precio_monitor + precio_disco;
  document.getElementById("precio-total").value = "$" + total;
}