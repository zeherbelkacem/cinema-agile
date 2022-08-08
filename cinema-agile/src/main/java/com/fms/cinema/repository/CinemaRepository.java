package com.fms.cinema.repository;

import com.fms.cinema.entities.Cinema;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CinemaRepository extends JpaRepository<Cinema, Long> {

    Page<Cinema> findByNameContains(String keyWord, Pageable pageable);

}
