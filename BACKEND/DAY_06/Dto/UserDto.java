package com.example.adp.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {

    private Long id;
    private String name;
    private String contactNo;
    private String email;
    private String corporateName;
    private String password;
    private String role;

    // You don't need to define getters, setters, constructors, or toString method manually
    // Lombok will generate them for you based on the annotations
}
