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

import com.princo.princoServer.entity.RawMaterialsEntry1;
import com.princo.princoServer.entity.SemiproductsEntry1;
import com.princo.princoServer.entity.Test2;
import com.princo.princoServer.entity.Lot;
import com.princo.princoServer.entity.Palet;

import com.princo.princoServer.service.RawMaterialsEntry1Service;
import com.princo.princoServer.service.SemiproductsEntry1Service;
import com.princo.princoServer.service.TestService;
import com.princo.princoServer.service.LotService;
import com.princo.princoServer.service.PaletService;

@RestController
public class PrincoController {
    @Autowired
    private PaletService paletService;
    @Autowired
    private RawMaterialsEntry1Service intrareMateriiPrimeService;
    @Autowired
    private SemiproductsEntry1Service intrareSemifabricate1Service;
    @Autowired
    private LotService lotService;
    @Autowired
    private TestService testService;

    @CrossOrigin
    @GetMapping("/stocuriPaleti/{tipMaterial}")
    public List<Palet> stocuriMateriiPrime(@PathVariable String tipMaterial) {
        return paletService.findPaletsByMaterialType(tipMaterial);
    }

    @CrossOrigin
    @GetMapping("/stocuriPalet/{uniqueId}")
    public Palet paletMateriiPrime(@PathVariable String uniqueId) {
        System.out.println(uniqueId);
        return paletService.getPaletByUniqueId(uniqueId);
    }

    @CrossOrigin
    @PostMapping("/stocuriPalet/adauga")
    public Map<String, Object> addPalet(@RequestBody Palet m1) {

        m1.setDateOfCreate(LocalDateTime.now().toString().substring(0,19));

        if (paletService.addPalet(m1)) {
            return Collections.singletonMap("succes", true);
        } else {
            return Collections.singletonMap("fail", false);
        }
    }

    @CrossOrigin
    @GetMapping("/stocuriIntrariMateriiPrime1/{id}")
    public List<RawMaterialsEntry1> intrariMateriiPrime(@PathVariable Integer id) {
        return intrareMateriiPrimeService.getRawMaterialsEntrances(id);
    }

    @CrossOrigin
    @GetMapping("/stocuriIntrariSemifabricate1/{id}")
    public List<SemiproductsEntry1> intrariSemifabricate1(@PathVariable Integer id) {
        return intrareSemifabricate1Service.colecteazaIntrariSemifabricate(id);
    }

    @CrossOrigin
    @PostMapping("/stocuriIntrariMateriPrime/adauga")
    public Map<String, Object> addEntraceToPalet(@RequestBody RawMaterialsEntry1 i1) {
        i1.setDateOfCreate(LocalDateTime.now().toString().substring(0,19));
        if (intrareMateriiPrimeService.adaugaIntrareMateriiPrime(i1)) {
            return Collections.singletonMap("succes", true);
        } else {
            return Collections.singletonMap("fail", false);
        }
    }

    @CrossOrigin
    @PostMapping("/stocuriIntrariSemifabricate1/adauga")
    public Map<String, Object> addEntraceToSemifabricate1Palet(@RequestBody SemiproductsEntry1 i1) {
        i1.setDateOfCreate(LocalDateTime.now().toString().substring(0,19));
        return Collections.singletonMap("message",intrareSemifabricate1Service.adaugaIntrareSemifabricate1(i1));
    }

    @CrossOrigin
    @PostMapping("/lot/adauga")
    public Map<String, String> addLot(@RequestBody Lot l1) {
        l1.setDateOfCreate(LocalDateTime.now().toString().substring(0,19));
        return Collections.singletonMap("message",lotService.addNewLot(l1));
    }

    @CrossOrigin
    @GetMapping("/stocuriLoturi")
    public List <Lot> getAllLots() {
       
        return lotService.getAllLotsExist();
    }
    
    @CrossOrigin
    @GetMapping("/testInner")
    public List<Test2> oriceNumeDeEndpoint2() {
        return testService.saFacemUnTestInnerJoin();
    }

}
