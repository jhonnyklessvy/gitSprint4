package com.spring.Petshouse.modelo;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Producto")
public class Mproducto {
    
    @Id
    private String pro_id;
    private String pro_nom;
    private String pro_col;
    private String pro_pre;

    public String getPro_id() {
        return pro_id;
    }

    public void setPro_id(String pro_id) {
        this.pro_id = pro_id;
    }

    public String getPro_nom() {
        return pro_nom;
    }

    public void setPro_nom(String pro_nom) {
        this.pro_nom = pro_nom;
    }

    public String getPro_col() {
        return pro_col;
    }

    public void setPro_col(String pro_col) {
        this.pro_col = pro_col;
    }

    public String getPro_pre() {
        return pro_pre;
    }

    public void setPro_pre(String pro_pre) {
        this.pro_pre = pro_pre;
    }


}
