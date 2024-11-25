import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const HeaderContainer = styled.header`
  height: 72px;
  background: var(--background-white);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: #f8fafc;
  border-radius: 8px;
  padding: 8px 16px;
  width: 360px;

  svg {
    color: var(--text-secondary);
    margin-right: 8px;
  }

  input {
    border: none;
    background: none;
    outline: none;
    font-size: 14px;
    width: 100%;
    color: var(--text-primary);

    &::placeholder {
      color: var(--text-secondary);
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const NotificationBadge = styled.div`
  position: relative;
  cursor: pointer;

  svg {
    color: var(--text-secondary);
  }

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    right: 2px;
    width: 8px;
    height: 8px;
    background: var(--primary-blue);
    border-radius: 50%;
    border: 2px solid white;
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--primary-light-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-blue);
  font-weight: 600;
  font-size: 16px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  font-weight: 600;
  color: var(--text-primary);
  font-size: 14px;
`;

const UserRole = styled.div`
  color: var(--text-secondary);
  font-size: 12px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <SearchBar>
        <SearchIcon />
        <input placeholder="Search dashboards, reports, and analytics..." />
      </SearchBar>

      <RightSection>
        <NotificationBadge>
          <NotificationsIcon />
        </NotificationBadge>

        <UserProfile>
          <Avatar>JD</Avatar>
          <UserInfo>
            <UserName>John Doe</UserName>
            <UserRole>Admin</UserRole>
          </UserInfo>
          <KeyboardArrowDownIcon sx={{ color: 'var(--text-secondary)' }} />
        </UserProfile>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;
