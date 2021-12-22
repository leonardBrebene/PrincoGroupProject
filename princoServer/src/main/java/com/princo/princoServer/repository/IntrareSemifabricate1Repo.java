package com.princo.princoServer.repository; 
import java.util.List;

import com.princo.princoServer.entity.IntrareSemifabricate1;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


    public interface IntrareSemifabricate1Repo extends JpaRepository<IntrareSemifabricate1,Integer> {
       
        @Query( value = "select * from semiproducts1 s where s.paletEntryFK = :id",nativeQuery = true)
        List<IntrareSemifabricate1> findAllByPaletId(Integer id);

        @Query( value = "select sum(s.quantity) FROM semiproducts1 s where s.lastPaletUniqueFK= :idFK AND s.piece= :piece",nativeQuery = true)
        Integer sumByPaletnumberAndMaterialS1(Integer idFK,String piece);
        
    }
