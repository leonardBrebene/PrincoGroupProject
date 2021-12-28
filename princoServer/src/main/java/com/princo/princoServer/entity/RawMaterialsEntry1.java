package com.princo.princoServer.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;




@Setter 
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table (name="raw_materials_entries1")
public class RawMaterialsEntry1 {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="entryId")
    private int entryId;
    @Column(name="paletEntryFK")
    private int paletEntryFK;
    @Column(name="piece")
    private String piece;
    @Column(name="userNameManager")
    private String userNameManager;
    @Column(name="dateOfCreate")
    private String dateOfCreate;
    @Column(name="quantity")
    private int quantity;
    @Column(name="employee")
    private String employee;
    @Column(name="lotFK")
    private String lotFK;
}
