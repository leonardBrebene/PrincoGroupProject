package com.princo.princoServer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.princo.princoServer.entity.RawMaterialsEntry1;
import com.princo.princoServer.entity.SemiproductsEntry1;

import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface RawMaterialsEntry1Repo extends JpaRepository<RawMaterialsEntry1, Integer> {

    @Query(value = "select * from raw_materials_entries1 r where r.paletEntryFK= :id", nativeQuery = true)
    List<RawMaterialsEntry1> findAllRawMaterial1EntriesByPaletId(Integer id);

    @Query(value = "select sum(r.quantity) FROM raw_materials_entries1 r  where r.paletEntryFK= :idFK AND r.piece= :piece", nativeQuery = true)
    Integer sumByPaletNumberAndMaterialMP1(Integer idFK, String piece);
}
