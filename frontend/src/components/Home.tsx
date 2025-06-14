import React, { useState, useEffect, useMemo } from 'react';
import { api } from '../services/api';
import type { User } from '../types/user';
import { UserModal } from './UserModal';
import './Home.css';

type SortKey = keyof User | 'company.name';

const Home: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [sortConfig, setSortConfig] = useState<{ key: SortKey; direction: 'ascending' | 'descending' } | null>(null);

    const sortedUsers = useMemo(() => {
        let sortableUsers = [...users];
        if (sortConfig !== null) {
            sortableUsers.sort((a, b) => {
                const aValue = sortConfig.key.includes('.') ? a.company.name : a[sortConfig.key as keyof User];
                const bValue = sortConfig.key.includes('.') ? b.company.name : b[sortConfig.key as keyof User];

                if (aValue < bValue) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (aValue > bValue) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableUsers;
    }, [users, sortConfig]);

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const data = await api.users.getAll();
                const filteredUsers = data.filter((user: User) => user.username !== 'admin');
                setUsers(filteredUsers);
            } catch (err) {
                setError('Failed to load users. Please login or try again later.');
            }
        };
        loadUsers();
    }, []);

    const requestSort = (key: SortKey) => {
        let direction: 'ascending' | 'descending' = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const getSortIndicatorClass = (name: SortKey) => {
        if (!sortConfig || sortConfig.key !== name) {
            return 'sort-indicator-hidden';
        }
        return sortConfig.direction === 'ascending' ? 'sort-indicator-asc' : 'sort-indicator-desc';
    };

    const handleUserClick = (user: User) => {
        setSelectedUser(user);
    };

    const handleCloseModal = () => {
        setSelectedUser(null);
    };

    const handleDelete = async (e: React.MouseEvent, userId: number) => {
        e.stopPropagation(); // Prevent row click event when deleting
        try {
            await api.users.delete(userId);
            setUsers(users.filter(user => user.id !== userId));
        } catch (err) {
            setError('Failed to delete user.');
        }
    };

    return (
        <div className="home-container">
            <h1>Users</h1>
            {error && <p className="error-message">{error}</p>}
            <div className="user-table-container">
                <table className="user-table">
                    <thead>
                        <tr>
                            <th onClick={() => requestSort('name')}>
                                Name / Email <span className={getSortIndicatorClass('name')}></span>
                            </th>
                            <th onClick={() => requestSort('address')}>
                                Address <span className={getSortIndicatorClass('address')}></span>
                            </th>
                            <th onClick={() => requestSort('phone')}>
                                Phone <span className={getSortIndicatorClass('phone')}></span>
                            </th>
                            <th onClick={() => requestSort('website')}>
                                Website <span className={getSortIndicatorClass('website')}></span>
                            </th>
                            <th onClick={() => requestSort('company.name')}>
                                Company <span className={getSortIndicatorClass('company.name')}></span>
                            </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedUsers.map((user) => (
                            <tr key={user.id} onClick={() => handleUserClick(user)}>
                                <td>
                                    <div className="user-name">{user.name}</div>
                                    <div className="user-email">{user.email}</div>
                                </td>
                                <td>{`${user.address.street}, ${user.address.suite}`}</td>
                                <td>{user.phone}</td>
                                <td><a href={`http://${user.website}`} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer">{user.website}</a></td>
                                <td>{user.company.name}</td>
                                <td>
                                    <button onClick={(e) => handleDelete(e, user.id)} className="delete-btn" title="Delete user">
                                        &times;
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <UserModal user={selectedUser} onClose={handleCloseModal} />
        </div>
    );
};

export default Home; 
