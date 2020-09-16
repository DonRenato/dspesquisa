package com.nyd.dspequisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nyd.dspequisa.entities.Game;


@Repository
public interface GameRepository extends JpaRepository<Game, Long>{

}
