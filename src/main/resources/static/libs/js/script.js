//-------------------------------------------- REPETIR CONTRASEÑA --------------------------------------------//
function verificarContra() {
 
    // Ontenemos los valores de los campos de contraseñas 
    let contra1 = document.getElementById("contraInput").value;
    let contra2 = document.getElementById("contra2Input").value;
 
    // Verificamos si las constraseñas no coinciden 
    if (contra1 != contra2) {
 
        // Si las constraseñas no coinciden mostramos un mensaje 
        // document.getElementById("error").classList.add("mostrar");
        window.alert("Las contraseñas no coinciden");
 
        return false;
    } else {return true;}
 
}


//-------------------------------------------- FORMULARIO --------------------------------------------//
let registrarsebtn = document.getElementById("registrarsebtn");
let resultadosbtn = document.getElementById("resultadosbtn");

//PREVENT DEFAULT

registrarsebtn.addEventListener("click",
    (postUsuariosData = async () => {

        // Obtenemos los datos del formulario y se los asignamos a 
        // un grupo de variables 
        var select = document.getElementById("provinciaInput");
		var option = select.options[select.selectedIndex];
		let provinciaInput = option.text;
        let calleInput = document.getElementById("calleInput").value;
        let cpInput = document.getElementById("cpInput").value;
        let emailInput = document.getElementById("emailInput").value;
        // let contra2Input = document.getElementById("contra2Input").value;
        let nombreInput = document.getElementById("nombreInput").value;
        let contraInput = document.getElementById("contraInput").value;
        let apellido1Input = document.getElementById("apellido1Input").value;
        let apellido2Input = document.getElementById("apellido2Input").value;

        //Ahora vamos a hacer un post a nuestra aplicacion de springboot
            //en la direccion /usuarios, en la cual le pasamos el objeto 
        //del usuario en modo json 

        console.log(contraInput);
        console.log(cpInput);
        console.log(calleInput);
        console.log(provinciaInput);

        let stringify = JSON.stringify({
            provincia: provinciaInput,
            apellido1: apellido1Input,
            calle: calleInput,
            cp: cpInput,
            email: emailInput,
            contra: contraInput,
            nombre: nombreInput,
            apellido2: apellido2Input
        });

        console.log(stringify);


        if (verificarContra()){
            let request = await fetch("/setUsuarios", { 
                method: 'POST', //Para publicar los datos del formulario 
                credentials: "same-origin", 
                headers: { //Esto es necesario para informarle al programa 
                                            //que le estamos pasando un JSON al post 
                    "Content-Type": "application/json"
                },
                        //Pasamos los datos que hemos recibido en la parte de arriba 
                        //del programa
                body: stringify, 
                dataType: "json"
            })

            console.log(request);
            //Testing de consola 
            if(request.ok) {
                console.log("Contraseñas iguales!");
            }
        } else {console.log("Las contraseñas no son iguales");}
    })  
);

resultadosbtn.addEventListener("click", 
    getUsuariosData = async () => {
        let get = await fetch("/getUsuarios", {
            method: "GET",
            credentials: "same-origin",
            dataType: "json",
        });

        if (get.ok) {
            var data = await get.json();
            console.log(data.contra);
            var provincia = data.provincia;
            var nombre = data.nombre;
            var calle = data.calle;
            var apellido2 = data.apellido2;
            var cp = data.cp;
            var email = data.email;
            var apellido1 = data.apellido1;
            var contra = data.contra;

            $("#titulo").html(`Registro exitoso`);

            $("#nombre_id").html(`Nombre: ${nombre}`);
            $("#apellido1_id").html(`Primer apellido: ${apellido1}`);
            $("#apellido2_id").html(`Segundo apellido: ${apellido2}`);
            $("#email_id").html(`Email: ${email}`);
            $("#contra_id").html(`Contraseña: ${contra}`);
            $("#calle_id").html(`Calle: ${calle}`);
            $("#provincia_id").html(`Provincia: ${provincia}`);
            $("#cp_id").html(`Código postal: ${cp}`);

        }
    }
);