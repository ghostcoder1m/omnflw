import React from 'react';
import styled from 'styled-components';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import PeopleIcon from '@mui/icons-material/People';

const DashboardContainer = styled.div`
  display: grid;
  gap: 24px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`;

const StatCard = styled.div`
  background: var(--background-white);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
`;

const StatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  svg {
    color: var(--primary-blue);
    background: var(--primary-light-blue);
    padding: 8px;
    border-radius: 8px;
    font-size: 24px;
  }
`;

const StatTitle = styled.div`
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 500;
`;

const StatValue = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
`;

const StatTrend = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: ${props => props.$positive ? '#10B981' : '#EF4444'};

  svg {
    font-size: 16px;
  }
`;

const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
`;

const ChartCard = styled.div`
  background: var(--background-white);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
`;

const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const ChartTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
`;

const TimeFilter = styled.div`
  display: flex;
  gap: 8px;
`;

const TimeButton = styled.button`
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
  background: ${props => props.$active ? 'var(--primary-light-blue)' : 'transparent'};
  color: ${props => props.$active ? 'var(--primary-blue)' : 'var(--text-secondary)'};
  font-weight: 500;
  font-size: 13px;
`;

const data = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 4500 },
  { name: 'May', value: 6000 },
  { name: 'Jun', value: 5500 },
  { name: 'Jul', value: 7000 },
];

const barData = [
  { name: 'Mon', value: 20 },
  { name: 'Tue', value: 45 },
  { name: 'Wed', value: 35 },
  { name: 'Thu', value: 50 },
  { name: 'Fri', value: 30 },
];

const Dashboard = () => {
  return (
    <DashboardContainer>
      <StatsGrid>
        <StatCard>
          <StatHeader>
            <AutoGraphIcon />
          </StatHeader>
          <StatTitle>Total Revenue</StatTitle>
          <StatValue>$84,254</StatValue>
<StatTrend $positive>
            <TrendingUpIcon /> +24.5%
          </StatTrend>
        </StatCard>

        <StatCard>
          <StatHeader>
            <PeopleIcon />
          </StatHeader>
          <StatTitle>Active Users</StatTitle>
          <StatValue>2,420</StatValue>
<StatTrend $positive>
            <TrendingUpIcon /> +12.3%
          </StatTrend>
        </StatCard>

        <StatCard>
          <StatHeader>
            <AutoGraphIcon />
          </StatHeader>
          <StatTitle>Conversion Rate</StatTitle>
          <StatValue>4.8%</StatValue>
          <StatTrend>
            <TrendingDownIcon /> -2.1%
          </StatTrend>
        </StatCard>

        <StatCard>
          <StatHeader>
            <AutoGraphIcon />
          </StatHeader>
          <StatTitle>Avg. Session</StatTitle>
          <StatValue>8m 42s</StatValue>
<StatTrend $positive>
            <TrendingUpIcon /> +8.4%
          </StatTrend>
        </StatCard>
      </StatsGrid>

      <ChartsGrid>
        <ChartCard>
          <ChartHeader>
            <ChartTitle>Revenue Overview</ChartTitle>
            <TimeFilter>
<TimeButton>1D</TimeButton>
              <TimeButton>1W</TimeButton>
              <TimeButton $active>1M</TimeButton>
              <TimeButton>1Y</TimeButton>
            </TimeFilter>
          </ChartHeader>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--primary-blue)" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="var(--primary-blue)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="var(--primary-blue)" 
                fillOpacity={1} 
                fill="url(#colorValue)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard>
          <ChartHeader>
            <ChartTitle>User Activity</ChartTitle>
          </ChartHeader>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip />
              <Bar dataKey="value" fill="var(--primary-blue)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </ChartsGrid>
    </DashboardContainer>
  );
};

export default Dashboard;
