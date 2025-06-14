import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import AuthService from '../services/auth.service';
import Profile from "./Profile";

// Mock AuthService
jest.mock('../services/auth.service');
const mockedAuthService = AuthService as jest.Mocked<typeof AuthService>;

// Mock navigate
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));


describe('Login Component', () => {

  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test('renders login form', () => {
    render(
      <MemoryRouter>
        <Login onLoginSuccess={() => {}} />
      </MemoryRouter>
    );

    expect(screen.getByTestId('username-input')).toBeInTheDocument();
    expect(screen.getByTestId('password-input')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  test('allows user to type in username and password fields', async () => {
    const user = userEvent.setup();
    render(
        <MemoryRouter>
            <Login onLoginSuccess={() => {}} />
        </MemoryRouter>
    );

    const usernameInput = screen.getByTestId('username-input');
    const passwordInput = screen.getByTestId('password-input');

    await user.type(usernameInput, 'testuser');
    await user.type(passwordInput, 'password');

    expect(usernameInput).toHaveValue('testuser');
    expect(passwordInput).toHaveValue('password');
  });

  test('calls onLoginSuccess and navigates on successful login', async () => {
    const user = userEvent.setup();
    const handleLoginSuccess = jest.fn();
    mockedAuthService.login.mockResolvedValue({ username: 'testuser' });

    render(
      <MemoryRouter>
        <Login onLoginSuccess={handleLoginSuccess} />
      </MemoryRouter>
    );

    await user.type(screen.getByTestId('username-input'), 'admin');
    await user.type(screen.getByTestId('password-input'), 'admin');
    await user.click(screen.getByRole('button', { name: /login/i }));
    
    // We need to wait for the promises to resolve
    await new Promise(process.nextTick);

    expect(mockedAuthService.login).toHaveBeenCalledWith('admin', 'admin');
    expect(handleLoginSuccess).toHaveBeenCalledTimes(1);
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/profile');
  });


  test('shows an error message on failed login', async () => {
    const user = userEvent.setup();
    const errorMessage = 'Invalid credentials';
    mockedAuthService.login.mockRejectedValue({
        response: { data: { message: errorMessage } }
    });

    render(
        <MemoryRouter>
            <Login onLoginSuccess={() => {}} />
        </MemoryRouter>
    );

    await user.type(screen.getByTestId('username-input'), 'wrong');
    await user.type(screen.getByTestId('password-input'), 'user');
    await user.click(screen.getByRole('button', { name: /login/i }));

    const error = await screen.findByText(errorMessage);
    expect(error).toBeInTheDocument();
  });
}); 