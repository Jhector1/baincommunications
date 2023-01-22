package com.example.baincommunications;

import com.example.baincommunications.model.HomeConsultation;
import com.example.baincommunications.model.PhoneConsultation;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HomeConsultationRepository extends CrudRepository<HomeConsultation, Long> {
}
