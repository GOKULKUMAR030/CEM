package com.example.adp.Services.Implementation;

import com.example.adp.Dto.EnquiryDto;
import com.example.adp.Exception.ResourceNotFoundException;
import com.example.adp.Mapper.EnquiryMapper;
import com.example.adp.Model.Enquiry;
import com.example.adp.Repository.EnquiryRepository;
import com.example.adp.Services.EnquiryService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EnquiryServiceImpl implements EnquiryService {

    private final EnquiryRepository enquiryRepository;

    public EnquiryServiceImpl(EnquiryRepository enquiryRepository) {
        this.enquiryRepository = enquiryRepository;
    }

    @Override
    public EnquiryDto createEnquiry(EnquiryDto enquiryDto) {
        Enquiry enquiry = EnquiryMapper.toEntity(enquiryDto);
        Enquiry savedEnquiry = enquiryRepository.save(enquiry);
        return EnquiryMapper.toDto(savedEnquiry);
    }

    @Override
    public EnquiryDto getEnquiryById(Long id) {
        Enquiry enquiry = enquiryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Enquiry not found with id: " + id));
        return EnquiryMapper.toDto(enquiry);
    }

    @Override
    public List<EnquiryDto> getAllEnquiries() {
        List<Enquiry> enquiries = enquiryRepository.findAll();
        return enquiries.stream().map(EnquiryMapper::toDto).collect(Collectors.toList());
    }

    @Override
    public EnquiryDto updateEnquiry(Long id, EnquiryDto enquiryDto) {
        Enquiry existingEnquiry = enquiryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Enquiry not found with id: " + id));
        existingEnquiry.setEmail(enquiryDto.getEmail());
        existingEnquiry.setPhoneNumber(enquiryDto.getPhoneNumber());
        existingEnquiry.setEventDate(enquiryDto.getEventDate());
        existingEnquiry.setMessage(enquiryDto.getMessage());
        Enquiry updatedEnquiry = enquiryRepository.save(existingEnquiry);
        return EnquiryMapper.toDto(updatedEnquiry);
    }

    @Override
    public void deleteEnquiry(Long id) {
        if (!enquiryRepository.existsById(id)) {
            throw new ResourceNotFoundException("Enquiry not found with id: " + id);
        }
        enquiryRepository.deleteById(id);
    }
}
