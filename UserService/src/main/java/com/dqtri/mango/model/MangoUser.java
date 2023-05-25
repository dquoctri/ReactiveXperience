package com.dqtri.mango.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter

public class MangoUser {
    @NotBlank
    private String firstName;
    @NotBlank
    private String lastName;
    @NotNull
    @Email
    private String email;
    @NotBlank
    private String password;

    public MangoUser(){
        this.firstName = "Vy";
        this.lastName = "Doan";
        this.email = "mango@dqtri.com";
        this.password = "mango";
    }
}
