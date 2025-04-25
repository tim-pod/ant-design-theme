import { useState } from 'react';
import { Menu } from 'antd';
import { 
  HomeOutlined, 
  UserOutlined, 
  SettingOutlined,
  PushpinOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import styled from 'styled-components';
import colors from '../../theme/colors';
import logo from '../../assets/logo2.svg';

type MenuItem = Required<MenuProps>['items'][number];

// Add proper typing for the styled components
interface ContainerProps {
  $isPinned: boolean;  // Use $ prefix to avoid DOM attribute warning
}

interface PinButtonProps {
  $isPinned: boolean;
  $isVisible: boolean;
}

interface LogoContainerProps {
  $isExpanded: boolean;
}

const SidebarContainer = styled.div<ContainerProps>`
  position: relative;
  width: ${props => props.$isPinned ? '224px' : '80px'};
  transition: width 0.2s;

  &:hover {
    width: 224px;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  height: 48px;
  background: ${colors.primary.white};
`;

const LogoContainer = styled.div<LogoContainerProps>`
  display: flex;
  align-items: center;
  gap: 12px;
  
  img {
    height: 24px;
    width: auto;
    transition: transform 0.2s;
    transform: ${props => props.$isExpanded ? 'rotate(0deg)' : 'rotate(90deg)'};
    margin-left: 15px;
  }
`;

const LogoText = styled.div<{ $isExpanded: boolean }>`
  opacity: ${props => props.$isExpanded ? 1 : 0};
  transition: opacity 0.2s;
  white-space: nowrap;
  
  .title {
    font-size: 14px;
    line-height: 1.2;
  }
  
  .subtitle {
    font-size: 16px;
    font-weight: bold;
    line-height: 1.2;
  }
`;

const PinButton = styled.div<PinButtonProps>`
  cursor: pointer;
  color: ${props => props.$isPinned ? colors.primary.red : colors.neutrals[500]};
  opacity: ${props => props.$isVisible ? 1 : 0};
  transition: opacity 0.2s;
  
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
    { type: 'divider' },  // Replace Documents with a divider
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
      <SidebarHeader>
        <LogoContainer $isExpanded={shouldExpand}>
          <img src={logo} alt="Logo" />
          <LogoText $isExpanded={shouldExpand}>
            <div className="title">8Pod</div>
            <div className="subtitle">Console</div>
          </LogoText>
        </LogoContainer>
        <PinButton 
          onClick={() => setIsPinned(!isPinned)}
          $isPinned={isPinned}
          $isVisible={shouldExpand}
        >
          <PushpinOutlined />
        </PinButton>
      </SidebarHeader>
      
      <Menu
        mode="inline"
        theme="light"
        inlineCollapsed={!shouldExpand}
        style={{ 
          height: 'calc(100% - 48px)',  // Adjust for header height
          borderRight: 0,
          background: colors.primary.white
        }}
        items={items}
      />
    </SidebarContainer>
  );
};

export default SidebarContent; 