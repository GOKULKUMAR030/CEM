// EnquiryController.java
package com.example.adp.Controller;

import com.example.adp.Dto.EnquiryDto;
import com.example.adp.Services.EnquiryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/enquiries")
public class EnquiryController {

    private final EnquiryService enquiryService;

    public EnquiryController(EnquiryService enquiryService) {
        this.enquiryService = enquiryService;
    }

    @PostMapping
    public ResponseEntity<EnquiryDto> createEnquiry(@RequestBody EnquiryDto enquiryDto) {
        EnquiryDto savedEnquiry = enquiryService.createEnquiry(enquiryDto);
        return new ResponseEntity<>(savedEnquiry, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EnquiryDto> getEnquiryById(@PathVariable("id") Long id) {
        EnquiryDto enquiryDto = enquiryService.getEnquiryById(id);
        return ResponseEntity.ok(enquiryDto);
    }

    @GetMapping
    public ResponseEntity<List<EnquiryDto>> getAllEnquiries() {
        List<EnquiryDto> enquiries = enquiryService.getAllEnquiries();
        return ResponseEntity.ok(enquiries);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EnquiryDto> updateEnquiry(@PathVariable("id") Long id, @RequestBody EnquiryDto enquiryDto) {
        EnquiryDto updatedEnquiry = enquiryService.updateEnquiry(id, enquiryDto);
        return ResponseEntity.ok(updatedEnquiry);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEnquiry(@PathVariable("id") Long id) {
        enquiryService.deleteEnquiry(id);
        return ResponseEntity.noContent().build();
    }
}
