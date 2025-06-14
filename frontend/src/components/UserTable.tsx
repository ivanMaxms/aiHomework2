import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TableSortLabel,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import type { User } from '../types/user';

type SortField = 'name' | 'email' | 'website' | 'company.name';
type SortOrder = 'asc' | 'desc';

interface UserTableProps {
  users: User[];
  onUserClick: (user: User) => void;
  onUserDelete: (userId: number) => void;
}

export const UserTable: React.FC<UserTableProps> = ({
  users,
  onUserClick,
  onUserDelete,
}) => {
  const [sortField, setSortField] = useState<SortField>('name');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const sortedUsers = [...users].sort((a, b) => {
    let aValue = sortField === 'company.name' ? a.company?.name : a[sortField];
    let bValue = sortField === 'company.name' ? b.company?.name : b[sortField];
    
    // Handle null or undefined values
    if (aValue == null) aValue = '';
    if (bValue == null) bValue = '';

    if (sortOrder === 'desc') {
      [aValue, bValue] = [bValue, aValue];
    }
    
    return aValue.localeCompare(bValue);
  });

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 1200, margin: '0 auto' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={sortField === 'name'}
                direction={sortField === 'name' ? sortOrder : 'asc'}
                onClick={() => handleSort('name')}
              >
                Name
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortField === 'email'}
                direction={sortField === 'email' ? sortOrder : 'asc'}
                onClick={() => handleSort('email')}
              >
                Email
              </TableSortLabel>
            </TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>
              <TableSortLabel
                active={sortField === 'website'}
                direction={sortField === 'website' ? sortOrder : 'asc'}
                onClick={() => handleSort('website')}
              >
                Website
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortField === 'company.name'}
                direction={sortField === 'company.name' ? sortOrder : 'asc'}
                onClick={() => handleSort('company.name')}
              >
                Company
              </TableSortLabel>
            </TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedUsers.map((user) => (
            <TableRow
              key={user.id}
              hover
              onClick={() => onUserClick(user)}
              sx={{ cursor: 'pointer' }}
            >
              <TableCell>{user.name || 'N/A'}</TableCell>
              <TableCell>{user.email || 'N/A'}</TableCell>
              <TableCell>{user.address ? `${user.address.street}, ${user.address.city}` : 'N/A'}</TableCell>
              <TableCell>{user.phone || 'N/A'}</TableCell>
              <TableCell>{user.website || 'N/A'}</TableCell>
              <TableCell>{user.company?.name || 'N/A'}</TableCell>
              <TableCell>
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    onUserDelete(user.id);
                  }}
                  color="error"
                  size="small"
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}; 