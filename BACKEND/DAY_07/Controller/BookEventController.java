package com.example.adp.Controller;

import com.example.adp.Dto.BookEventDto;
import com.example.adp.Services.BookEventService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookevents")
public class BookEventController {

    private final BookEventService bookEventService;

    public BookEventController(BookEventService bookEventService) {
        this.bookEventService = bookEventService;
    }

    @PostMapping
    public ResponseEntity<BookEventDto> createBookEvent(@RequestBody BookEventDto bookEventDto) {
        BookEventDto savedBookEvent = bookEventService.createBookEvent(bookEventDto);
        return new ResponseEntity<>(savedBookEvent, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<BookEventDto> getBookEventById(@PathVariable("id") Long id) {
        BookEventDto bookEventDto = bookEventService.getBookEventById(id);
        return ResponseEntity.ok(bookEventDto);
    }

    @GetMapping
    public ResponseEntity<List<BookEventDto>> getAllBookEvents() {
        List<BookEventDto> bookEvents = bookEventService.getAllBookEvents();
        return ResponseEntity.ok(bookEvents);
    }

    @PutMapping("/{id}")
    public ResponseEntity<BookEventDto> updateBookEvent(@PathVariable("id") Long id, @RequestBody BookEventDto bookEventDto) {
        BookEventDto updatedBookEvent = bookEventService.updateBookEvent(id, bookEventDto);
        return ResponseEntity.ok(updatedBookEvent);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBookEvent(@PathVariable("id") Long id) {
        bookEventService.deleteBookEventById(id);
        return ResponseEntity.noContent().build();
    }
}
