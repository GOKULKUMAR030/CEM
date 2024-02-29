package com.example.adp.Mapper;

import com.example.adp.Dto.*;
import com.example.adp.Model.*;

public class BookEventMapper {

    public static BookEventDto mapToBookEventDto(BookEvent bookEvent) {
        return new BookEventDto(
                bookEvent.getId(),
                bookEvent.getCorporateName(),
                bookEvent.getEventName(),
                bookEvent.getEventFromDate(),
                bookEvent.getEventToDate(),
                bookEvent.getCountry(),
                bookEvent.getProvince(),
                bookEvent.getVenue(),
                bookEvent.getAttendeesCount(),
                bookEvent.getContactNo(),
                bookEvent.getContactMail());
    }

    public static BookEvent mapToBookEvent(BookEventDto bookEventDto) {
        return new BookEvent(
              bookEventDto.getId(),
                bookEventDto.getCorporateName(),
                bookEventDto.getEventName(),
                bookEventDto.getEventFromDate(),
                bookEventDto.getEventToDate(),
                bookEventDto.getCountry(),
                bookEventDto.getProvince(),
                bookEventDto.getVenue(),
                bookEventDto.getAttendeesCount(),
                bookEventDto.getContactNo(),
                bookEventDto.getContactMail());
    }
}
