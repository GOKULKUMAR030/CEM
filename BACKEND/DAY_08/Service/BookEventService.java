package com.example.adp.Services;

import java.util.List;

import com.example.adp.Dto.*;

public interface BookEventService {
    BookEventDto createBookEvent(BookEventDto bookEventDto);

    BookEventDto getBookEventById(Long bookEventId);

    List<BookEventDto> getAllBookEvents();

    void deleteBookEventById(Long bookEventId);

    BookEventDto updateBookEvent(Long bookEventId, BookEventDto bookEventDto);
}
