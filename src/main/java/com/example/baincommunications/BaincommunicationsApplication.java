package com.example.baincommunications;

import com.example.baincommunications.service.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

@SpringBootApplication
public class BaincommunicationsApplication {

    public static void main(String[] args) {
        SpringApplication.run(BaincommunicationsApplication.class, args);
    }

}