package com.spring.Petshouse.repositorio;

import com.spring.Petshouse.modelo.Mproducto;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Vproducto extends MongoRepository<Mproducto, String>{
    
}
