package com.example.demo.Service.ServiceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.Dto.EventDto;
import com.example.demo.Model.Event;
import com.example.demo.Mapper.EventMapper;
import com.example.demo.Repository.EventRepository;
import com.example.demo.ResourceNotFoundException.ResourceNotFoundException;
import com.example.demo.Service.EventService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EventServiceImpl implements EventService {

    private final EventRepository eventRepository;

    @Override
    public EventDto createEvent(EventDto eventDto) {
        Event event = EventMapper.mapToEvent(eventDto);
        Event savedEvent = eventRepository.save(event);
        return EventMapper.mapToEventDto(savedEvent);
    }

    @Override
    public EventDto getEventById(Long eventId) {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found with id: " + eventId));
        return EventMapper.mapToEventDto(event);
    }

    @Override
    public List<EventDto> getAllEvents() {
        List<Event> events = eventRepository.findAll();
        List<EventDto> eventDtos = new ArrayList<>();
        for (Event event : events) {
            eventDtos.add(EventMapper.mapToEventDto(event));
        }
        return eventDtos;
    }
}
