package com.nyd.dspequisa.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nyd.dspequisa.dto.RecordDTO;
import com.nyd.dspequisa.dto.RecordInsertDTO;
import com.nyd.dspequisa.services.RecordService;

@RestController
@RequestMapping(value = "/records")
public class RecordController {
	
	@Autowired
	private RecordService service;
	
	@PostMapping
	public ResponseEntity<RecordDTO> insert(@RequestBody RecordInsertDTO dto){
		RecordDTO record = service.insert(dto);
		return ResponseEntity.ok(record);
	}
	

}

