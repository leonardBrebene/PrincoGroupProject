package com.princo.princoServer.service;

import java.util.List;

import com.princo.princoServer.entity.SemiproductsEntry1;
import com.princo.princoServer.repository.RawMaterialsEntry1Repo;
import com.princo.princoServer.repository.SemiproductsEntry1Repo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SemiproductsEntry1Service {
    @Autowired
    private SemiproductsEntry1Repo repoSF;
    @Autowired
    private RawMaterialsEntry1Repo repoMP;

    public String adaugaIntrareSemifabricate1(SemiproductsEntry1 is1) {

        Integer sumSemifabricate = repoSF.sumByPaletnumberAndMaterialS1(is1.getLastPaletFK(),is1.getOldPiece());
        Integer sumMateriiPrime = repoMP.sumByPaletNumberAndMaterialMP1(is1.getLastPaletFK(),is1.getOldPiece());
        System.out.println("suma Materii Prime "+ sumMateriiPrime+ " suma semifabricate "+sumSemifabricate +" cantitate introdusa "+is1.getQuantityOnLastPalet());
        if (sumSemifabricate != null && sumMateriiPrime != null) {
            if (sumMateriiPrime >= sumSemifabricate + is1.getQuantityOnLastPalet()) {
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

    public List<SemiproductsEntry1> colecteazaIntrariSemifabricate(Integer id) {
        return repoSF.findAllByPaletId(id);
    }
}
