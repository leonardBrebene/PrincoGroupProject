package com.princo.princoServer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.princo.princoServer.entity.RawMaterialsEntry1;

import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface RawMaterialsEntry1Repo extends JpaRepository<RawMaterialsEntry1, Integer> {
     final String querry1="select r.entryId,r.paletEntryFK,r.piece,r.userNameManager,r.dateOfCreate,r.quantity,r.employee,l.nameOfLot as lotFK from raw_materials_entries1 r inner join  lot l on r.entryId=l.entryId where r.paletEntryFK= :id";
    @Query(value = querry1, nativeQuery = true)
    List<RawMaterialsEntry1> findAllRawMaterial1EntriesByPaletId(Integer id);

    @Query(value = "select sum(r.quantity) FROM raw_materials_entries1 r  where r.paletEntryFK= :idFK AND r.piece= :piece", nativeQuery = true)
    Integer sumByPaletNumberAndMaterialMP1(String idFK, String piece);
}
