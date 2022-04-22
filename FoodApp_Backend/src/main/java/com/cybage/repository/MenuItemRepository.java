package com.cybage.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.cybage.model.MenuItems;

public interface MenuItemRepository extends JpaRepository<MenuItems, Integer> {

	@Query(value = "select * from menu_items where category_id= :categoryId", nativeQuery=true)
	List<MenuItems> findByCategory(int categoryId);
}
