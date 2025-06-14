# Backend - Spring Boot User Directory API

This directory contains the Java Spring Boot application that serves as the backend for the User Directory project. It provides a RESTful API for user authentication and management.

---

## Features

-   **REST API:** Exposes endpoints for user login and user data management.
-   **JWT Authentication:** Secures the API using Spring Security and JSON Web Tokens.
-   **PostgreSQL Integration:** Connects to a PostgreSQL database for data persistence.
-   **Dockerized:** Comes with a `docker-compose.yml` file for easy setup with a database.

---

## Prerequisites

-   Java 17 (or higher)
-   Maven 3.x
-   Docker and Docker Compose (for running with the database)

---

## Running the Backend

There are two ways to run the backend application.

### 1. With Docker (Recommended)

This is the easiest way to get started, as it automatically sets up and runs the PostgreSQL database alongside the application.

From the `/backend` directory, run:
```bash
docker-compose up --build
```
The API will be available at `http://localhost:8080`.

### 2. Without Docker (Manual Setup)

This approach requires you to have a PostgreSQL server running separately.

1.  **Configure the Database:**
    - Make sure your PostgreSQL server is running.
    - Create a database named `user_directory`.
    - Open `src/main/resources/application.properties` and update the `spring.datasource.username` and `spring.datasource.password` fields with your PostgreSQL credentials.

2.  **Run the Application:**
    From the `/backend` directory, run the following Maven command:
    ```bash
    mvn spring-boot:run
    ```

---

## API Endpoints

-   `POST /api/auth/login`: Authenticates a user and returns a JWT.
-   `GET /api/users`: Retrieves a list of all users (requires authentication).
-   `DELETE /api/users/{id}`: Deletes a specific user (requires authentication).

## Tech Stack

- Java 17
- Spring Boot 3.2.3
- Spring Security with JWT
- Spring Data JPA
- PostgreSQL
- Docker & Docker Compose
- Maven
- Lombok

## Development

### Environment Variables

- `JWT_SECRET` - Secret key for JWT token generation (min 32 characters)
- `SPRING_DATASOURCE_URL` - Database URL
- `SPRING_DATASOURCE_USERNAME` - Database username
- `SPRING_DATASOURCE_PASSWORD` - Database password

### Testing

Run tests with:
```bash
mvn test
```

## Docker Support

Build the Docker image:
```bash
docker build -t user-directory-backend .
```

Run with Docker Compose:
```bash
docker-compose -f docker-compose.yml up -d
```

### Backend Tests
To run the backend tests, use the dedicated `test` service with Docker Compose. This will start a temporary container to run the tests.
```bash
docker-compose run --rm test
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information. 