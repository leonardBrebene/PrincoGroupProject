package com.princo.princoServer.repository;
import java.util.List;

import com.princo.princoServer.entity.Palet;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface PaletRepo extends JpaRepository<Palet,Integer> {
    @Query( value = "select * from palet p where p.uniqueId = :uniqueId",nativeQuery = true)
    Palet findByPaletUniqueId(String uniqueId);

    @Query( value = "select max(p.entryId) from palet p",nativeQuery = true)
    Integer findLastPalet();

    @Query( value = "select * from palet p where p.typeofPalet = :materialType",nativeQuery = true)
    List<Palet> findAllPaletsByMaterialType(String materialType);
}
