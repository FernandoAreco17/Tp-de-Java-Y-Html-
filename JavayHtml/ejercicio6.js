function mostrarPrecio(){
    var seleccion = document.getElementById("pizza");
    var indice = seleccion.selectedIndex;
    var precio = seleccion.options[indice].value;

    document.getElementById("precio").value = precio
}