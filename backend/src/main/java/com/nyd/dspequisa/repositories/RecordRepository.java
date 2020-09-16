package com.nyd.dspequisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nyd.dspequisa.entities.Record;

@Repository
public interface RecordRepository extends JpaRepository<Record, Long>{

}
