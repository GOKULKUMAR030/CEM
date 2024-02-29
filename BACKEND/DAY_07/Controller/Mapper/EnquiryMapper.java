package com.example.adp.Mapper;

import com.example.adp.Dto.EnquiryDto;
import com.example.adp.Model.Enquiry;

public class EnquiryMapper {

    public static Enquiry toEntity(EnquiryDto enquiryDto) {
        Enquiry enquiry = new Enquiry();
        enquiry.setCorporateName(enquiryDto.getCorporateName());
        enquiry.setEmail(enquiryDto.getEmail());
        enquiry.setPhoneNumber(enquiryDto.getPhoneNumber());
        enquiry.setEventDate(enquiryDto.getEventDate());
        enquiry.setMessage(enquiryDto.getMessage());
        return enquiry;
    }

    public static EnquiryDto toDto(Enquiry enquiry) {
        EnquiryDto enquiryDto = new EnquiryDto();
        enquiryDto.setCorporateName(enquiry.getCorporateName());
        enquiryDto.setEmail(enquiry.getEmail());
        enquiryDto.setPhoneNumber(enquiry.getPhoneNumber());
        enquiryDto.setEventDate(enquiry.getEventDate());
        enquiryDto.setMessage(enquiry.getMessage());
        return enquiryDto;
    }
}
