package com.princo.princoServer.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;



import com.princo.princoServer.entity.MateriiPrime;

public interface MateriiPrimeRepo extends JpaRepository<MateriiPrime,Integer> {
    @Query( value = "select * from materii_prime m  where m.dateOfCreate = :date",nativeQuery = true)
    MateriiPrime findByPaletDate(String date);
}
