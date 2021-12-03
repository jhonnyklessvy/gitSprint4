package com.spring.Petshouse.modelo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Admin")
public class Madmin {
    
    @Id
    private String admin_id;
    private String admin_usua;
    private String admin_contr;

    public String getAdmin_id() {
        return admin_id;
    }

    public void setAdmin_id(String admin_id) {
        this.admin_id = admin_id;
    }

    public String getAdmin_usua() {
        return admin_usua;
    }

    public void setAdmin_usua(String admin_usua) {
        this.admin_usua = admin_usua;
    }

    public String getAdmin_contr() {
        return admin_contr;
    }

    public void setAdmin_contr(String admin_contr) {
        this.admin_contr = admin_contr;
    }
    
    
}
