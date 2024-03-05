package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Dto.EventDetailDto;
import com.example.demo.Service.EventDetailService;

@RestController
@RequestMapping("/api/eventdetails")
public class EventDetailController {

    @Autowired
    private EventDetailService eventDetailService;

    @PostMapping
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<EventDetailDto> createEventDetail(@RequestBody EventDetailDto eventDetailDto) {
        EventDetailDto savedEventDetail = eventDetailService.createEventDetail(eventDetailDto);
        return new ResponseEntity<>(savedEventDetail, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public ResponseEntity<EventDetailDto> getEventDetailById(@PathVariable("id") Long id) {
        EventDetailDto eventDetailDto = eventDetailService.getEventDetailById(id);
        return ResponseEntity.ok(eventDetailDto);
    }

    @GetMapping
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public ResponseEntity<List<EventDetailDto>> getAllEventDetails() {
        List<EventDetailDto> eventDetailDtos = eventDetailService.getAllEventDetails();
        return ResponseEntity.ok(eventDetailDtos);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<EventDetailDto> updateEventDetail(@PathVariable("id") Long id, @RequestBody EventDetailDto eventDetailDto) {
        EventDetailDto updatedEventDetail = eventDetailService.updateEventDetail(id, eventDetailDto);
        return ResponseEntity.ok(updatedEventDetail);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<?> deleteEventDetail(@PathVariable("id") Long id) {
        eventDetailService.deleteEventDetail(id);
        return ResponseEntity.ok().build();
    }
}
