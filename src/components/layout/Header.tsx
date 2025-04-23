import React from 'react';
import { Layout, Typography, Switch, Space, Input } from 'antd';
import { SearchOutlined, GithubOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import colors from '../../theme/colors';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

type HeaderProps = {
  onSearch: (value: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const StyledHeader = styled(AntHeader)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background-color: ${colors.primary.white};
  border-bottom: 1px solid ${colors.neutrals[300]};
  height: 64px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
`;

const LogoTitle = styled(Title)`
  margin: 0 !important;
  font-size: 18px !important;
  display: flex;
  align-items: center;
  font-weight: 500 !important;
  
  span {
    color: ${colors.primary.red};
  }
`;

const SearchInput = styled(Input)`
  width: 250px;
  transition: width 0.3s ease;
  
  &:focus, &:hover {
    width: 300px;
  }
  
  @media (max-width: 768px) {
    width: 150px;
    
    &:focus, &:hover {
      width: 200px;
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Header: React.FC<HeaderProps> = ({ onSearch, isDarkMode, toggleDarkMode }) => {
  return (
    <StyledHeader>
      <LogoTitle level={4}>
        <span>Design</span>System
      </LogoTitle>
      
      <RightSection>
        <SearchInput 
          prefix={<SearchOutlined />} 
          placeholder="Search components" 
          onChange={(e) => onSearch(e.target.value)}
          allowClear
        />
        
        <Space>
          <Switch 
            checked={isDarkMode}
            onChange={toggleDarkMode}
            checkedChildren="🌙"
            unCheckedChildren="☀️"
          />
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <GithubOutlined style={{ fontSize: '20px', color: colors.neutrals[800] }} />
          </a>
        </Space>
      </RightSection>
    </StyledHeader>
  );
};

export default Header;