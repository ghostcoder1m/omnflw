import React from 'react';
import styled from 'styled-components';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import TimelineIcon from '@mui/icons-material/Timeline';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

const SidebarContainer = styled.div`
  width: 280px;
  background: var(--background-white);
  border-right: 1px solid var(--border-color);
  height: 100vh;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  padding: 0 12px 32px;
  font-size: 24px;
  font-weight: 700;
  color: var(--primary-blue);
  display: flex;
  align-items: center;
  gap: 8px;
  
  span {
    background: linear-gradient(135deg, var(--primary-blue), var(--secondary-blue));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const NavSection = styled.div`
  margin-bottom: 24px;
`;

const NavTitle = styled.div`
  padding: 0 12px 8px;
  font-size: 12px;
  text-transform: uppercase;
  color: var(--text-secondary);
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  margin: 4px 0;
  border-radius: 8px;
  color: ${props => props.$active ? 'var(--primary-blue)' : 'var(--text-primary)'};
  background: ${props => props.$active ? 'var(--primary-light-blue)' : 'transparent'};
  font-weight: ${props => props.$active ? '600' : '500'};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.$active ? 'var(--primary-light-blue)' : '#f8fafc'};
  }

  svg {
    margin-right: 12px;
    font-size: 20px;
  }
`;

const navItems = [
  { icon: <DashboardIcon />, label: 'Dashboard', active: true },
  { icon: <AutoGraphIcon />, label: 'Analytics' },
  { icon: <TimelineIcon />, label: 'Predictions' },
  { icon: <BarChartIcon />, label: 'Reports' },
  { icon: <PeopleIcon />, label: 'Team' },
];

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo>
        <AutoGraphIcon sx={{ fontSize: 28 }} />
        <span>OmniFlow.ai</span>
      </Logo>

      <NavSection>
        <NavTitle>Main Menu</NavTitle>
{navItems.map((item, index) => (
          <NavItem key={index} $active={item.active}>
            {item.icon}
            {item.label}
          </NavItem>
        ))}
      </NavSection>

      <NavSection style={{ marginTop: 'auto' }}>
        <NavItem>
          <SettingsIcon />
          Settings
        </NavItem>
      </NavSection>
    </SidebarContainer>
  );
};

export default Sidebar;
