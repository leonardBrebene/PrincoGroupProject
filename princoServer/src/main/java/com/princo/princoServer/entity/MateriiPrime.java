package com.princo.princoServer.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;



@Setter 
@Getter
@Entity
@Data
@Table (name="materii_prime")
public class MateriiPrime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idIntrare")
    private int idIntrare;
    @Column(name="userName")
    private String userName;
    @Column(name="material")
    private String material;
    @Column(name="dateOfCreate")
    private String dateOfCreate;
    

    @OneToMany(cascade = CascadeType.ALL, mappedBy="materiiPrime")
    public List<IntrareMateriiPrimeGet> intrariMateriiPrime; 

    


   
}
