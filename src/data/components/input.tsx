import React from 'react';
import { Input, Space, Divider } from 'antd';
import { UserOutlined, LockOutlined, SearchOutlined, InfoCircleOutlined } from '@ant-design/icons';
import ComponentCard from '../../components/common/ComponentCard';
import PropertyTable from '../../components/common/PropertyTable';

const { TextArea, Password } = Input;

const InputContent = () => {
  const basicInputSnippet = {
    name: 'Basic Example',
    code: `import { Input } from 'antd';

const App = () => (
  <Input placeholder="Basic input" />
);

export default App;`,
  };

  const sizeInputSnippet = {
    name: 'Size Example',
    code: `import { Input } from 'antd';

const App = () => (
  <>
    <Input size="large" placeholder="Large input" />
    <Input placeholder="Default input" />
    <Input size="small" placeholder="Small input" />
  </>
);

export default App;`,
  };

  const iconInputSnippet = {
    name: 'Icon Example',
    code: `import { Input } from 'antd';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';

const App = () => (
  <>
    <Input prefix={<UserOutlined />} placeholder="Enter username" />
    <Input suffix={<SearchOutlined />} placeholder="Search" />
  </>
);

export default App;`,
  };

  const textareaSnippet = {
    name: 'TextArea Example',
    code: `import { Input } from 'antd';

const { TextArea } = Input;

const App = () => (
  <TextArea rows={4} placeholder="Enter comments here" />
);

export default App;`,
  };

  const passwordSnippet = {
    name: 'Password Example',
    code: `import { Input } from 'antd';

const { Password } = Input;

const App = () => (
  <Password placeholder="Enter password" />
);

export default App;`,
  };

  const inputProperties = [
    {
      name: 'addonAfter',
      description: 'The label text displayed after the input field',
      type: 'ReactNode',
    },
    {
      name: 'addonBefore',
      description: 'The label text displayed before the input field',
      type: 'ReactNode',
    },
    {
      name: 'defaultValue',
      description: 'The initial value of the input',
      type: 'string',
    },
    {
      name: 'disabled',
      description: 'Whether the input is disabled',
      type: 'boolean',
      default: 'false',
    },
    {
      name: 'id',
      description: 'The ID for input',
      type: 'string',
    },
    {
      name: 'maxLength',
      description: 'The maximum number of characters in the input',
      type: 'number',
    },
    {
      name: 'prefix',
      description: 'The prefix icon for the input',
      type: 'ReactNode',
    },
    {
      name: 'size',
      description: 'The size of the input box',
      type: "'large' | 'middle' | 'small'",
      default: 'middle',
    },
    {
      name: 'suffix',
      description: 'The suffix icon for the input',
      type: 'ReactNode',
    },
    {
      name: 'type',
      description: 'The type of input',
      type: 'string',
      default: 'text',
    },
    {
      name: 'value',
      description: 'The current value of the input',
      type: 'string',
    },
    {
      name: 'onChange',
      description: 'Callback when the content changes',
      type: 'function(e)',
    },
    {
      name: 'onPressEnter',
      description: 'Callback when the Enter key is pressed',
      type: 'function(e)',
    },
  ];

  const textAreaProperties = [
    {
      name: 'autoSize',
      description: 'Height autosize feature',
      type: 'boolean | { minRows: number, maxRows: number }',
      default: 'false',
    },
    {
      name: 'defaultValue',
      description: 'Initial value',
      type: 'string',
    },
    {
      name: 'rows',
      description: 'Number of rows',
      type: 'number',
      default: '4',
    },
    {
      name: 'value',
      description: 'Current value',
      type: 'string',
    },
    {
      name: 'onPressEnter',
      description: 'Callback when the Enter key is pressed',
      type: 'function(e)',
    },
    {
      name: 'onChange',
      description: 'Callback when the content changes',
      type: 'function(e)',
    },
  ];

  return (
    <>
      <ComponentCard
        title="Basic Input"
        description="Basic usage of Input component."
        snippets={[basicInputSnippet]}
      >
        <Input placeholder="Basic input" style={{ width: '300px' }} />
      </ComponentCard>

      <ComponentCard
        title="Input Sizes"
        description="There are three sizes of Input: large, default, and small."
        snippets={[sizeInputSnippet]}
      >
        <Space direction="vertical" size="middle" style={{ width: '300px' }}>
          <Input size="large" placeholder="Large input" />
          <Input placeholder="Default input" />
          <Input size="small" placeholder="Small input" />
        </Space>
      </ComponentCard>

      <ComponentCard
        title="Input with Icon"
        description="Input with icon at the beginning or the end of the field."
        snippets={[iconInputSnippet]}
      >
        <Space direction="vertical" size="middle" style={{ width: '300px' }}>
          <Input 
            prefix={<UserOutlined />} 
            placeholder="Enter username" 
          />
          <Input 
            suffix={<SearchOutlined />} 
            placeholder="Search" 
          />
          <Input 
            prefix={<UserOutlined />} 
            suffix={
              <Tooltip title="Extra information">
                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
              </Tooltip>
            }
            placeholder="Enter with tooltip" 
          />
        </Space>
      </ComponentCard>

      <ComponentCard
        title="TextArea"
        description="For multi-line input."
        snippets={[textareaSnippet]}
      >
        <TextArea rows={4} placeholder="Enter comments here" style={{ width: '300px' }} />
      </ComponentCard>

      <ComponentCard
        title="Password Input"
        description="Input component for password entry with visibility toggle."
        snippets={[passwordSnippet]}
      >
        <Space direction="vertical" size="middle" style={{ width: '300px' }}>
          <Password 
            placeholder="Enter password" 
            prefix={<LockOutlined />}
          />
        </Space>
      </ComponentCard>

      <Divider orientation="left">Input API</Divider>
      <PropertyTable properties={inputProperties} />

      <Divider orientation="left">TextArea API</Divider>
      <PropertyTable properties={textAreaProperties} />
    </>
  );
};

export default InputContent;