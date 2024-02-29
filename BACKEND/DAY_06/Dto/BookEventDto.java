package com.example.adp.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookEventDto {
    private Long id;
    private String corporateName;
    private String eventName;
    private String eventFromDate;
    private String eventToDate;
    private String country;
    private String province;
    private String venue;
    private int attendeesCount;
    private String contactNo;
    private String contactMail;
}
