package com.princo.princoServer.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Setter @Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table (name="materii_prime")
public class MateriiPrime {
    @Id
    @Column(name="idIntrare")
    private int idIntrare;
    @Column(name="userName")
    private String userName;
    @Column(name="material")
    private String material;
    @Column(name="dateOfCreate")
    private String dateOfCreate;
        
}
