package com.fms.cinema.repository;

import com.fms.cinema.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CategoryRepository extends JpaRepository<Category, String> {
    Category deleteByName(String name);

//	@Transactional
//	@Modifying
//	@Query("UPDATE categories c SET c.name=:newName WHERE c.name=:oldName")
//	void updateCategory(@Param("oldName") String oldName, @Param("newName") String newName);
}