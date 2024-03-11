package com.example.demo.Controller;
import java.util.List;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.Dto.UserDto;
import com.example.demo.Service.UserService;
import lombok.AllArgsConstructor;
@AllArgsConstructor
@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto) {
        UserDto savedUser = userService.createUser(userDto);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    // @GetMapping("{id}")
    // @PreAuthorize("hasAuthority('ROLE_USER') or hasAuthority('ROLE_ADMIN')")
    // public ResponseEntity<UserDto> getUserById(@PathVariable("id") Long userId) {
    //     UserDto userDto = userService.getUserById(userId);
    //     return ResponseEntity.ok(userDto);
    // }
    @GetMapping("/me")
@PreAuthorize("hasAuthority('ROLE_USER') or hasAuthority('ROLE_ADMIN')")
public ResponseEntity<UserDto> getCurrentUser() {
    // Retrieve the current authenticated user's email
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    String currentUserEmail = authentication.getName();

    // Retrieve the user by email of the current user
    UserDto userDto = userService.getUserByEmail(currentUserEmail);
    if (userDto == null) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
    }

    // Return the user DTO
    return ResponseEntity.ok(userDto);
}

    @GetMapping
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN')")
    public ResponseEntity<List<UserDto>> getAllUsers() {
        List<UserDto> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }
    

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") Long userId) {
        userService.deleteUser(userId);
        return ResponseEntity.noContent().build();
    }
    @PutMapping("/me")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public ResponseEntity<UserDto> updateUser( @RequestBody UserDto userDto) {
        Authentication curUser= SecurityContextHolder.getContext().getAuthentication();
        String curName=curUser.getName();
        UserDto updatedUser = userService.updateUser(curName, userDto);
        return ResponseEntity.ok(updatedUser);
    }
@DeleteMapping("/me")
@PreAuthorize("hasAuthority('ROLE_USER') or hasAuthority('ROLE_ADMIN')")
public ResponseEntity<Void> deleteUserForCurrentUser() {
    // Retrieve the current authenticated user's email
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    String currentUserEmail = authentication.getName();

    // Delete the user by email of the current user
    userService.deleteUserByEmail(currentUserEmail);

    // Return a no-content response
    return ResponseEntity.noContent().build();
}

}
