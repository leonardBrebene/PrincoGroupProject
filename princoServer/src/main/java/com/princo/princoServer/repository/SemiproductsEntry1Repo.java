package com.princo.princoServer.repository; 
import java.util.List;

import com.princo.princoServer.entity.SemiproductsEntry1;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


    public interface SemiproductsEntry1Repo extends JpaRepository<SemiproductsEntry1,Integer> {
        //select fields that map to semiproduct entries inner join lot and lastPalet entry
        final String querry1="select s.entryId,s.paletEntryFK,p.uniqueId as lastPaletFK,s.oldPiece,s.newPiece,s.quantity,s.quantityOnLastPalet,l.nameOfLot as lotFK,s.dateOfCreate,s.userNameManager,s.employee from semiproduct_entries s inner join lot l on l.entryId=s.lotFK inner join palet p on s.lastPaletFK=p.entryId where s.paletEntryFK = :id ;";
        //select fields that map to semiproduct entries inner join last palet
        final String querry2="select s.entryId,s.paletEntryFK,s.lastPaletFK,s.oldPiece,s.newPiece,s.quantity,s.quantityOnLastPalet,l.nameOfLot as lotFK,s.dateOfCreate,s.userNameManager,s.employee from semiproduct_entries s inner join lot l on l.entryId=s.lotFK  where s.lastPaletFk = :id";
        
        @Query( value = querry1,nativeQuery = true)
        List<SemiproductsEntry1> findAllByPaletId(Integer id);
        
        @Query(value = querry2, nativeQuery = true) 
        List<SemiproductsEntry1> findAllSemiproducts1EntriesByLastPaletId(Integer id);
       
        @Query( value = "select sum(s.quantityOnLastPalet) FROM semiproduct_entries s where s.lastPaletFK= :idFK AND s.oldPiece= :oldPiece",nativeQuery = true)
        Integer sumByPaletnumberAndMaterialS1(String idFK,String oldPiece);
        
    }
