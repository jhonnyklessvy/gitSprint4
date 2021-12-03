package com.spring.Petshouse.repositorio;

import com.spring.Petshouse.modelo.Musuario;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface Vusuario extends MongoRepository<Musuario, String> {
    
}
