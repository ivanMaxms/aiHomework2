package com.example.userdirectory.controller;

import com.example.userdirectory.model.User;
import com.example.userdirectory.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.mockito.Mockito.when;

public class UserControllerTest {

    @InjectMocks
    private UserController userController;

    @Mock
    private UserService userService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testGetAllUsers_filtersAdmin() {
        // Arrange
        User adminUser = new User();
        adminUser.setUsername("admin");
        adminUser.setName("Admin");

        User regularUser = new User();
        regularUser.setUsername("testuser");
        regularUser.setName("Test User");

        List<User> allUsers = new ArrayList<>();
        allUsers.add(adminUser);
        allUsers.add(regularUser);

        when(userService.getAllUsers()).thenReturn(allUsers);

        // Act
        ResponseEntity<List<User>> response = userController.getAllUsers();

        // Assert
        assertEquals(200, response.getStatusCode().value());
        List<User> returnedUsers = Objects.requireNonNull(response.getBody());
        assertEquals(1, returnedUsers.size());
        assertEquals("testuser", returnedUsers.get(0).getUsername());
        assertFalse(returnedUsers.stream().anyMatch(u -> u.getUsername().equals("admin")));
    }
} 