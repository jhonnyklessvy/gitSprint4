package com.spring.Petshouse.repositorio;

import com.spring.Petshouse.modelo.Mmascota;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Vmascota extends MongoRepository<Mmascota, String>{
    
}
