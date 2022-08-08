package com.fms.cinema.entities;

import javax.persistence.Embeddable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @NoArgsConstructor @AllArgsConstructor
@Embeddable
public class Address {

    private String address1;

    private String address2;

    private String town;

    private String codeZip;

    private String country;

}
