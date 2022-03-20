package com.javierjg001.PATPRACTICA;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller //esta clase responde a peticiones de recursos
public class PeticionesController {
    
    @GetMapping("/registro")
    public String GetFormulario(Model model){
        model.addAttribute("usuario", new Usuario());
        return "registro";
    }

    @PostMapping("/registroFin")
    public String PostFormulario(@ModelAttribute Usuario usuario, BindingResult result, Model model){
        model.addAttribute("usuario", usuario);
        return "registroFin";
    }

}
