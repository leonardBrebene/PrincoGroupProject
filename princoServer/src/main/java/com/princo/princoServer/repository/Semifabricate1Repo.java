package com.princo.princoServer.repository;
import com.princo.princoServer.entity.Semifabricate1;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
    
public interface Semifabricate1Repo extends JpaRepository<Semifabricate1,Integer> {
    @Query( value = "select * from semifabricate1 s1  where s1.dateOfCreate = :date",nativeQuery = true)
    Semifabricate1 findPaletSemifabricate1ByDate(String date);
}
