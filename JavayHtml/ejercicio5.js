function validar(){
    var contraseña = document.getElementById("contraseña1").value;
    var contraseñaVal = document.getElementById("contraseña2").value;

    if(contraseña == contraseñaVal){
        alert("Contraseñas correctas");
    }else{
        alert("Contraseñas incorrectas")
    }
}