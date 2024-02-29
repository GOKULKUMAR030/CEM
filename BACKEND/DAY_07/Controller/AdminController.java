package com.example.adp.Controller;

import com.example.adp.Dto.AdminDto;
import com.example.adp.Services.AdminService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admins")
public class AdminController {

    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @PostMapping
    public ResponseEntity<AdminDto> createAdmin(@RequestBody AdminDto adminDto) {
        AdminDto createdAdmin = adminService.createAdmin(adminDto);
        return new ResponseEntity<>(createdAdmin, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AdminDto> getAdminById(@PathVariable("id") Long id) {
        AdminDto adminDto = adminService.getAdminById(id);
        return ResponseEntity.ok(adminDto);
    }

    @GetMapping
    public ResponseEntity<List<AdminDto>> getAllAdmins() {
        List<AdminDto> admins = adminService.getAllAdmins();
        return ResponseEntity.ok(admins);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAdmin(@PathVariable("id") Long id) {
        adminService.deleteAdmin(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AdminDto> updateAdmin(@PathVariable("id") Long id, @RequestBody AdminDto adminDto) {
        AdminDto updatedAdmin = adminService.updateAdmin(id, adminDto);
        return ResponseEntity.ok(updatedAdmin);
    }
}
