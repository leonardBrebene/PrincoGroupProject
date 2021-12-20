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
@Table (name="intrari_semifabricate1")
public class IntrareSemifabricate1 {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idIntrareSemifabricate")
    private int idIntrareSemifabricat;
    @Column(name="idIntrarePaletFK")
    private int idIntrarePaletFK;
    @Column(name="idIntrarePaletMateriiPrimeFK")
    private int idIntrarePaletMateriiPrimeFK;
    @Column(name="material")
    private String material;
    @Column(name="userName")
    private String userName;
    @Column(name="dateOfCreate")
    private String dateOfCreate;
    @Column(name="quantity")
    private float quantity;
    @Column(name="employee")
    private String employee;
}
