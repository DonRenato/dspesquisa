package com.nyd.dspequisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nyd.dspequisa.entities.Game;

public interface GenreRepository extends JpaRepository<Game, Long>{

}
