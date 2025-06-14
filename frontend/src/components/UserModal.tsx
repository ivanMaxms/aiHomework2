import React from 'react';
import type { User } from '../types/user';
import './UserModal.css';

interface UserModalProps {
    user: User | null;
    onClose: () => void;
}

export const UserModal: React.FC<UserModalProps> = ({ user, onClose }) => {
    if (!user) return null;

    const { name, email, address, phone, website, company } = user;
    const fullAddress = `${address.suite}, ${address.street}, ${address.city}, ${address.zipcode}`;
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${address.geo.lat},${address.geo.lng}`;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="modal-close-btn" title="Close">
                    &times;
                </button>

                <div className="modal-header">
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>

                <div className="modal-section">
                    <h3>Address</h3>
                    <p>{fullAddress}</p>
                    <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="map-link">
                        📍 View on map
                    </a>
                </div>

                <div className="modal-section">
                    <h3>Contact</h3>
                    <p><strong>Phone:</strong> {phone}</p>
                    <p><strong>Website:</strong> <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">{website}</a></p>
                </div>

                <div className="modal-section">
                    <h3>Company</h3>
                    <p><strong>Name:</strong> {company.name}</p>
                    <p><strong>Catchphrase:</strong> "{company.catchPhrase}"</p>
                    <p><strong>Business:</strong> {company.bs}</p>
                </div>
            </div>
        </div>
    );
}; 