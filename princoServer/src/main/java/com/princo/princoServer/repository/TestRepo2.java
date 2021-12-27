package com.princo.princoServer.repository;
import java.util.List;
import com.princo.princoServer.entity.Test2;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface TestRepo2 extends JpaRepository<Test2,Integer> {
    @Query( value = "select t.entryId, t.piece,l.nameOfLot as nameOfLot1 from test t inner join  lot l on t.lotId=l.entryId",nativeQuery = true)
    List<Test2> findInnerJoin();
    @Query( value = "select t.entryId as ceva, t.piece,l.nameOfLot from test t inner join  lot l on t.lotId=l.entryId",nativeQuery = true)
    List<Object> findObjects();
}
