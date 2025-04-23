import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowLeftOutlined } from '@ant-design/icons';
import colors from '../../theme/colors';

const StyledBackButton = styled(Button)`
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    color: ${colors.primary.red};
    border-color: ${colors.primary.red};
  }
  
  .anticon {
    font-size: 16px;
  }
`;

interface BackButtonProps {
  to?: string;
  children?: React.ReactNode;
}

const BackButton: React.FC<BackButtonProps> = ({ to = "/", children = "Back to Home" }) => {
  return (
    <Link to={to}>
      <StyledBackButton icon={<ArrowLeftOutlined />}>
        {children}
      </StyledBackButton>
    </Link>
  );
};

export default BackButton; 