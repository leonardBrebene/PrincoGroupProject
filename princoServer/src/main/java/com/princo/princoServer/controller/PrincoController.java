package com.princo.princoServer.controller;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.princo.princoServer.entity.IntrareMateriiPrimeGet;
import com.princo.princoServer.entity.IntrareMateriiPrimePost;
import com.princo.princoServer.entity.MateriiPrime;
import com.princo.princoServer.service.IntrarareMateriiPrimeService;
import com.princo.princoServer.service.MateriiPrimeService;

@RestController
public class PrincoController {
    @Autowired
    private MateriiPrimeService materiiPrimeService;
    @Autowired
    private IntrarareMateriiPrimeService intrareMateriiPrimeService;

    @CrossOrigin
    @GetMapping("/stocuriMateriiPrime")
    public List<MateriiPrime> stocuriMateriiPrime() {
        return materiiPrimeService.colecteazaMateriiPrime();
    }

    @CrossOrigin
    @GetMapping("/stocuriIntrariMateriiPrime/{id}")
  
    public List<IntrareMateriiPrimeGet> intrariMateriiPrime(@PathVariable Integer id) {
        return intrareMateriiPrimeService.colecteazaIntrariMateriiPrime(id);
    }

    @CrossOrigin
    @GetMapping("/stocuriMateriiPrime/{date}")
    public MateriiPrime paletMateriiPrime(@PathVariable String date){
        return materiiPrimeService.getPaletMateriiPrime(date);
    } 

    @CrossOrigin
    @PostMapping("/stocuriMateriiPrime/adauga")
    public Map<String, Object> addPalet(@RequestBody MateriiPrime m1) {
       
        m1.setDateOfCreate(LocalDateTime.now().toString());
        
        if (materiiPrimeService.adaugaPaletMateriiPrime(m1)) {
            return Collections.singletonMap("succes", true);
        } else {
            return Collections.singletonMap("fail", false);
        }
    }

    @CrossOrigin
    @PostMapping("/stocuriIntrariMateriiPrime/adauga")
    public Map<String, Object> addEntraceToPalet(@RequestBody IntrareMateriiPrimePost i1) {

        if (intrareMateriiPrimeService.adaugaIntrareMateriiPrime(i1)) {
            return Collections.singletonMap("succes", true);
        } else {
            return Collections.singletonMap("fail", false);
        }
    }

}
