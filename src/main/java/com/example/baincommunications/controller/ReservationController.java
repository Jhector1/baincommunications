package com.example.baincommunications.controller;

import com.example.baincommunications.HomeConsultationRepository;
import com.example.baincommunications.PhoneConsultationRepository;
import com.example.baincommunications.model.HomeConsultation;
import com.example.baincommunications.model.PhoneConsultation;
import com.example.baincommunications.model.Reservation;
import com.example.baincommunications.service.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

@Controller
@SessionAttributes("reservation")
@RequestMapping("/reserve")
public class ReservationController {
    private final EmailSenderService senderService;
    private final PhoneConsultationRepository phoneConsultationRepository;
    private final HomeConsultationRepository homeConsultationRepository;


    public ReservationController(EmailSenderService senderService, PhoneConsultationRepository phoneConsultationRepository, HomeConsultationRepository homeConsultationRepository) {
        this.senderService = senderService;
        this.phoneConsultationRepository = phoneConsultationRepository;
        this.homeConsultationRepository = homeConsultationRepository;
    }



    @ModelAttribute(name = "reservation")
    public Reservation rsv() {
        return new Reservation();
    }
//    @Bean
//    JavaMailSenderImpl getJavaMail(){
//        return new JavaMailSenderImpl();
//}

    @ModelAttribute(name = "allServices")
    public List<String> listServices() {
        return Arrays.asList("Home Automation",
                "Home Theather/Audio", "Lighting/Window Treatment", "Surveillance Network");
    }

    @PostMapping
    public String makeReservation(@RequestParam Map<String, String> allRequestParam, HomeConsultation homeConsultation, PhoneConsultation phoneConsultation) {
        if (allRequestParam.get("service").equals("Home Consultation")) {
            homeConsultation.setDate(allRequestParam.get("date"));
            homeConsultation.setTime(allRequestParam.get("time"));
            homeConsultationRepository.save(homeConsultation);
        }
        else{
            phoneConsultation.setDate(allRequestParam.get("date"));
            phoneConsultation.setTime(allRequestParam.get("time"));
            phoneConsultationRepository.save(phoneConsultation);
        }
        String serviceNeeded = "";

        System.out.println(allRequestParam);
        if (allRequestParam.get("service").equals("Home Consultation")) {
            serviceNeeded = "\n \nService Needed:\n     "
                    + allRequestParam.get("service1")
                    + "\n   " + allRequestParam.get("service2")
                    + "\n   " + allRequestParam.get("service3")
                    + "\n   " + allRequestParam.get("service4");

        }
        String body = "Hi Christopher," +
                "\nA client has made a reservation for " + allRequestParam.get("service") +
                "\n\nPlease see client details below: \n \n"
                + "\n   First Name:  " + allRequestParam.get("firstName")
                + "\n   Last Name: " + allRequestParam.get("lastName")
                + "\n   email:     " + allRequestParam.get("email")
                + "\n   Tel:       " + allRequestParam.get("tel")
                + "\n   Address:   " + allRequestParam.get("address")
                + "\n   Apt/Suite: " + allRequestParam.get("apartment_number")
                + "\n   City:      " + allRequestParam.get("city")
                + "\n   State:     " + allRequestParam.get("state")
                + "\n   Zip:       " + allRequestParam.get("zip") + serviceNeeded
                + "\n\nAppointment time:" +
                "\n     Date: " + allRequestParam.get("date") +
                "\n     Time: " + allRequestParam.get("time")
                + "\n\n\nNotes From " + allRequestParam.get("firstName") + ":"
                + "\n   " + allRequestParam.get("comment");

        senderService.sendSimpleEmail(allRequestParam.get("email").trim(), body, allRequestParam.get("service"));

        senderService.sendSimpleEmail("baincommunications@gmail.com", body, allRequestParam.get("service"));

        return "redirect:/";
    }
}
