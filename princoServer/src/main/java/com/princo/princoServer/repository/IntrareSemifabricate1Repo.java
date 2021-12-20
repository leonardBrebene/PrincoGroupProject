package com.princo.princoServer.repository; 
import java.util.List;

import com.princo.princoServer.entity.IntrareSemifabricate1;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


    public interface IntrareSemifabricate1Repo extends JpaRepository<IntrareSemifabricate1,Integer> {
       
        @Query( value = "select * from intrari_semifabricate1 i where i.idIntrarePaletFK = :id",nativeQuery = true)
        List<IntrareSemifabricate1> findAllByPaletId(Integer id);

        @Query( value = "select sum(i.quantity) FROM intrari_semifabricate1 i where i.idIntrarePaletMateriiPrimeFK= :idFK AND i.material= :material",nativeQuery = true)
        Integer sumByPaletnumberAndMaterialS1(Integer idFK,String material);
        
    }
