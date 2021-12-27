package com.princo.princoServer.repository;

import com.princo.princoServer.entity.Lot;

import org.springframework.data.jpa.repository.JpaRepository;

public interface LotRepo extends JpaRepository<Lot,Integer>{
    
}
