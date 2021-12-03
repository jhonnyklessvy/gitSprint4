package com.spring.Petshouse.modelo;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Mascota")
public class Mmascota {
    
    @Id
    private String mas_id;
    private String mas_nom;
    private String mas_raz;
    private String mas_ed;

    public String getMas_id() {
        return mas_id;
    }

    public void setMas_id(String mas_id) {
        this.mas_id = mas_id;
    }

    public String getMas_nom() {
        return mas_nom;
    }

    public void setMas_nom(String mas_nom) {
        this.mas_nom = mas_nom;
    }

    public String getMas_raz() {
        return mas_raz;
    }

    public void setMas_raz(String mas_raz) {
        this.mas_raz = mas_raz;
    }

    public String getMas_ed() {
        return mas_ed;
    }

    public void setMas_ed(String mas_ed) {
        this.mas_ed = mas_ed;
    }



}
