package com.fms.cinema.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fms.cinema.security.entities.Uuser;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor
public class Customer implements Serializable {

    /**
     *
     */
    private static final long serialVersionUID = 1L;

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String firstName;

    @Column

    private String lastName;


    @Column(unique = true)
   // @Pattern(regexp = "^[0-9]{10}$", message = "Your number phone format is incorrect") //0000000000
    private String phone;

    @Embedded
    private Address address;

    @ManyToOne
    private Uuser uuser;


}
