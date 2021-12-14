package com.princo.princoServer.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import com.princo.princoServer.entity.IntrareMateriiPrimeGet;
import com.princo.princoServer.entity.IntrareMateriiPrimePost;
import com.princo.princoServer.repository.IntrareMateriiPrimeGetRepo;
import com.princo.princoServer.repository.IntrareMateriiPrimePostRepo;

@Service
public class IntrarareMateriiPrimeService {
    @Autowired
    private IntrareMateriiPrimeGetRepo repoGet;
    @Autowired
    private IntrareMateriiPrimePostRepo repoPost;

    public boolean adaugaIntrareMateriiPrime(IntrareMateriiPrimePost i1) {
        IntrareMateriiPrimePost saved = repoPost.save(i1);
        if (saved != null) {
            return true;
        }
        return false;
    }

    public List<IntrareMateriiPrimeGet> colecteazaIntrariMateriiPrime(Integer id) {
        return repoGet.findAllByPaletId(id);
    }
}


