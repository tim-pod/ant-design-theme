import { useState } from 'react';
import { Menu } from 'antd';
import { 
  HomeOutlined, 
  UserOutlined, 
  SettingOutlined,
  FileOutlined,
  PushpinOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import styled from 'styled-components';
import colors from '../../theme/colors';

type MenuItem = Required<MenuProps>['items'][number];

// Add proper typing for the styled components
interface ContainerProps {
  $isPinned: boolean;  // Use $ prefix to avoid DOM attribute warning
}

interface PinButtonProps {
  $isPinned: boolean;
  $isVisible: boolean;
}

const SidebarContainer = styled.div<ContainerProps>`
  position: relative;
  width: ${props => props.$isPinned ? '220px' : '80px'};
  transition: width 0.2s;

  &:hover {
    width: 220px;
  }
`;

const PinButton = styled.div<PinButtonProps>`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
  z-index: 1;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transition: opacity 0.2s;
  color: ${props => props.$isPinned ? colors.primary.red : colors.neutrals[500]};
  
  &:hover {
    color: ${colors.primary.red};
  }
`;

const SidebarContent = () => {
  return (
    <>
      <div style={{ background: '#f0f2f5', padding: '24px' }}>
        <CollapsibleSidebarDemo />
      </div>
    </>
  );
};

// Demo component with simplified content
const CollapsibleSidebarDemo = () => {
  const [isPinned, setIsPinned] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Determine if menu should be expanded
  const shouldExpand = isPinned || isHovered;

  const items: MenuItem[] = [
    { key: 'homer', icon: <HomeOutlined />, label: 'Homer' },
    { key: '2', icon: <UserOutlined />, label: 'Profile' },
    { key: '3', icon: <FileOutlined />, label: 'Documents' },
    {
      key: 'sub1',
      label: 'Settings',
      icon: <SettingOutlined />,
      children: [
        { key: '5', label: 'General' },
        { key: '6', label: 'Security' },
        { key: '7', label: 'Privacy' },
      ],
    },
  ];

  return (
    <SidebarContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      $isPinned={isPinned}
    >
      <PinButton 
        onClick={() => setIsPinned(!isPinned)}
        $isPinned={isPinned}
        $isVisible={shouldExpand}
      >
        <PushpinOutlined />
      </PinButton>
      
      <Menu
        mode="inline"
        theme="light"
        inlineCollapsed={!shouldExpand}
        style={{ 
          height: '100%',
          borderRight: 0,
          background: colors.primary.white
        }}
        items={items}
      />
    </SidebarContainer>
  );
};

export default SidebarContent; 