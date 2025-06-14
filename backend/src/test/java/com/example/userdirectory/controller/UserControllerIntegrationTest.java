package com.example.userdirectory.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.hamcrest.Matchers.not;
import static org.hamcrest.Matchers.hasItem;
import static org.hamcrest.Matchers.is;

@SpringBootTest
@AutoConfigureMockMvc
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
@Sql("/data.sql")
public class UserControllerIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    private String getAdminAuthToken() throws Exception {
        String loginRequest = "{\"username\":\"admin\",\"password\":\"admin\"}";
        MvcResult loginResult = mockMvc.perform(post("/api/auth/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(loginRequest))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.token").exists())
                .andReturn();

        JsonNode loginResponseJson = objectMapper.readTree(loginResult.getResponse().getContentAsString());
        return "Bearer " + loginResponseJson.get("token").asText();
    }

    @Test
    void adminCanGetAllAndUpdateUsers() throws Exception {
        String adminToken = getAdminAuthToken();

        // 1. Get all users and verify that the 'admin' user is not present
        // and that other seeded users are.
        mockMvc.perform(get("/api/users")
                        .header("Authorization", adminToken))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[*].username", not(hasItem("admin"))))
                .andExpect(jsonPath("$[0].username", is("Leanne Graham")));

        // 2. Get a specific user by ID and verify details
        // Note: In our data.sql, Leanne Graham has id=2
        long userIdToGet = 2;
        mockMvc.perform(get("/api/users/" + userIdToGet)
                        .header("Authorization", adminToken))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(userIdToGet))
                .andExpect(jsonPath("$.username").value("Leanne Graham"));


        // 3. Update a user
        long userIdToUpdate = 3; // Ervin Howell
        String updatedUserJson = "{\"name\":\"Updated Name\",\"email\":\"updated@test.com\"}";
        mockMvc.perform(put("/api/users/" + userIdToUpdate)
                        .header("Authorization", adminToken)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(updatedUserJson))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("Updated Name"))
                .andExpect(jsonPath("$.email").value("updated@test.com"));
    }
} 