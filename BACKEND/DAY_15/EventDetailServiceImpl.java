package com.example.demo.Service.ServiceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import com.example.demo.Dto.EventDetailDto;
import com.example.demo.Model.EventDetail;
import com.example.demo.Mapper.EventDetailMapper;
import com.example.demo.Repository.EventDetailRepository;
import com.example.demo.ResourceNotFoundException.ResourceNotFoundException;
import com.example.demo.Service.EventDetailService;

@Service
public class EventDetailServiceImpl implements EventDetailService {

    @Autowired
    private EventDetailRepository eventDetailRepository;

    @Override
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public EventDetailDto createEventDetail(EventDetailDto eventDetailDto) {
        EventDetail eventDetail = EventDetailMapper.mapToEventDetail(eventDetailDto);
        EventDetail savedEventDetail = eventDetailRepository.save(eventDetail);
        return EventDetailMapper.mapToEventDetailDto(savedEventDetail);
    }

    @Override
    public EventDetailDto getEventDetailById(Long id) {
        EventDetail eventDetail = eventDetailRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("EventDetail not found with id: " + id));
        return EventDetailMapper.mapToEventDetailDto(eventDetail);
    }

    @Override
    public List<EventDetailDto> getAllEventDetails() {
        List<EventDetail> eventDetails = eventDetailRepository.findAll();
        List<EventDetailDto> eventDetailDtos = new ArrayList<>();
        for (EventDetail eventDetail : eventDetails) {
            eventDetailDtos.add(EventDetailMapper.mapToEventDetailDto(eventDetail));
        }
        return eventDetailDtos;
    }

    @Override
    public void deleteEventDetail(Long id) {
        EventDetail eventDetail = eventDetailRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("EventDetail not found with id: " + id));
        eventDetailRepository.delete(eventDetail);
    }

    @Override
    public EventDetailDto updateEventDetail(Long id, EventDetailDto eventDetailDto) {
        EventDetail existingEventDetail = eventDetailRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("EventDetail not found with id: " + id));

        // Update the fields
        existingEventDetail.setEvent(eventDetailDto.getEvent());
        existingEventDetail.setDescription(eventDetailDto.getDescription());
        existingEventDetail.setStartingPrice(eventDetailDto.getStartingPrice());

        // Save the updated EventDetail
        EventDetail updatedEventDetail = eventDetailRepository.save(existingEventDetail);

        return EventDetailMapper.mapToEventDetailDto(updatedEventDetail);
    }
}
