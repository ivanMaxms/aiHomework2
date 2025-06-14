import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';

import AuthService from './services/auth.service';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';
import { User } from './types/user.type';

const App: React.FC = () => {
    const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
        }
    }, []);

    const logOut = () => {
        AuthService.logout();
        setCurrentUser(undefined);
    };

    const handleLoginSuccess = () => {
        const user = AuthService.getCurrentUser();
        setCurrentUser(user);
    }

    return (
        <div>
            <nav className="app-nav">
                <Link to="/" className="app-nav-brand">
                    UserDirectory
                </Link>

                <div className="app-nav-links">
                    {currentUser && (
                        <>
                            <li className="nav-item">
                                <NavLink to="/home" className="nav-link">
                                    Manage Users
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/profile" className="nav-link">
                                    Profile
                                </NavLink>
                            </li>
                        </>
                    )}
                </div>

                <div className="app-nav-links">
                    {currentUser ? (
                        <li className="nav-item">
                            <a href="/login" className="nav-link" onClick={logOut}>
                                Logout
                            </a>
                        </li>
                    ) : (
                        <li className="nav-item">
                            <NavLink to="/login" className="nav-link">
                                Login
                            </NavLink>
                        </li>
                    )}
                </div>
            </nav>

            <div className="container mt-3">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
