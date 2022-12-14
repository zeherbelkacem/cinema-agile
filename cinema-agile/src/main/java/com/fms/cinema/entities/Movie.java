package com.fms.cinema.entities;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Movie implements Serializable {
    /**
     *
     */
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;

    private String production;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate releaseDate;

    private LocalTime duration;

//    private String image;
    @OneToOne
    private Image imageModel;

    @ManyToOne
    private Category category;


    @ManyToMany(mappedBy = "movies", fetch =  FetchType.EAGER)
    private List<Cinema> cinemas = new ArrayList<Cinema>();

    public void setImage(Image image) {
        this.imageModel = image;
    }
}
