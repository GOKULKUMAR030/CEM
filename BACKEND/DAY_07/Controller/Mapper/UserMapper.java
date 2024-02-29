package com.example.adp.Mapper;

import com.example.adp.Dto.UserDto;
import com.example.adp.Model.CorporateUser;

public class UserMapper {

    public static UserDto mapToUserDto(CorporateUser user) {
        return new UserDto(
                user.getId(),
                user.getName(),
                user.getContactNo(),
                user.getEmail(),
                user.getCorporateName(),
                user.getPassword(),
                user.getRole() // Include role mapping
        );
    }

    public static CorporateUser mapToUser(UserDto userDto) {
        return new CorporateUser(
                userDto.getId(),
                userDto.getName(),
                userDto.getContactNo(),
                userDto.getEmail(),
                userDto.getCorporateName(),
                userDto.getPassword(),
                userDto.getRole()
        );
    }

}
