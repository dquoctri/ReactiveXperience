package com.dqtri.mango.controller;

import com.dqtri.mango.model.MangoUser;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class UserController {

    private static final List<MangoUser> mangoUsers = new ArrayList<>();

    @GetMapping("")
    public ResponseEntity<?> getUsers() throws InterruptedException {
        Thread.sleep(1000);
        return ResponseEntity.ok(mangoUsers);
    }

    @PostMapping("")
    public ResponseEntity<?> addUser(@Valid @RequestBody MangoUser payload) {
        if (isEmailExited(payload.getEmail())){
            return ResponseEntity.status(409).build();
        }
        mangoUsers.add(payload);
        return ResponseEntity.ok().body(payload);
    }

    @PutMapping("")
    public ResponseEntity<?> updateUser(@Valid @RequestBody MangoUser payload) {
        Optional<MangoUser> first = mangoUsers.stream()
                .filter(user -> user.getEmail().equals(payload.getEmail())).findFirst();
        if (first.isEmpty()){
            return ResponseEntity.status(404).build();
        }
        MangoUser mangoUser = first.get();
        mangoUser.setFirstName(payload.getFirstName());
        mangoUser.setLastName(payload.getLastName());
        mangoUser.setPassword(payload.getPassword());
        return ResponseEntity.ok().body(payload);
    }
    
    private boolean isEmailExited(String email){
        Optional<MangoUser> any = mangoUsers.stream().filter(user -> user.getEmail().equals(email)).findAny();
        return any.isPresent();
    }
}
