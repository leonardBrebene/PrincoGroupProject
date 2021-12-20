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

import com.princo.princoServer.entity.IntrareMateriiPrime;
import com.princo.princoServer.entity.IntrareSemifabricate1;
import com.princo.princoServer.entity.MateriiPrime;
import com.princo.princoServer.entity.Semifabricate1;
import com.princo.princoServer.service.IntrarareMateriiPrimeService;
import com.princo.princoServer.service.IntrareSemifabricate1Service;
import com.princo.princoServer.service.MateriiPrimeService;
import com.princo.princoServer.service.Semifabricate1Service;

@RestController
public class PrincoController {
    @Autowired
    private MateriiPrimeService materiiPrimeService;
    @Autowired
    private IntrarareMateriiPrimeService intrareMateriiPrimeService;
    @Autowired
    private Semifabricate1Service semifabricate1Service;
    @Autowired
    private IntrareSemifabricate1Service intrareSemifabricate1Service;

    @CrossOrigin
    @GetMapping("/stocuriMateriiPrime")
    public List<MateriiPrime> stocuriMateriiPrime() {
        return materiiPrimeService.colecteazaMateriiPrime();
    }

    @CrossOrigin
    @GetMapping("/stocuriIntrariMateriiPrime/{id}")

    public List<IntrareMateriiPrime> intrariMateriiPrime(@PathVariable Integer id) {
        return intrareMateriiPrimeService.colecteazaIntrariMateriiPrime(id);
    }

    @CrossOrigin
    @GetMapping("/stocuriMateriiPrime/{date}")
    public MateriiPrime paletMateriiPrime(@PathVariable String date) {
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
    public Map<String, Object> addEntraceToPalet(@RequestBody IntrareMateriiPrime i1) {

        if (intrareMateriiPrimeService.adaugaIntrareMateriiPrime(i1)) {
            return Collections.singletonMap("succes", true);
        } else {
            return Collections.singletonMap("fail", false);
        }
    }

    @CrossOrigin
    @GetMapping("/stocuriSemifabricate1")
    public List<Semifabricate1> stocuriSemifabricate1() {
        return semifabricate1Service.colecteazaSemifabricate1();
    }

    @CrossOrigin
    @PostMapping("/stocuriSemifabricate1/adauga")
    public Map<String, Object> addSemifabricatePalet(@RequestBody Semifabricate1 s1) {

        s1.setDateOfCreate(LocalDateTime.now().toString());

        if (semifabricate1Service.adaugaPaletSemifabricate1(s1)) {
            return Collections.singletonMap("succes", true);
        } else {
            return Collections.singletonMap("fail", false);
        }
    }

    @CrossOrigin
    @GetMapping("/stocuriIntrariSemifabricate/{id}")

    public List<IntrareSemifabricate1> intrariSemifabricate1(@PathVariable Integer id) {
        return intrareSemifabricate1Service.colecteazaIntrariSemifabricate(id);
    }

    @CrossOrigin
    @PostMapping("/stocuriIntrariSemifabricate1/adauga")
    public Map<String, Object> addEntraceToSemifabricate1Palet(@RequestBody IntrareSemifabricate1 i1) {
        
        return Collections.singletonMap(intrareSemifabricate1Service.adaugaIntrareSemifabricate1(i1), true);
    }
}
