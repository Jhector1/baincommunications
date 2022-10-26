package com.example.baincommunications.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;

import java.util.Properties;

@Service
public class EmailSenderService {
    @Autowired
    private JavaMailSenderImpl mailSender;
    public void sendSimpleEmail(String toEmail, String body, String subject ){
        


        SimpleMailMessage message = new SimpleMailMessage();

        message.setFrom("baincommunications@gmail.com");
        message.setTo(toEmail);
        message.setText(body);
        message.setSubject(subject);


        Properties properties = new Properties();
        properties.setProperty("mail.smtp.auth", "true");
        properties.setProperty("mail.smtp.starttls.enable", "true");

        mailSender.setJavaMailProperties(properties);
        mailSender.send(message);
        System.out.println("Mail send...");

    }
}
