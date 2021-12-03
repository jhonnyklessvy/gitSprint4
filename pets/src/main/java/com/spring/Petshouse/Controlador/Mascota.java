package com.spring.Petshouse.Controlador;

import com.spring.Petshouse.modelo.Mmascota;
import com.spring.Petshouse.repositorio.Vmascota;
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
@RequestMapping("/Mascota")
public class Mascota {
    @Autowired
    private Vmascota R;
    
    @PostMapping("/crear")
    public Mmascota crear(@RequestBody @Validated Mmascota U) {

        return R.insert(U);
    }
    
    @GetMapping("/consul/{id}")
    public Optional<Mmascota>consultarporId(@PathVariable String id){
        return R.findById(id);
    }

    @GetMapping("/consul")
    public List<Mmascota> ConsultarModelo() {
        return R.findAll();
    }

    @PutMapping("/modif/{id}")
    public Mmascota actualizarProducto(@PathVariable String id, @RequestBody @Validated Mmascota p) {

        return R.save(p);

    }

    @DeleteMapping("/elim/{id}")
    public void eliminar(@PathVariable String id) {
        R.deleteById(id);
    }
}
