package com.javierjg001.PATPRACTICA.Classes;

public class Usuario {
    
    private String nombre;
    private String apellido1;
    private String apellido2;
    private String email;
    private String provincia;
    private String calle;
    private String contra;
    private String cp;


    public Usuario(String nombre, String apellido1, String apellido2, String email, String provincia, String calle,
            String contra, String cp) {
                
        this.setNombre(nombre);
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.email = email;
        this.provincia = provincia;
        this.calle = calle;
        this.contra = contra;
        this.cp = cp;
    }


    public String getNombre() {
        return nombre;
    }


    public void setNombre(String nombre) {
        this.nombre = nombre;
    }


    public String getApellido1() {
        return apellido1;
    }


    public void setApellido1(String apellido1) {
        this.apellido1 = apellido1;
    }


    public String getApellido2() {
        return apellido2;
    }


    public void setApellido2(String apellido2) {
        this.apellido2 = apellido2;
    }


    public String getEmail() {
        return email;
    }


    public void setEmail(String email) {
        this.email = email;
    }


    public String getProvincia() {
        return provincia;
    }


    public void setProvincia(String provincia) {
        this.provincia = provincia;
    }


    public String getCalle() {
        return calle;
    }


    public void setCalle(String calle) {
        this.calle = calle;
    }


    public String getContra() {
        return contra;
    }


    public void setContra(String contra) {
        this.contra = contra;
    }


    public String getCp() {
        return cp;
    }


    public void setCp(String cp) {
        this.cp = cp;
    }


    


    
}
