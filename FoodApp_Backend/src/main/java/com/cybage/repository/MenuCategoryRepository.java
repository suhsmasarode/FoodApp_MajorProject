package com.cybage.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cybage.model.MenuCategory;

public interface MenuCategoryRepository extends JpaRepository<MenuCategory, Integer> {
	
	@Query(value = "select * from menu_category where restro_id= :restroId", nativeQuery=true)
	List<MenuCategory> findByRestaurants(int restroId);

}
