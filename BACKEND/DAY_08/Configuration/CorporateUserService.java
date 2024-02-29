package com.example.adp.Configurtion;

import com.example.adp.Model.*;
import com.example.adp.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class CorporateUserService implements UserDetailsService {

    @Autowired
    private UserRepository repository;

    @Override
    public  UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<CorporateUser> userInfo = repository.findByEmail(username);
        return userInfo.map(CorporateUserDetails::new)
                .orElseThrow(() -> new UsernameNotFoundException("user not found " + username));

    }
}
