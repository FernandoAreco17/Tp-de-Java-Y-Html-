function validarContra(){
    var contraseña = document.getElementById("contraseña").value;

    if(contraseña.length < 7){
        alert("Ingrese una clave menos de 7 caracteres, vuelva a intentarlo");
    }else if(contraseña.length > 20){
        alert("Ingrese una clave más de 20 caracteres, vuelva a intentarlo");
    }
}