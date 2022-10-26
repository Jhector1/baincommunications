package com.example.baincommunications.controller;

import com.example.baincommunications.model.Reservation;
import com.example.baincommunications.service.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Controller
@SessionAttributes("reservation")
@RequestMapping("/reserve")
public class ReservationController {
    @Autowired
    private EmailSenderService senderService;

    @GetMapping
    public String reservationPage(){
        return "reservation";
    }

    @ModelAttribute(name="reservation")
    public Reservation rsv(){
        return new Reservation();
    }

    @ModelAttribute(name="allServices")
    public List<String> listServices(){
        return Arrays.asList("Home Automation",
                "Home Theather/Audio", "Lighting/Window Treatment", "Surveillance Network");
    }

    @PostMapping
    public String makeReservation( @ModelAttribute Reservation rsv){
        System.out.println(rsv.getDate()+ " "+ rsv.getServiceList());
        String body= "Hi Christopher a user" +
                " has made a reservation for" + rsv.getServiceList()+
                "for "+ rsv.getDate()+ " at "+rsv.getTime();
        senderService.sendSimpleEmail("baincommunications@gmail.com", body, "Reservation");

        return "redirect:/";
    }
}
