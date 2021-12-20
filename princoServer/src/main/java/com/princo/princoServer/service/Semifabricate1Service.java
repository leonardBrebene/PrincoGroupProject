package com.princo.princoServer.service;

import java.util.List;

import com.princo.princoServer.entity.Semifabricate1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.princo.princoServer.repository.Semifabricate1Repo;

@Service
public class Semifabricate1Service {
    @Autowired
    private Semifabricate1Repo repo;

    public boolean adaugaPaletSemifabricate1(Semifabricate1 m1) {

        Semifabricate1 saved = repo.save(m1);
        if (saved != null) {
            return true;
        }
        return false;
    }

    public List<Semifabricate1> colecteazaSemifabricate1() {
        return repo.findAll();
    }

    public Semifabricate1 getPaletSemifabricate1ByDate(String date) {
        return repo.findPaletSemifabricate1ByDate(date);
    }
}