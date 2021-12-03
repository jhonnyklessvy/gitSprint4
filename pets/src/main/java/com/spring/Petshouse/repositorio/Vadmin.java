package com.spring.Petshouse.repositorio;

import com.spring.Petshouse.modelo.Madmin;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Vadmin extends MongoRepository<Madmin, String>{
    
}
