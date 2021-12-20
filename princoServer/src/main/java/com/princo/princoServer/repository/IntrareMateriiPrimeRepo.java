package com.princo.princoServer.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.princo.princoServer.entity.IntrareMateriiPrime;
import org.springframework.data.jpa.repository.Query;
import java.util.List;


public interface IntrareMateriiPrimeRepo extends JpaRepository<IntrareMateriiPrime,Integer> {
   
    @Query( value = "select * from intrari_materii_prime i where i.idIntrareFK = :id",nativeQuery = true)
    List<IntrareMateriiPrime> findAllByPaletId(Integer id);
    
    @Query( value = "select sum(i.quantity) FROM intrari_materii_prime i where i.idIntrareFK= :idFK AND i.material= :material",nativeQuery = true)
        Integer sumByPaletnumberAndMaterialMP1(Integer idFK,String material);
}