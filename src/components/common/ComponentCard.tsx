import React, { ReactNode } from 'react';
import { Card, Typography, Divider, Collapse } from 'antd';
import styled from 'styled-components';
import CodeBlock from './CodeBlock';
import { CodeSnippet } from '../../types';
import colors from '../../theme/colors';

const { Title, Paragraph } = Typography;

type ComponentCardProps = {
  title: string;
  description?: string;
  children: ReactNode;
  snippets?: CodeSnippet[];
};

const StyledCard = styled(Card)`
  border-radius: 8px;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid ${colors.neutrals[300]};
  
  .ant-card-head {
    border-bottom: 1px solid ${colors.neutrals[300]};
  }
`;

const Preview = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 160px;
  background-color: ${colors.neutrals[200]};
  border-radius: 4px;
  margin-bottom: 24px;
`;

const StyledCollapse = styled(Collapse)`
  background: transparent;
  border: none;

  .ant-collapse-item {
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid ${colors.neutrals[300]};
    margin-bottom: 16px;
  }

  .ant-collapse-header {
    background: ${colors.neutrals[100]};
    padding: 12px 16px !important;
    
    .ant-collapse-expand-icon {
      color: ${colors.primary.red};
    }
  }

  .ant-collapse-content {
    border-top: 1px solid ${colors.neutrals[300]};
    background: ${colors.primary.white};
  }
`;

const ComponentCard: React.FC<ComponentCardProps> = ({
  title,
  description,
  children,
  snippets,
}) => {
  return (
    <StyledCard title={title}>
      {description && (
        <>
          <Paragraph>{description}</Paragraph>
          <Divider />
        </>
      )}
      <Preview>{children}</Preview>
      {snippets && (
        <StyledCollapse>
          <Collapse.Panel header="View Code" key="1">
            <CodeBlock snippets={snippets} />
          </Collapse.Panel>
        </StyledCollapse>
      )}
    </StyledCard>
  );
};

export default ComponentCard;