package com.spring.Petshouse.Controlador;

import com.spring.Petshouse.modelo.Mmascota;
import com.spring.Petshouse.modelo.Mventa;
import java.util.List;
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
import com.spring.Petshouse.repositorio.Vventa;
import java.util.Optional;

@RestController
@CrossOrigin(origins ="*",methods = {RequestMethod.POST, RequestMethod.GET, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/Venta")
public class Venta {
    @Autowired
    private Vventa R;
    
    @PostMapping("/crear")
    public Mventa crear(@RequestBody @Validated Mventa U) {

        return R.insert(U);
    }

    @GetMapping("/consul")
    public List<Mventa> ConsultarModelo() {
        return R.findAll();
    }
        @GetMapping("/consul/{id}")
    public Optional<Mventa>consultarporId(@PathVariable String id){
        return R.findById(id);
    }

    @PutMapping("/modif/{id}")
    public Mventa actualizarProducto(@PathVariable String id, @RequestBody @Validated Mventa p) {

        return R.save(p);

    }

    @DeleteMapping("/elim/{id}")
    public void eliminar(@PathVariable String id) {
        R.deleteById(id);
    }
}
