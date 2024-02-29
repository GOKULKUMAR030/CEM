package com.example.adp.Services;

import com.example.adp.Dto.AdminDto;

import java.util.List;

public interface AdminService {
    AdminDto createAdmin(AdminDto adminDto);

    AdminDto getAdminById(Long id);

    List<AdminDto> getAllAdmins();

    void deleteAdmin(Long id);

    AdminDto updateAdmin(Long id, AdminDto adminDto);
}
