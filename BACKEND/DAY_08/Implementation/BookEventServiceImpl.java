package com.example.adp.Services.Implementation;

import com.example.adp.Dto.BookEventDto;
import com.example.adp.Exception.ResourceNotFoundException;
import com.example.adp.Mapper.BookEventMapper;
import com.example.adp.Model.BookEvent;
import com.example.adp.Repository.BookEventRepository;
import com.example.adp.Services.BookEventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BookEventServiceImpl implements BookEventService {

    private final BookEventRepository bookEventRepository;

    @Autowired
    public BookEventServiceImpl(BookEventRepository bookEventRepository) {
        this.bookEventRepository = bookEventRepository;
    }

    @Override
    public BookEventDto createBookEvent(BookEventDto bookEventDto) {
        BookEvent bookEvent = BookEventMapper.mapToBookEvent(bookEventDto);
        BookEvent savedBookEvent = bookEventRepository.save(bookEvent);
        return BookEventMapper.mapToBookEventDto(savedBookEvent);
    }

    @Override
    public BookEventDto getBookEventById(Long id) {
        BookEvent bookEvent = bookEventRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("BookEvent not found with id: " + id));
        return BookEventMapper.mapToBookEventDto(bookEvent);
    }

    @Override
    public List<BookEventDto> getAllBookEvents() {
        List<BookEvent> bookEvents = bookEventRepository.findAll();
        return bookEvents.stream()
                .map(BookEventMapper::mapToBookEventDto)
                .collect(Collectors.toList());
    }

    @Override
    public BookEventDto updateBookEvent(Long id, BookEventDto bookEventDto) {
        BookEvent existingBookEvent = bookEventRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("BookEvent not found with id: " + id));
        BookEvent updatedBookEvent = BookEventMapper.mapToBookEvent(bookEventDto);
        updatedBookEvent.setId(existingBookEvent.getId()); // Ensure the ID remains unchanged
        BookEvent savedBookEvent = bookEventRepository.save(updatedBookEvent);
        return BookEventMapper.mapToBookEventDto(savedBookEvent);
    }

    @Override
    public void deleteBookEventById(Long id) {
        Optional<BookEvent> bookEventOptional = bookEventRepository.findById(id);
        if (bookEventOptional.isPresent()) {
            bookEventRepository.deleteById(id);
        } else {
            throw new ResourceNotFoundException("BookEvent not found with id: " + id);
        }
    }

   
}
