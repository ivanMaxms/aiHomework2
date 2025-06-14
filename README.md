# Full-Stack User Directory Application

This is a complete full-stack web application featuring a React frontend and a Spring Boot backend. The application provides a simple user directory where an administrator can log in to manage a list of users.

## Features

*   **Admin Authentication:** Secure login for the administrator using JWT (JSON Web Tokens).
*   **User Management:** View a list of all users in a clean, modern table.
*   **Sortable User List:** Click on column headers to sort users by name, address, phone, website, or company.
*   **User Details Modal:** Click on a user to view their detailed information in a pop-up modal.
*   **Delete Users:** Remove users from the directory.
*   **Containerized Deployment:** The entire application (frontend, backend, and database) is containerized with Docker for easy setup and consistent deployment.

---

## Technology Stack

*   **Frontend:**
    *   React
    *   TypeScript
    *   Vite
    *   Modern CSS (Flexbox, Grid) for custom styling
    *   Axios for API communication
*   **Backend:**
    *   Java 17
    *   Spring Boot
    *   Spring Security (with JWT)
    *   Maven
    *   PostgreSQL Database

---

## Prerequisites

*   [Docker](https://www.docker.com/products/docker-desktop/) and Docker Compose

---

## Quick Start

The entire application can be started with a single command from the project root directory.

1.  **Build and Run Containers:**
    ```bash
    docker-compose up --build
    ```
    This command will build the images for the frontend and backend services and start the application along with the PostgreSQL database.

2.  **Access the Application:**
    *   The **frontend** will be available at [http://localhost:5173](http://localhost:5173).
    *   The **backend API** will be running at [http://localhost:8080](http://localhost:8080).

3.  **Login Credentials:**
    *   **Username:** `admin`
    *   **Password:** `SecureAdminPass123`

---

## Project Structure

*   `/backend`: Contains the Spring Boot backend application.
*   `/frontend`: Contains the React frontend application.
*   `docker-compose.yml`: The main Docker Compose file to orchestrate all services.

## API Documentation

The API documentation is available at `http://localhost:8080/swagger-ui.html` when running the backend.

## Testing

### Frontend Tests
```bash
cd frontend
npm test
```

### Backend Tests
From the project root, navigate to the `backend` directory and run the tests using the dedicated `test` service in Docker Compose:
```bash
cd backend
docker-compose run --rm test
```

## License

MIT 