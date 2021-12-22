package com.princo.princoServer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import com.princo.princoServer.entity.IntrareMateriiPrime1;
import com.princo.princoServer.repository.IntrareMateriiPrime1Repo;

@Service
public class IntrarareMateriiPrimeService {

    @Autowired
    private IntrareMateriiPrime1Repo repo;

    public boolean adaugaIntrareMateriiPrime(IntrareMateriiPrime1 i1) {
        IntrareMateriiPrime1 saved = repo.save(i1);
        if (saved != null) {
            return true;
        }
        return false;
    }

    public List<IntrareMateriiPrime1> getPrimeMaterialsEntrances(Integer id) {
        List<IntrareMateriiPrime1> intrareMateriiPrime1 = repo.findAllSemiproducts1EntriesByLastPaletId(id);
         intrareMateriiPrime1.stream()
                .forEach(item -> 
                    item.setQuantity(item.getQuantity()*-1));

        return intrareMateriiPrime1;
    }
}
