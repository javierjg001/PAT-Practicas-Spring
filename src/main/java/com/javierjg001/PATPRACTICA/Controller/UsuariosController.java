package com.javierjg001.PATPRACTICA.Controller;

import com.javierjg001.PATPRACTICA.Classes.Usuario;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController //esta clase responde a peticiones de recursos
public class UsuariosController {

    Usuario usuario;
    
    @GetMapping("/getUsuarios") //cuando pongamos el /usuarios en el explorador se va a ejecutar la función getUsuarios()
    public Usuario getUsuarios(){
        return usuario;
    }

    //En caso de que queramos enviar información, dependiendo del método vamos a hacer get y post que se ejecute por función 
    @PostMapping("/setUsuarios")
    public void postUsuarios(@RequestBody Usuario usuario) { //requestBody transforma el cuerpo de la petición HTTP en un objeto java
        this.usuario = usuario;
    }
}
