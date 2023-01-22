package com.example.baincommunications.model;

import com.example.baincommunications.HomeConsultationRepository;
import com.example.baincommunications.PhoneConsultationRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/api/baincommunication",
        produces="application/json")
@CrossOrigin(origins="http://baincommunications:8080")
public class RestReservation {
    PhoneConsultationRepository phoneConsultationRepository;
    HomeConsultationRepository homeConsultationRepository;
public RestReservation(PhoneConsultationRepository repository, HomeConsultationRepository homeConsultationRepository){
    this.phoneConsultationRepository = repository;
    this.homeConsultationRepository = homeConsultationRepository;

}

    @GetMapping("/phonedates")
    public Iterable<PhoneConsultation> allDatesForPhone(){
        return phoneConsultationRepository.findAll();
    }
    @GetMapping("/homedates")
    public Iterable<HomeConsultation> allDatesForHome(){
        return homeConsultationRepository.findAll();
    }
}
