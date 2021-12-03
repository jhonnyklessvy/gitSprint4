package com.spring.Petshouse.Controlador;

import com.spring.Petshouse.modelo.Musuario;
import com.spring.Petshouse.repositorio.Vusuario;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.POST, RequestMethod.GET, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/Usuario")
public class Usuario {

    @Autowired
    private Vusuario R;
    
    @Autowired
    private MongoTemplate m;

    @PostMapping("/crear")
    public Musuario crear(@RequestBody @Validated Musuario U) {

        return R.insert(U);
    }

    @GetMapping("/consul")
    public List<Musuario> ConsultarModelo() {
        return R.findAll();
    }

    @GetMapping("/consul/{id}")
    public Optional<Musuario> consultarporId(@PathVariable String id) {
        return R.findById(id);
    }

    @GetMapping("/consultarPorVariosParametros/{usua_nom}/{usua_contr}")
    public List<Musuario>consultarPorVariosParametros(@PathVariable (value="usua_nom") String usua_nom,@PathVariable (value="usua_contr") String usua_contr ) {
        Query q=new Query();
        q.addCriteria(Criteria.where("usua_nom").is(usua_nom).and("usua_contr").is(usua_contr));
        return m.find(q, Musuario.class);
    }

    @PutMapping("/modif/{id}")
        public Musuario actualizarProducto
        (@PathVariable
        String id, 
        @RequestBody @Validated Musuario p
        
            ) {

        return R.save(p);

        }

        @DeleteMapping("/elim/{id}")
        public void eliminar
        (@PathVariable
        String id
        
            ) {
        R.deleteById(id);
        }
    }
