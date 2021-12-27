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
@Table (name="lot")
public class Lot {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="entryId")
    private int entryId;
    @Column(name="userNameManager")
    private String userNameManager ;
    @Column(name="dateOfCreate")
    private String dateOfCreate ;
    @Column(name="nameOfLot")
    private String nameOfLot ;
    // @JsonIgnore
    // @OneToOne(mappedBy = "lot",fetch = FetchType.LAZY)
    // private Test test;
   
    
}
