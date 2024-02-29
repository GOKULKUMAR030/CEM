package com.example.adp.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EnquiryDto {
    private String corporateName;
    private String email;
    private String phoneNumber;
    private String eventDate;
    private String message;
}
