package com.nyd.dspequisa.services;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nyd.dspequisa.dto.RecordDTO;
import com.nyd.dspequisa.dto.RecordInsertDTO;
import com.nyd.dspequisa.entities.Game;
import com.nyd.dspequisa.entities.Record;
import com.nyd.dspequisa.repositories.GameRepository;
import com.nyd.dspequisa.repositories.RecordRepository;

@Service
public class RecordService {

	@Autowired
	private RecordRepository repository;
	
	@Autowired
	private GameRepository gameRepository;
	
	@Transactional
	public RecordDTO insert(RecordInsertDTO dto) {
		Record entity = new Record();
		entity.setName(dto.getName());
		entity.setAge(dto.getAge());
		entity.setMoment(Instant.now());
		
		Game game = gameRepository.getOne(dto.getGameId());
		entity.setGame(game);
		
		entity = repository.save(entity);
		
		return new RecordDTO(entity);
		
		
		
	}
}
