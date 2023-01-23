package com.example.baincommunications.controller;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("home");
        registry.addViewController("/about").setViewName("about");
        registry.addViewController("/contact").setViewName("contact");
        registry.addViewController("/automation").setViewName("automationDetails");
        registry.addViewController("/network_surveillance").setViewName("networkSurveillanceDetails");
        registry.addViewController("/theater_audio").setViewName("theaterAudioDetails");
        registry.addViewController("/windowTreatment").setViewName("windowTreatmentDetails");
        registry.addViewController("/homeConsultation").setViewName("home_consultation");
        registry.addViewController("/phoneConsultation").setViewName("phone_consultation");
        registry.addViewController("/reviews").setViewName("review_page");

    }

}
