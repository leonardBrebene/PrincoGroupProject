package com.princo.princoServer.repository; 
import java.util.List;

import com.princo.princoServer.entity.SemiproductsEntry1;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


    public interface SemiproductsEntry1Repo extends JpaRepository<SemiproductsEntry1,Integer> {
        @Query(value = "select * from semiproduct_entries1 s where s.lastPaletUniqueFk= :id", nativeQuery = true)
        List<SemiproductsEntry1> findAllSemiproducts1EntriesByLastPaletId(Integer id);
       
        @Query( value = "select * from semiproduct_entries1 s where s.paletEntryFK = :id",nativeQuery = true)
        List<SemiproductsEntry1> findAllByPaletId(Integer id);

        @Query( value = "select sum(s.quantity) FROM semiproduct_entries1 s where s.lastPaletUniqueFK= :idFK AND s.oldPiece= :oldPiece",nativeQuery = true)
        Integer sumByPaletnumberAndMaterialS1(Integer idFK,String oldPiece);
        
    }
