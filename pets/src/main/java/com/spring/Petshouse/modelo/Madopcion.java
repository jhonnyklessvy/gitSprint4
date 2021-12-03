package com.spring.Petshouse.modelo;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Adopción")
public class Madopcion {
    
    @Id
    private String adop_id;
    private Mmascota adop_mas_id;
    private Musuario adop_usua_id;

    public String getAdop_id() {
        return adop_id;
    }

    public void setAdop_id(String adop_id) {
        this.adop_id = adop_id;
    }

    public Mmascota getAdop_mas_id() {
        return adop_mas_id;
    }

    public void setAdop_mas_id(Mmascota adop_mas_id) {
        this.adop_mas_id = adop_mas_id;
    }

    public Musuario getAdop_usua_id() {
        return adop_usua_id;
    }

    public void setAdop_usua_id(Musuario adop_usua_id) {
        this.adop_usua_id = adop_usua_id;
    }

    
}
