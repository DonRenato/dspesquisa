package com.nyd.dspequisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nyd.dspequisa.entities.Genre;

public interface RecordRepository extends JpaRepository<Genre, Long>{

}
