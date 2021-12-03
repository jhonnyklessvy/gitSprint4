package com.spring.Petshouse.repositorio;

import com.spring.Petshouse.modelo.Madopcion;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Vadopcion extends MongoRepository<Madopcion, String>{
    
}
