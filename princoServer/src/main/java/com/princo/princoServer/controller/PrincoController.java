package com.princo.princoServer.controller;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.princo.princoServer.entity.IntrareMateriiPrime1;
import com.princo.princoServer.entity.IntrareSemifabricate1;
import com.princo.princoServer.entity.Palet;

import com.princo.princoServer.service.IntrarareMateriiPrimeService;
import com.princo.princoServer.service.IntrareSemifabricate1Service;
import com.princo.princoServer.service.PaletService;


@RestController
public class PrincoController {
    @Autowired
    private PaletService paletService;
    @Autowired
    private IntrarareMateriiPrimeService intrareMateriiPrimeService;

    @Autowired
    private IntrareSemifabricate1Service intrareSemifabricate1Service;

    @CrossOrigin
    @GetMapping("/stocuriPaleti/{tipMaterial}")
    public List<Palet> stocuriMateriiPrime(@PathVariable String tipMaterial) {
        return paletService.findPaletsByMaterialType(tipMaterial);
    }

    @CrossOrigin
    @GetMapping("/stocuriMateriiPrime/{uniqueId}")
    public Palet paletMateriiPrime(@PathVariable String uniqueId) {
        return paletService.getPaletByUniqueId(uniqueId);
    }

    @CrossOrigin
    @PostMapping("/stocuriMateriiPrime/adauga")
    public Map<String, Object> addPalet(@RequestBody Palet m1) {

        m1.setDateOfCreate(LocalDateTime.now().toString());

        if (paletService.addPalet(m1)) {
            return Collections.singletonMap("succes", true);
        } else {
            return Collections.singletonMap("fail", false);
        }
    }

    @CrossOrigin
    @GetMapping("/stocuriIntrariMateriiPrime1/{id}")
    public List<IntrareMateriiPrime1> intrariMateriiPrime(@PathVariable Integer id) {
        return intrareMateriiPrimeService.getPrimeMaterialsEntrances(id);
    }

    @CrossOrigin
    @PostMapping("/stocuriIntrariMateriPrime/adauga")
    public Map<String, Object> addEntraceToPalet(@RequestBody IntrareMateriiPrime1 i1) {
        i1.setDateOfCreate(LocalDateTime.now().toString());
        if (intrareMateriiPrimeService.adaugaIntrareMateriiPrime(i1)) {
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
