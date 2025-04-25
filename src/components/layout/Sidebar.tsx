import React from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ComponentCategory } from '../../types';
import colors from '../../theme/colors';

type SidebarProps = {
  categories: ComponentCategory[];
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
};

const SidebarWrapper = styled.div`
  position: fixed;
  height: calc(100vh - 64px);
  left: 0;
  top: 64px;
  width: 220px;
  border-right: 1px solid ${colors.neutrals[300]};
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
    <SidebarWrapper>
      <Menu
        mode="inline"
        theme="light"
        defaultOpenKeys={getDefaultOpenKeys()}
        selectedKeys={getSelectedKey()}
        style={{ 
          height: '100%', 
          borderRight: 0,
          background: colors.primary.white  // explicitly set background
        }}
        inlineCollapsed={collapsed}
        items={getMenuItems()}
      />
    </SidebarWrapper>
  );
};

export default Sidebar;