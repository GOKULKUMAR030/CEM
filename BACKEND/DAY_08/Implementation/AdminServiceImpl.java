package com.example.adp.Services.Implementation;

import com.example.adp.Dto.AdminDto;
import com.example.adp.Exception.ResourceNotFoundException;
import com.example.adp.Mapper.AdminMapper;
import com.example.adp.Model.Admin;
import com.example.adp.Repository.AdminRepository;
import com.example.adp.Services.AdminService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class AdminServiceImpl implements AdminService {

    private final AdminRepository adminRepository;

    @Override
    public AdminDto createAdmin(AdminDto adminDto) {
        Admin admin = AdminMapper.toEntity(adminDto);
        Admin savedAdmin = adminRepository.save(admin);
        return AdminMapper.toDto(savedAdmin);
    }

    @Override
    public AdminDto getAdminById(Long id) {
        Admin admin = adminRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Admin not found with id: " + id));
        return AdminMapper.toDto(admin);
    }

    @Override
    public List<AdminDto> getAllAdmins() {
        List<Admin> admins = adminRepository.findAll();
        return admins.stream()
                .map(AdminMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public void deleteAdmin(Long id) {
        if (!adminRepository.existsById(id)) {
            throw new ResourceNotFoundException("Admin not found with id: " + id);
        }
        adminRepository.deleteById(id);
    }

    @Override
    public AdminDto updateAdmin(Long id, AdminDto adminDto) {
        Admin existingAdmin = adminRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Admin not found with id: " + id));

        // Update fields
        existingAdmin.setName(adminDto.getName());
        existingAdmin.setEmail(adminDto.getEmail());
        existingAdmin.setPassword(adminDto.getPassword());
        existingAdmin.setContactNo(adminDto.getContactNo());

        // Save updated admin
        Admin updatedAdmin = adminRepository.save(existingAdmin);
        return AdminMapper.toDto(updatedAdmin);
    }
}
