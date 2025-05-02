import React, { useState } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import colors from '../../theme/colors';

const { Content } = Layout;

const categories = [
  {
    key: 'general',
    title: 'General',
    components: ['Button', 'Typography', 'Icon', 'Divider'],
  },
  {
    key: 'layout',
    title: 'Layout',
    components: ['Sidebar', 'Grid', 'Space', 'Divider'],
  },
  {
    key: 'navigation',
    title: 'Navigation',
    components: ['Menu', 'Pagination', 'Steps', 'Tabs'],
  },
  {
    key: 'data-entry',
    title: 'Data Entry',
    components: ['Checkbox', 'DatePicker', 'Form', 'Input', 'InputNumber', 'Radio', 'Select', 'Switch', 'Upload'],
  },
  {
    key: 'data-display',
    title: 'Data Display',
    components: ['Avatar', 'Badge', 'Card', 'Carousel', 'Collapse', 'Descriptions', 'List', 'Popover', 'Table', 'Tabs', 'Tag', 'Timeline', 'Tooltip'],
  },
  {
    key: 'feedback',
    title: 'Feedback',
    components: ['Alert', 'Drawer', 'Message', 'Modal', 'Notification', 'Progress', 'Skeleton', 'Spin'],
  },
  {
    key: 'colors',
    title: 'Colors',
    components: ['Primary', 'Secondary', 'Neutrals', 'Status'],
  },
];

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const StyledContent = styled(Content)<{ $sidebarCollapsed: boolean }>`
  margin-left: ${(props) => (props.$sidebarCollapsed ? '0' : '220px')};
  margin-top: 64px;
  padding: 24px;
  background-color: ${colors.neutrals[100]};
  min-height: calc(100vh - 64px - 64px);
  transition: margin-left 0.2s;
  
  @media (max-width: 992px) {
    margin-left: 0;
  }
`;

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <StyledLayout>
      <Layout>
        <Sidebar 
          categories={categories} 
          collapsed={collapsed} 
          onCollapse={setCollapsed} 
        />
        <StyledContent $sidebarCollapsed={collapsed}>
          <Outlet />
        </StyledContent>
      </Layout>
      <Footer />
    </StyledLayout>
  );
};

export default MainLayout;