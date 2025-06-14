import React, { useEffect } from 'react';
import AuthService from '../services/auth.service';
import './Profile.css';

const Profile: React.FC = () => {
    const currentUser = AuthService.getCurrentUser();

    useEffect(() => {
        if (currentUser) {
            // This log is useful for debugging but not for production
            // console.log("Current User (including JWT token):", currentUser);
        }
    }, [currentUser]);

    if (!currentUser) {
        return (
            <div className="container">
                <header className="jumbotron">
                    <h3>Not authorized</h3>
                </header>
            </div>
        );
    }

    return (
        <div className="profile-container">
            <header className="profile-header">
                <h3>
                    <strong>{currentUser.username}</strong>'s Profile
                </h3>
            </header>
            <div className="profile-details">
                <p>
                    <strong>Id:</strong> {currentUser.id}
                </p>
                <p>
                    <strong>Email:</strong> {currentUser.email}
                </p>
                <p>
                    <strong>Username:</strong> {currentUser.username}
                </p>
            </div>
        </div>
    );
};

export default Profile; 