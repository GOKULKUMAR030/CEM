package com.example.demo.Service;
import java.util.List;

import com.example.demo.Dto.EventDetailDto;

public interface EventDetailService {
    EventDetailDto createEventDetail(EventDetailDto eventDetailDto);
    EventDetailDto getEventDetailById(Long id);
    List<EventDetailDto> getAllEventDetails();
    void deleteEventDetail(Long id);
    EventDetailDto updateEventDetail(Long id, EventDetailDto eventDetailDto);
}
