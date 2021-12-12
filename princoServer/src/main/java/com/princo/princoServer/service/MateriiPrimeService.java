package com.princo.princoServer.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import com.princo.princoServer.entity.MateriiPrime;
import com.princo.princoServer.repository.MateriiPrimeRepo;

@Service
public class MateriiPrimeService {
    @Autowired
    private MateriiPrimeRepo repo;

    public boolean adaugaPaletMateriiPrime(MateriiPrime m1) {
        
        MateriiPrime saved = repo.save(m1);
        if (saved != null) {
            return true;
        }
        return false;
    }

    public List<MateriiPrime> colecteazaMateriiPrime() {
        return repo.findAll();
    }
}
