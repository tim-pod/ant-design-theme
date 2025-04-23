import React from 'react';
import { Typography, Space, Divider, Button } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowLeftOutlined } from '@ant-design/icons';
import colors from '../../theme/colors';
import BackButton from './BackButton';

const { Title, Paragraph } = Typography;

type PageHeaderProps = {
  title: string;
  description?: string;
  guidelines?: string[];
};

const HeaderContainer = styled.div`
  margin-bottom: 24px;
`;

const StyledTitle = styled(Title)`
  margin-bottom: 16px !important;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 48px;
    height: 4px;
    background-color: ${colors.primary.red};
    border-radius: 2px;
  }
`;

const GuidelinesList = styled.ul`
  padding-left: 20px;
  margin-top: 16px;
  
  li {
    margin-bottom: 8px;
  }
`;

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, guidelines }) => {
  return (
    <HeaderContainer>
      <BackButton />
      
      <StyledTitle level={2}>{title}</StyledTitle>
      
      {description && (
        <Paragraph style={{ fontSize: '16px', maxWidth: '800px' }}>
          {description}
        </Paragraph>
      )}
      
      {guidelines && guidelines.length > 0 && (
        <>
          <Divider orientation="left">Usage Guidelines</Divider>
          <GuidelinesList>
            {guidelines.map((guideline, index) => (
              <li key={index}>{guideline}</li>
            ))}
          </GuidelinesList>
        </>
      )}
    </HeaderContainer>
  );
};

export default PageHeader;