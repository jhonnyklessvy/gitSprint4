package com.spring.Petshouse.modelo;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Venta")
public class Mventa {

    @Id
    private String ven_id;
    private Mproducto ven_pro_id;
    private Musuario ven_usua_id;

    public String getVen_id() {
        return ven_id;
    }

    public void setVen_id(String ven_id) {
        this.ven_id = ven_id;
    }

    public Mproducto getVen_pro_id() {
        return ven_pro_id;
    }

    public void setVen_pro_id(Mproducto ven_pro_id) {
        this.ven_pro_id = ven_pro_id;
    }

    public Musuario getVen_usua_id() {
        return ven_usua_id;
    }

    public void setVen_usua_id(Musuario ven_usua_id) {
        this.ven_usua_id = ven_usua_id;
    }
    
}
