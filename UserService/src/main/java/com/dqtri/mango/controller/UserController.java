package com.dqtri.mango.controller;

import com.dqtri.mango.model.MangoUser;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class UserController {

    private static MangoUser mangoUser = new MangoUser();

    @GetMapping("")
    public ResponseEntity<?> getMyProfiles() throws InterruptedException {
        Thread.sleep(1000);
        return ResponseEntity.ok(mangoUser);
    }

    @PutMapping("")
    public ResponseEntity<?> updateMyProfiles(@Valid @RequestBody MangoUser payload) {
        mangoUser = payload;
        return ResponseEntity.ok().body(mangoUser);
    }
}
