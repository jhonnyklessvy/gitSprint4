package com.spring.Petshouse.repositorio;

import com.spring.Petshouse.modelo.Mventa;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Vventa extends MongoRepository<Mventa, String>{
    
}
