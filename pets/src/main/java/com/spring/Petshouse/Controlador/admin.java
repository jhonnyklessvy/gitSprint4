package com.spring.Petshouse.Controlador;

import com.spring.Petshouse.modelo.Madmin;
import com.spring.Petshouse.modelo.Madopcion;
import com.spring.Petshouse.modelo.Musuario;
import com.spring.Petshouse.repositorio.Vadmin;
import com.spring.Petshouse.repositorio.Vadopcion;
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
@RequestMapping("/Admin")
public class admin {

    @Autowired
    private Vadmin R;
    @Autowired
    private MongoTemplate m;

    @PostMapping("/crear")
    public Madmin crear(@RequestBody @Validated Madmin U) {

        return R.insert(U);
    }

    @GetMapping("/consul")
    public List<Madmin> ConsultarModelo() {
        return R.findAll();
    }

    @GetMapping("/consul/{id}")
    public Optional<Madmin> consultarporId(@PathVariable String id) {
        return R.findById(id);
    }

    @GetMapping("/consultarPorVariosParametros/{admin_usua}/{admin_contr}")
    public List<Madmin> consultarPorVariosParametros(@PathVariable(value = "admin_usua") String admin_usua, @PathVariable(value = "admin_contr") String admin_contr) {
        Query q = new Query();
        q.addCriteria(Criteria.where("admin_usua").is(admin_usua).and("admin_contr").is(admin_contr));
        return m.find(q, Madmin.class);
    }

    @PutMapping("/modif/{id}")
    public Madmin actualizarProducto(@PathVariable String id, @RequestBody @Validated Madmin p) {

        return R.save(p);

    }

    @DeleteMapping("/elim/{id}")
    public void eliminar(@PathVariable String id) {
        R.deleteById(id);
    }

}
