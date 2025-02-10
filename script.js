
document.addEventListener("DOMContentLoaded", function(){
    //toda nuestra logica
    console.log("El contenido ha sido cargado");
    const form =document.querySelector('.formulario');

    //Leemos el formulario con querySelector que es un comodin.
    form.addEventListener("submit", function(event){ 
        event.preventDefault();

        //Leer los valores de los imputs con getElemenByID.
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        //Esrto es una estructura de contol: if.

        if (name == ""|| email== "" || password== "" ) {
            alert("Todos los campos son obligatorios")
            return
        }
        console.log("Usuario", name);
        console.log("correo", email);
        console.log("contraseña", password);
        console.log("Formulario enviado");

     });
});        