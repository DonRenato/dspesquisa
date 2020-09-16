package com.nyd.dspequisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nyd.dspequisa.entities.Record;

public interface GameRepository extends JpaRepository<Record, Long>{

}
