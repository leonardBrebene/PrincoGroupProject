package com.princo.princoServer.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import com.princo.princoServer.entity.IntrareMateriiPrime;
import com.princo.princoServer.repository.IntrareMateriiPrimeRepo;

@Service
public class IntrarareMateriiPrimeService {
    @Autowired
    private IntrareMateriiPrimeRepo repo;

    public boolean adaugaIntrareMateriiPrime(IntrareMateriiPrime i1) {
        IntrareMateriiPrime saved = repo.save(i1);
        if (saved != null) {
            return true;
        }
        return false;
    }

    public List<IntrareMateriiPrime> colecteazaIntrariMateriiPrime(Integer id) {
        return repo.findAllByPaletId(id);
    }
}


