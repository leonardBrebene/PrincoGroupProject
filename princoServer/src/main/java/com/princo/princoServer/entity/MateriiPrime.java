package com.princo.princoServer.entity;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



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
    
 

    


   
}
