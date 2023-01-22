package com.example.baincommunications.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Table
@Data
@NoArgsConstructor
@Entity

public class HomeConsultation implements Serializable {
    @Id
    @GeneratedValue
    //@GenericGenerator(name="system-uuid", strategy = "uuid")

    private Long id;
    private String date;
    private String time;
}