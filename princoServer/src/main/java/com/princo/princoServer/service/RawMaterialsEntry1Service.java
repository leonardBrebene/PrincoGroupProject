package com.princo.princoServer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;

import com.princo.princoServer.entity.RawMaterialsEntry1;
import com.princo.princoServer.entity.SemiproductsEntry1;
import com.princo.princoServer.repository.RawMaterialsEntry1Repo;
import com.princo.princoServer.repository.SemiproductsEntry1Repo;

@Service
public class RawMaterialsEntry1Service {

    @Autowired
    private RawMaterialsEntry1Repo repo;
    @Autowired
    private SemiproductsEntry1Repo repoSemi;

    public boolean adaugaIntrareMateriiPrime(RawMaterialsEntry1 i1) {
        RawMaterialsEntry1 saved = repo.save(i1);
        if (saved != null) {
            return true;
        }
        return false;
    }

    public List<RawMaterialsEntry1> getRawMaterialsEntrances(Integer id) {
        List<RawMaterialsEntry1> rawMaterialsEntries = repo.findAllRawMaterial1EntriesByPaletId(id);
        List<SemiproductsEntry1> semiproductsExits = repoSemi.findAllSemiproducts1EntriesByLastPaletId(id);
        semiproductsExits.stream()
                .forEach(item -> rawMaterialsEntries
                        .add(new RawMaterialsEntry1(item.getEntryId(), item.getPaletEntryFK(), item.getOldPiece(),
                                item.getUserNameManager(), item.getDateOfCreate(), item.getQuantityOnLastPalet() * -1,
                                item.getEmployee(), item.getLotFK())));
        rawMaterialsEntries.sort(Comparator.comparing(RawMaterialsEntry1::getDateOfCreate));
        return rawMaterialsEntries;
    }
}
