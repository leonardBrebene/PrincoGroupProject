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
@Table (name="intrari_materii_prime")
public class IntrareMateriiPrime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idIntrareMateriiPrime")
    private int idIntrareMateriiPrime;
    @Column(name="idIntrareFK")
    private int idIntrareFK;
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
