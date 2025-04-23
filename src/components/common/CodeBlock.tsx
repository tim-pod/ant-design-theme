import React, { useState, useEffect } from 'react';
import { Card, Tabs, Button, message } from 'antd';
import { CopyOutlined, CheckOutlined } from '@ant-design/icons';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomOneDark from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark';
import styled from 'styled-components';
import { CodeSnippet } from '../../types';
import colors from '../../theme/colors';

type CodeBlockProps = {
  snippets: CodeSnippet[];
};

const StyledCard = styled(Card)`
  margin-top: 16px;
  margin-bottom: 24px;
  border-radius: 8px;
  
  .ant-card-body {
    padding: 0;
  }
  
  pre {
    margin: 0 !important;
    border-radius: 0 0 8px 8px !important;
  }
`;

const CodeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background-color: ${colors.neutrals[800]};
  border-radius: 8px 8px 0 0;
  border-bottom: 1px solid ${colors.neutrals[700]};
`;

const TabContent = styled.div`
  position: relative;
`;

const CopyButton = styled(Button)`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 10;
  opacity: 0.7;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 1;
  }
`;

const CodeBlock: React.FC<CodeBlockProps> = ({ snippets }) => {
  const [copied, setCopied] = useState(false);
  
  useEffect(() => {
    import('react-syntax-highlighter/dist/esm/languages/prism/tsx').then((mod) => 
      SyntaxHighlighter.registerLanguage('tsx', mod.default)
    );
  }, []);
  
  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    message.success('Code copied to clipboard');
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  
  const items = snippets.map((snippet) => ({
    key: snippet.name,
    label: snippet.name,
    children: (
      <TabContent>
        <CopyButton 
          type="text" 
          icon={copied ? <CheckOutlined /> : <CopyOutlined />} 
          onClick={() => handleCopy(snippet.code)}
          size="small"
        />
        <SyntaxHighlighter
          language="tsx"
          style={atomOneDark}
          customStyle={{ padding: '16px' }}
          showLineNumbers
        >
          {snippet.code}
        </SyntaxHighlighter>
      </TabContent>
    ),
  }));
  
  return (
    <StyledCard>
      <CodeHeader>
        <span style={{ color: colors.primary.white, fontWeight: 500 }}>Example Code</span>
      </CodeHeader>
      <Tabs 
        items={items} 
        type="card" 
        size="small"
        style={{ 
          background: colors.neutrals[800], 
          padding: '0 16px', 
          paddingTop: '8px',
          marginBottom: 0 
        }}
      />
    </StyledCard>
  );
};

export default CodeBlock;