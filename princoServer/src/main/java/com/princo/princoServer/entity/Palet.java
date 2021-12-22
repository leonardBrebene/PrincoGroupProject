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

import com.fasterxml.jackson.annotation.JsonIgnore;



@Setter 
@Getter
@Entity
@Data
@Table (name="palet")
public class Palet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="entryId")
    private int entryId;
    @Column(name="uniqueId")
    private String uniqueId;
    @Column(name="userNameManager")
    private String userNameManager;
    @Column(name="nameOfPalet")
    private String nameOfPalet;
    @Column(name="typeofPalet")
    private String typeofPalet;
    @Column(name="dateOfCreate")
    private String dateOfCreate;
  
 

    


   
}
