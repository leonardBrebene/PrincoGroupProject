package com.princo.princoServer.service;

import java.util.List;

import com.princo.princoServer.entity.Lot;
import com.princo.princoServer.repository.LotRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LotService {
    @Autowired
    private LotRepo repo;

    public String addNewLot(Lot l) {
        Lot lSaved = repo.save(l);
        if (lSaved != null) {
            return "A fost adaugat cu succes";
        }
        return "Nu a putut fi adaugat lotul";
    }

    public List <Lot> getAllLotsExist(){
        return repo.findAll();
    }
}
