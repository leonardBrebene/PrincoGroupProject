package com.princo.princoServer.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

import com.princo.princoServer.entity.IntrareMateriiPrime;

public interface IntrareMateriiPrimeRepo extends JpaRepository<IntrareMateriiPrime,Integer> {
   
    @Query( value = "select * from intrari_materii_prime i where i.idIntrare = :id",nativeQuery = true)
    List<IntrareMateriiPrime> findAllByPaletId(Integer id);
}