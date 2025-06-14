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

To get the application running, you'll need to start the backend services (API and database) and the frontend development server separately.

1.  **Start the Backend:**
    Navigate to the `backend` directory and use Docker Compose to build and run the containers.
    ```bash
    cd backend
    docker-compose up --build -d
    ```
    The `-d` flag will run the containers in the background.

2.  **Start the Frontend:**
    In a separate terminal, navigate to the `frontend` directory, install the dependencies, and start the development server.
    ```bash
    cd frontend
    npm install
    npm run dev
    ```

3.  **Access the Application:**
    *   The **frontend** will be available at [http://localhost:5173](http://localhost:5173).
    *   The **backend API** will be running at [http://localhost:8080](http://localhost:8080).

4.  **Login Credentials:**
    *   **Username:** `

## Project Structure

*   `/backend`: Contains the Spring Boot backend application and its `docker-compose.yml`.
*   `/frontend`: Contains the React frontend application.

## API Documentation

The API documentation is available at `http://localhost:8080/swagger-ui.html` when running the backend.
