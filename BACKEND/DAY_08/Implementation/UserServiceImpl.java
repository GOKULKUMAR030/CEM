package com.example.adp.Services.Implementation;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.adp.Dto.*;
import com.example.adp.Model.*;
import com.example.adp.Exception.*;
import com.example.adp.Mapper.*;
import com.example.adp.Repository.*;
import com.example.adp.Services.*;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;
    
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDto createUser(UserDto userDto) {
        CorporateUser user = UserMapper.mapToUser(userDto);
        
        // Encode the password
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        
        CorporateUser savedUser = userRepository.save(user);
        return UserMapper.mapToUserDto(savedUser);
    }
    @Override
    public UserDto getUserById(Long userId) {
        CorporateUser user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        return UserMapper.mapToUserDto(user);
    }

    @Override
    public List<UserDto> getAllUsers() {
        List<CorporateUser> users = userRepository.findAll();
        return users.stream().map(UserMapper::mapToUserDto).collect(Collectors.toList());
    }

    @Override
    public UserDto updateUser(Long userId, UserDto userDto) {
        CorporateUser existingUser = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        CorporateUser updatedUser = UserMapper.mapToUser(userDto);
        updatedUser.setId(existingUser.getId());
        CorporateUser savedUser = userRepository.save(updatedUser);
        return UserMapper.mapToUserDto(savedUser);
    }

    @Override
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }
    
}
