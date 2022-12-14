package com.fms.cinema.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor @ToString @Builder
public class City implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Integer department;


    @OneToMany(mappedBy = "city", fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Cinema> cinemas = new java.util.ArrayList<>();

    public List<Cinema> getCinemas() {
        return cinemas;
    }

    public void setCinemas(List<Cinema> cinemas) {
        this.cinemas = cinemas;
    }

    public City(Long id, String name, Integer department) {
        this.id = id;
        this.name = name;
        this.department = department;
    }
}