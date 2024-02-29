package com.example.adp.Mapper;

import com.example.adp.Dto.AdminDto;
import com.example.adp.Model.Admin;

public class AdminMapper {

    public static AdminDto toDto(Admin admin) {
        return new AdminDto(
                admin.getId(),
                admin.getName(),
                admin.getEmail(),
                admin.getPassword(),
                admin.getContactNo());
    }

    public static Admin toEntity(AdminDto adminDto) {
        return new Admin(
                adminDto.getId(),
                adminDto.getName(),
                adminDto.getEmail(),
                adminDto.getPassword(),
                adminDto.getContactNo());
    }
}
