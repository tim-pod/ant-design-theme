import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ComponentCategory } from '../../types';
import colors from '../../theme/colors';

const { Sider } = Layout;

type SidebarProps = {
  categories: ComponentCategory[];
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
};

const StyledSider = styled(Sider)`
  position: fixed;
  height: calc(100vh - 64px);
  left: 0;
  top: 64px;
  overflow: auto;
  background-color: ${colors.primary.white};
  border-right: 1px solid ${colors.neutrals[300]};
  
  .ant-menu {
    border-right: none;
  }
  
  .ant-menu-item {
    transition: all 0.2s ease;
    
    &:hover {
      background-color: ${colors.neutrals[200]};
    }
    
    &.ant-menu-item-selected {
      background-color: ${colors.red[50]};
      color: ${colors.primary.red};
      font-weight: 500;
      
      &::after {
        border-right-color: ${colors.primary.red};
      }
    }
  }
  
  .ant-menu-submenu-title:hover {
    background-color: ${colors.neutrals[200]};
  }
  
  .ant-menu-submenu-selected > .ant-menu-submenu-title {
    color: ${colors.primary.red};
  }
`;

const Sidebar: React.FC<SidebarProps> = ({ categories, collapsed, onCollapse }) => {
  const location = useLocation();
  
  const getMenuItems = () => {
    return categories.map((category) => ({
      key: category.key,
      label: category.title,
      children: category.components.map((component) => ({
        key: `${category.key}/${component.toLowerCase()}`,
        label: <Link to={`/${category.key}/${component.toLowerCase()}`}>{component}</Link>,
      })),
    }));
  };
  
  const getDefaultOpenKeys = () => {
    const path = location.pathname.split('/');
    if (path.length > 1) {
      return [path[1]];
    }
    return [];
  };
  
  const getSelectedKey = () => {
    const path = location.pathname.split('/');
    if (path.length > 2) {
      return [`${path[1]}/${path[2]}`];
    }
    return [];
  };
  
  return (
    <StyledSider 
      width={220} 
      collapsible 
      collapsed={collapsed} 
      onCollapse={onCollapse}
      collapsedWidth={0}
      breakpoint="lg"
    >
      <Menu
        mode="inline"
        defaultOpenKeys={getDefaultOpenKeys()}
        selectedKeys={getSelectedKey()}
        style={{ height: '100%', borderRight: 0 }}
        items={getMenuItems()}
      />
    </StyledSider>
  );
};

export default Sidebar;