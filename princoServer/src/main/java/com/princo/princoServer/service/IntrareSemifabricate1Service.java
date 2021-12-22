package com.princo.princoServer.service;

import java.util.List;

import com.princo.princoServer.entity.IntrareSemifabricate1;
import com.princo.princoServer.repository.IntrareMateriiPrime1Repo;
import com.princo.princoServer.repository.IntrareSemifabricate1Repo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class IntrareSemifabricate1Service {
    @Autowired
    private IntrareSemifabricate1Repo repoSF;
    @Autowired
    private IntrareMateriiPrime1Repo repoMP;

    public String adaugaIntrareSemifabricate1(IntrareSemifabricate1 is1) {

        Integer sumSemifabricate = repoSF.sumByPaletnumberAndMaterialS1(is1.getPaletEntryFK(),is1.getPiece());
        Integer sumMateriiPrime = repoMP.sumByPaletnumberAndMaterialMP1(is1.getLastPaletUniqueFK(),is1.getPiece());
        System.out.println("suma Materii Prime "+ sumMateriiPrime+ "suma semifabricate"+sumSemifabricate);
        if (sumSemifabricate != null && sumMateriiPrime != null) {
            if (sumMateriiPrime >= sumSemifabricate + is1.getQuantity()) {
                repoSF.save(is1);
                return "Intrare adaugata cu succes";
            } else {
                return "In paletul de materii prime nu exista aceasta piesa in cant coresp ";
            }
        } else if (sumSemifabricate == null && sumMateriiPrime != null) {
            if (sumMateriiPrime >= is1.getQuantity()) {
                repoSF.save(is1);
                return "Intrare adaugata cu succes";
            } else {
                return "In paletul de materii prime nu exista aceasta piesa in cant coresp ";
            }
        } else if (sumMateriiPrime == null) {
            return "In paletul de materii prime nu exista aceasta piesa";
        } else {
            return "In paletul de materii prime nu exista aceasta piesa";
        }
    }

    public List<IntrareSemifabricate1> colecteazaIntrariSemifabricate(Integer id) {
        return repoSF.findAllByPaletId(id);
    }
}
