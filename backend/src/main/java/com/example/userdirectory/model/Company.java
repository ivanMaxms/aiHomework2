package com.example.userdirectory.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Embeddable
public class Company {
    @NotBlank
    @Column(name = "company_name")
    private String name;

    @NotBlank
    @Column(name = "catch_phrase")
    private String catchPhrase;

    @NotBlank
    @Column(name = "bs")
    private String bs;
} 