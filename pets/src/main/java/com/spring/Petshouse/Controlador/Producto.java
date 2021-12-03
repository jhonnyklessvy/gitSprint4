package com.spring.Petshouse.Controlador;

import com.spring.Petshouse.modelo.Mproducto;
import com.spring.Petshouse.repositorio.Vproducto;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
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
@CrossOrigin(origins ="*",methods = {RequestMethod.POST, RequestMethod.GET, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/Producto")
public class Producto {
    
    @Autowired
    private Vproducto R;
    
    @PostMapping("/crear")
    public Mproducto crear(@RequestBody @Validated Mproducto U) {

        return R.insert(U);
    }

    @GetMapping("/consul")
    public List<Mproducto> ConsultarModelo() {
        return R.findAll();
    }
        @GetMapping("/consul/{id}")
    public Optional<Mproducto>consultarporId(@PathVariable String id){
        return R.findById(id);
    }

    @PutMapping("/modif/{id}")
    public Mproducto actualizarProducto(@PathVariable String id, @RequestBody @Validated Mproducto p) {

        return R.save(p);

    }

    @DeleteMapping("/elim/{id}")
    public void eliminar(@PathVariable String id) {
        R.deleteById(id);
    }
}
