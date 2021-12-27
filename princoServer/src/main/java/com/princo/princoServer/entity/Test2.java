package com.princo.princoServer.entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Setter 
@Getter
@Entity
@Data
public class Test2 {
    @Id
    @Column(name="entryId")
    private int entryId;
    @Column(name="nameOfLot1")
    private String nameOfLot1;
    @Column(name="piece")
    private String piece;
    
   
}
