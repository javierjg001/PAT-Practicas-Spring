package com.javierjg001.PATPRACTICA.Classes;

public class Usuario {
    
    private String nombre;
    private String apellido1;
    private String apellido2;
    private String contrasena;
    private String email;


    public Usuario(String nombre, String apellido1, String apellido2, String contrasena, String email) {
        this.setNombre(nombre);;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.contrasena = contrasena;
        this.email = email;
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
    public String getcontrasena() {
        return contrasena;
    }
    public void setcontrasena(String contrasena) {
        this.contrasena = contrasena;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

     
    
}
