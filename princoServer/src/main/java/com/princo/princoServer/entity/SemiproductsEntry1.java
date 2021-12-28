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

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;



@Setter 
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table (name="semiproduct_entries")
public class SemiproductsEntry1 {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="entryId")
    private int entryId;
    @Column(name="paletEntryFK")
    private int paletEntryFK;
    @Column(name="lastPaletFK")
    private String lastPaletFK; //made id String
    @Column(name="oldPiece")
    private String oldPiece;
    @Column(name="newPiece")
    private String newPiece;
    @Column(name="quantity")
    private int quantity;
    @Column(name="quantityOnLastPalet")
    private int quantityOnLastPalet;
    @Column(name="lotFk")
    private String lotFK;
    @Column(name="dateOfCreate")
    private String dateOfCreate;
    @Column(name="userNameManager")
    private String userNameManager;
    @Column(name="employee")
    private String employee;
    // @JsonIgnoreProperties(ignoreUnknown = true)
    // @Column(name="lastPaletUniqueName")
    // private String lastPaletUniqueName;

}
