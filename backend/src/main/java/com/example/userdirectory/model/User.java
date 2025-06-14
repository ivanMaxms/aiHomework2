package com.example.userdirectory.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    @NotBlank
    private String username;

    @NotBlank
    private String password;

    private String name;

    @Email
    @NotBlank
    private String email;

    private String phone;
    private String website;

    @Embedded
    @AttributeOverrides({
        @AttributeOverride(name = "street", column = @Column(name = "street")),
        @AttributeOverride(name = "suite", column = @Column(name = "suite")),
        @AttributeOverride(name = "city", column = @Column(name = "city")),
        @AttributeOverride(name = "zipcode", column = @Column(name = "zipcode")),
        @AttributeOverride(name = "geo.lat", column = @Column(name = "lat")),
        @AttributeOverride(name = "geo.lng", column = @Column(name = "lng"))
    })
    private Address address;

    @Embedded
    @AttributeOverrides({
        @AttributeOverride(name = "name", column = @Column(name = "company_name")),
        @AttributeOverride(name = "catchPhrase", column = @Column(name = "catch_phrase")),
        @AttributeOverride(name = "bs", column = @Column(name = "bs"))
    })
    private Company company;
} 