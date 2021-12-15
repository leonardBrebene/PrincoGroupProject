package com.princo.princoServer.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Setter 
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table (name="intrari_materii_prime")
public class IntrareMateriiPrimeGet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idIntrareMateriiPrime")
    private int idIntrareMateriiPrime;
    // @Column(name="idIntrarePalet")
    // private int idIntrarePalet;
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
    
    @JsonIgnore
    @ManyToOne (fetch =FetchType.LAZY)
    @JoinColumn(name="idIntrareFK")
    public MateriiPrime  materiiPrime; 
    
}
