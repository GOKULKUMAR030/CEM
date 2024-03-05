package com.example.demo.Service;

import java.util.List;

import com.example.demo.Dto.UserDto;

public interface UserService {
    UserDto createUser(UserDto userDto);

    //UserDto getUserById(Long userId);
    UserDto getUserByEmail(String email);

    List<UserDto> getAllUsers();
    
   

    void deleteUser(Long userId);

    UserDto updateUser(String email, UserDto userDto);
    void deleteUserByEmail(String email);
    
}
