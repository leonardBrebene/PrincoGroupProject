package com.princo.princoServer.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.princo.princoServer.entity.IntrareMateriiPrime1;
import org.springframework.data.jpa.repository.Query;
import java.util.List;


public interface IntrareMateriiPrime1Repo extends JpaRepository<IntrareMateriiPrime1,Integer> {
    String s="select * from  raw_materials_entries1 r where r.paletEntryFK= :id1";
    
    @Query( value = "select s.entryId, s.paletEntryFK, s.piece, s.quantity ,s.dateOfCreate,s.userNameManager,s.employee,s.lot from semiproducts1 s where s.lastPaletUniqueFk= :id",nativeQuery = true)
    List<IntrareMateriiPrime1> findAllSemiproducts1EntriesByLastPaletId(Integer id); 
    
    @Query( value = "select sum(r.quantity) FROM raw_materials_entries1 r  where r.paletEntryFK= :idFK AND r.piece= :piece",nativeQuery = true)
        Integer sumByPaletnumberAndMaterialMP1(Integer idFK,String piece);
}
