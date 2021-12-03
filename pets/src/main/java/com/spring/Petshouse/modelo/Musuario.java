package com.spring.Petshouse.modelo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Usuario")
public class Musuario {

    @Id
    private String usua_id;
    private String usua_nom;
    private String usua_ape;
    private String usua_tel;
    private String usua_doc;
    private String usua_email;
    private String usua_contr;

    public String getUsua_id() {
        return usua_id;
    }

    public void setUsua_id(String usua_id) {
        this.usua_id = usua_id;
    }

    public String getUsua_nom() {
        return usua_nom;
    }

    public void setUsua_nom(String usua_nom) {
        this.usua_nom = usua_nom;
    }

    public String getUsua_ape() {
        return usua_ape;
    }

    public void setUsua_ape(String usua_ape) {
        this.usua_ape = usua_ape;
    }

    public String getUsua_tel() {
        return usua_tel;
    }

    public void setUsua_tel(String usua_tel) {
        this.usua_tel = usua_tel;
    }

    public String getUsua_doc() {
        return usua_doc;
    }

    public void setUsua_doc(String usua_doc) {
        this.usua_doc = usua_doc;
    }

    public String getUsua_email() {
        return usua_email;
    }

    public void setUsua_email(String usua_email) {
        this.usua_email = usua_email;
    }

    public String getUsua_contr() {
        return usua_contr;
    }

    public void setUsua_contr(String usua_contr) {
        this.usua_contr = usua_contr;
    }


    

}
