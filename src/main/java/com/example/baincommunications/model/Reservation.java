package com.example.baincommunications.model;

import lombok.Data;

import java.util.List;


@Data
public class Reservation {
    private long id;
    private String date;
    private String time;
    private List<String> serviceList;


}
