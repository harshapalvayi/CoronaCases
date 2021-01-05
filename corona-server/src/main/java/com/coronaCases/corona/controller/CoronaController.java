package com.coronaCases.corona.controller;

import com.coronaCases.corona.dto.Summary;
import com.coronaCases.corona.service.CoronaService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping(value = "/api")
public class CoronaController {
    public final CoronaService coronaService;

    public CoronaController(CoronaService coronaService) {
        this.coronaService = coronaService;
    }

    @GetMapping(value = "/summary")
    public Summary getSummary() {
        return this.coronaService.getSummaryData();
    }

}