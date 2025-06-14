# Frontend - React User Directory UI

This directory contains the React application that serves as the frontend for the User Directory project. It provides a modern, responsive user interface for managing users.

---

## Features

-   **Modern UI:** A clean, visually appealing interface built with custom CSS.
-   **User-Friendly Table:** Displays users in a sortable, easy-to-read table.
-   **Interactive Modal:** Shows detailed user information in a modal window.
-   **Component-Based:** Built with reusable React components.
-   **TypeScript:** Ensures type safety and improves developer experience.
-   **Vite Tooling:** Fast development server and optimized builds.

---

## Prerequisites

-   Node.js (v18 or higher)
-   npm (v9 or higher)

---

## Getting Started

1.  **Navigate to the Frontend Directory:**
    From the project root, move into the frontend directory.
    ```bash
    cd frontend
    ```

2.  **Install Dependencies:**
    Install all the necessary npm packages.
    ```bash
    npm install
    ```

3.  **Run the Development Server:**
    Start the Vite development server. The application will automatically connect to the backend API running at `http://localhost:8080`.
    ```bash
    npm run dev
    ```
    The frontend will be available at [http://localhost:5173](http://localhost:5173).

---

## Available Scripts

In the `frontend` directory, you can run the following scripts:

-   `npm run dev`: Runs the app in development mode.
-   `npm run build`: Builds the app for production.
-   `npm run test`: Runs the Jest test suite.
-   `npm run lint`: Lints the code using ESLint.
-   `npm run preview`: Serves the production build locally for testing.

## Project Structure

```
src/
├── components/     # React components
│   ├── UserTable.tsx
│   └── UserModal.tsx
├── services/      # API and other services
│   └── api.ts
├── types/         # TypeScript type definitions
│   └── user.ts
└── App.tsx        # Main application component
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
- `npm test` - Run tests

### Code Style

This project uses ESLint and TypeScript for code quality. Run `npm run lint` to check for issues.

## Testing

Tests are written using Vitest and React Testing Library. Run the test suite with:

```bash
npm test
```

> **Note on CSS Imports:** If you encounter a `Configuration error` related to `identity-obj-proxy` when running tests, it means a necessary development dependency is missing. You can resolve this by running:
> ```bash
> npm install --save-dev identity-obj-proxy
> ```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT
