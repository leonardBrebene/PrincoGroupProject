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
    @Column(name="IDintrare")
    private int idIntrare;
    @Column(name="materiePrima")
    private String materiePrima;
    @Column(name="cantitate")
    private String cantitate;
    @Column(name="dataOraAcum")
    private String dataOraAcum;
   
    // public EventTFP (String name, String date, String eventType){
    //     this.name=name;
    //     this.date=date;
    //     this.eventType=eventType;
    // }
    
    // public String getName() {
    //     return name;
    // }
    // public void setName(String name) {
    //     this.name = name;
    // }
    // public String getDate() {
    //     return date;
    // }
    // public void setDate(String date) {
    //     this.date = date;
    // }
    // public String getEventType() {
    //     return eventType;
    // }
    // public void setType(String type) {
    //     this.eventType = type;
    // }

    
}
