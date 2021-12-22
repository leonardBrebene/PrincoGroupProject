package com.princo.princoServer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import com.princo.princoServer.entity.Palet;
import com.princo.princoServer.repository.PaletRepo;

@Service
public class PaletService {
    @Autowired
    private PaletRepo repo;

    public boolean addPalet(Palet p) {
        Integer lastId = repo.findLastPalet();
        if(lastId==null){
            lastId=0;
        }
       
        switch (p.getTypeofPalet()) {
            case "materiiPrime1":
                p.setUniqueId(String.valueOf(lastId + 1) + "MP1");
                break;
            case "materiiPrime2":
                p.setUniqueId(String.valueOf(lastId + 1) + "MP2");
                break;
            case "semifabricate1":
                p.setUniqueId(String.valueOf(lastId + 1) + "SF1");
                break;
            case "semifabricate2":
                p.setUniqueId(String.valueOf(lastId + 1) + "SF2");
                break;
            case "semifabricate3":
                p.setUniqueId(String.valueOf(lastId + 1) + "SF3");
                break;
            case "materiiFinite1":
                p.setUniqueId(String.valueOf(lastId + 1) + "MF1");
                break;
            case "materiiFinite2":
                p.setUniqueId(String.valueOf(lastId + 1) + "MF2");
                break;
        }

        System.out.println("IdulUnic este" +p.getUniqueId() );
        Palet pSaved = repo.save(p);
        if (pSaved != null) {
            return true;
        }
        return false;
    }

    public List<Palet> findPaletsByMaterialType(String materialType) {
        return repo.findAllPaletsByMaterialType(materialType);
    }

    public Palet getPaletByUniqueId(String uniqueId) {
        return repo.findByPaletUniqueId(uniqueId);
    }
}
