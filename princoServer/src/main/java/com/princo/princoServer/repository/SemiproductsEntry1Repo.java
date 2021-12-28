package com.princo.princoServer.repository; 
import java.util.List;

import com.princo.princoServer.entity.SemiproductsEntry1;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


    public interface SemiproductsEntry1Repo extends JpaRepository<SemiproductsEntry1,Integer> {
        //select fields that map to semiproduct entries inner join lot and lastPalet entry
        final String querry1="select s.entryId,s.paletEntryFK,p.uniqueId as lastPaletUniqueFK,s.oldPiece,s.newPiece,s.quantity,s.quantityOnLastPalet,l.nameOfLot as lotFK,s.dateOfCreate,s.userNameManager,s.employee from semiproduct_entries1 s inner join lot l on l.entryId=s.lotFK inner join palet p on s.lastPaletUniqueFK=p.entryId where s.paletEntryFK = :id ;";

        @Query(value = "select * from semiproduct_entries1 s where s.lastPaletUniqueFk= :id", nativeQuery = true) //TODO custom querry
        List<SemiproductsEntry1> findAllSemiproducts1EntriesByLastPaletId(Integer id);
       
        @Query( value = querry1,nativeQuery = true)
        List<SemiproductsEntry1> findAllByPaletId(Integer id);

        @Query( value = "select sum(s.quantityOnLastPalet) FROM semiproduct_entries1 s where s.lastPaletUniqueFK= :idFK AND s.oldPiece= :oldPiece",nativeQuery = true)
        Integer sumByPaletnumberAndMaterialS1(String idFK,String oldPiece);
        
    }
