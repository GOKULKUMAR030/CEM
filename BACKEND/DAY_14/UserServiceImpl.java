package com.example.demo.Service.ServiceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.Dto.UserDto;
import com.example.demo.Model.Role;
import com.example.demo.Model.User;
import com.example.demo.Mapper.UserMapper;
import com.example.demo.Repository.UserRepository;
import com.example.demo.ResourceNotFoundException.ResourceNotFoundException;
import com.example.demo.ResourceNotFoundException.UserAlreadyExistingException;
import com.example.demo.Service.UserService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    @Autowired
    private PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;

    @Override
    public UserDto createUser(UserDto userDto) {
        Optional<User> existingUserOptional = userRepository.findByEmail(userDto.getEmail());
        if (existingUserOptional.isPresent()) {
             throw new UserAlreadyExistingException("User with email " + userDto.getEmail() + " already exists");
        }
        userDto.setPassword(passwordEncoder.encode(userDto.getPassword()));
        User user = UserMapper.maptoUser(userDto);
        User savedUser = userRepository.save(user);
        return UserMapper.maptoUserDto(savedUser);
    }

    // @Override
    // public UserDto getUserById(Long userId) {
    //     User user = userRepository.findById(userId)
    //             .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
    //     return UserMapper.maptoUserDto(user);
    // }
    @Override
public UserDto getUserByEmail(String email) {
    User user = userRepository.findByEmail(email)
            .orElseThrow(() -> new ResourceNotFoundException("User not found with email: " + email));
    return UserMapper.maptoUserDto(user);
}


    @Override
    public List<UserDto> getAllUsers() {
        List<User> users = userRepository.findByRole(Role.USER);
        List<UserDto> userDtos = new ArrayList<>();
        for (User user : users) {
            userDtos.add(UserMapper.maptoUserDto(user));
        }
        return userDtos;
    }
    
    
    
    @Override
    public void deleteUser(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        
        userRepository.delete(user);
    }
    @Override
    public UserDto updateUser(String userName, UserDto userDto) {
        User existingUser = userRepository.findByEmail(userName)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userName));
        userDto.setPassword(passwordEncoder.encode(userDto.getPassword()));
        existingUser.setName(userDto.getName());
        existingUser.setEmail(userDto.getEmail());
        existingUser.setMobileNumber(userDto.getMobileNumber());
        existingUser.setOrganizationName(userDto.getOrganizationName());
        existingUser.setPassword(userDto.getPassword());
        User updatedUser = userRepository.save(existingUser);
    
        return UserMapper.maptoUserDto(updatedUser);
    }

@Override
public void deleteUserByEmail(String email) {
    // Retrieve the user by email
    User user = userRepository.findByEmail(email)
            .orElseThrow(() -> new ResourceNotFoundException("User not found with email: " + email));

    // Delete the user
    userRepository.delete(user);
}

}
