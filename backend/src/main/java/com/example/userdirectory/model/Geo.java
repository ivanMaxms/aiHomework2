package com.example.userdirectory.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Embeddable
public class Geo {
    @Column(name = "lat")
    private Double lat;

    @Column(name = "lng")
    private Double lng;
} 