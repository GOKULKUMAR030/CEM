// EnquiryService.java
package com.example.adp.Services;

import com.example.adp.Dto.EnquiryDto;

import java.util.List;

public interface EnquiryService {
    EnquiryDto createEnquiry(EnquiryDto enquiryDto);

    EnquiryDto getEnquiryById(Long id);

    List<EnquiryDto> getAllEnquiries();

    EnquiryDto updateEnquiry(Long id, EnquiryDto enquiryDto);

    void deleteEnquiry(Long id);
}
