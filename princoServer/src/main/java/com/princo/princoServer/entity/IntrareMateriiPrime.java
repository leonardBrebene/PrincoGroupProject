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
import javax.persistence.Inheritance;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@JsonSerialize(include=JsonSerialize.Inclusion.NON_NULL)
@Setter 
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table (name="intrarimateriiprime")
public class IntrareMateriiPrime {
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
    @ManyToOne(optional=false) 
    @JoinColumn(name="idIntrareFK", nullable=false, updatable=false)
    @JsonIgnoreProperties("IntrareMateriiPrime")
    public MateriiPrime  materiiPrime; 
    
}
