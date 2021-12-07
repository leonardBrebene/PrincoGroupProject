package com.princo.princoServer.controller;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.princo.princoServer.entity.MateriiPrime;
import com.princo.princoServer.service.MateriiPrimeService;

@RestController
public class PrincoController {
    @Autowired
    private MateriiPrimeService service;

    @CrossOrigin
    @GetMapping ("/stocuriMateriiPrime")
    public List<MateriiPrime> allEvents(){
    return  service.colecteazaMateriiPrime();
    }
    

    @CrossOrigin
    @PostMapping("/stocuriMateriiPrime/adauga")
    public Map<String, Object> addGreeting(@RequestBody MateriiPrime m1) {

            if (service.adaugaPaletMateriiPrime(m1)) {
                return Collections.singletonMap("succes", true);
            } 
            else {
                return Collections.singletonMap("fail", false);
            }
        
    }

}
