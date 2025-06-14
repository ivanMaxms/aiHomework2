package com.example.userdirectory.model;

import jakarta.persistence.Embeddable;
import jakarta.persistence.Embedded;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Embeddable
public class Address {
    @NotBlank
    private String street;

    @NotBlank
    private String suite;

    @NotBlank
    private String city;

    @NotBlank
    private String zipcode;

    @Embedded
    private Geo geo;
} 