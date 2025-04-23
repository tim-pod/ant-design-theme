import React from 'react';
import { Button, Space, Divider } from 'antd';
import ComponentCard from '../../components/common/ComponentCard';
import PropertyTable from '../../components/common/PropertyTable';

const ButtonsContent = () => {
  const basicButtonSnippet = {
    name: 'Basic Example',
    code: `import { Button } from 'antd';

const App = () => (
  <>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </>
);

export default App;`,
  };

  const sizeButtonSnippet = {
    name: 'Size Example',
    code: `import { Button } from 'antd';

const App = () => (
  <Space direction="vertical">
    <Space>
      <Button type="primary" size="large">Large Button</Button>
      <Button size="large">Large Default</Button>
    </Space>
    <Space>
      <Button type="primary">Default Button</Button>
      <Button>Default</Button>
    </Space>
    <Space>
      <Button type="primary" size="small">Small Button</Button>
      <Button size="small">Small Default</Button>
    </Space>
  </Space>
);

export default App;`,
  };

  const disabledButtonSnippet = {
    name: 'Disabled Example',
    code: `import { Button } from 'antd';

const App = () => (
  <Space>
    <Button type="primary" disabled>Primary (Disabled)</Button>
    <Button disabled>Default (Disabled)</Button>
    <Button type="dashed" disabled>Dashed (Disabled)</Button>
    <Button type="text" disabled>Text (Disabled)</Button>
    <Button type="link" disabled>Link (Disabled)</Button>
  </Space>
);

export default App;`,
  };

  const loadingButtonSnippet = {
    name: 'Loading Example',
    code: `import { Button } from 'antd';
import { useState } from 'react';

const App = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Space>
      <Button type="primary" loading>Loading</Button>
      <Button type="primary" loading={loading} onClick={handleClick}>
        Click to load
      </Button>
    </Space>
  );
};

export default App;`,
  };

  const buttonProperties = [
    {
      name: 'type',
      description: 'Button type',
      type: "'primary' | 'default' | 'dashed' | 'text' | 'link'",
      default: 'default',
    },
    {
      name: 'size',
      description: 'Button size',
      type: "'large' | 'middle' | 'small'",
      default: 'middle',
    },
    {
      name: 'disabled',
      description: 'Disabled state of button',
      type: 'boolean',
      default: 'false',
    },
    {
      name: 'loading',
      description: 'Set the loading status of button',
      type: 'boolean | { delay: number }',
      default: 'false',
    },
    {
      name: 'icon',
      description: 'Set the icon component of button',
      type: 'ReactNode',
    },
    {
      name: 'danger',
      description: 'Set the danger status of button',
      type: 'boolean',
      default: 'false',
    },
    {
      name: 'onClick',
      description: 'Callback when button is clicked',
      type: '(event: MouseEvent) => void',
    },
  ];

  return (
    <>
      <ComponentCard title="Button Types" snippets={[basicButtonSnippet]}>
        <Space>
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </Space>
      </ComponentCard>

      <ComponentCard title="Button Sizes" snippets={[sizeButtonSnippet]}>
        <Space direction="vertical">
          <Space>
            <Button type="primary" size="large">Large Button</Button>
            <Button size="large">Large Default</Button>
          </Space>
          <Space>
            <Button type="primary">Default Button</Button>
            <Button>Default</Button>
          </Space>
          <Space>
            <Button type="primary" size="small">Small Button</Button>
            <Button size="small">Small Default</Button>
          </Space>
        </Space>
      </ComponentCard>

      <ComponentCard title="Disabled Buttons" snippets={[disabledButtonSnippet]}>
        <Space>
          <Button type="primary" disabled>Primary (Disabled)</Button>
          <Button disabled>Default (Disabled)</Button>
          <Button type="dashed" disabled>Dashed (Disabled)</Button>
          <Button type="text" disabled>Text (Disabled)</Button>
          <Button type="link" disabled>Link (Disabled)</Button>
        </Space>
      </ComponentCard>

      <ComponentCard title="Loading Buttons" snippets={[loadingButtonSnippet]}>
        <Space>
          <Button type="primary" loading>Loading</Button>
          <Button type="primary" loading={false}>Click to load</Button>
        </Space>
      </ComponentCard>

      <Divider orientation="left">API</Divider>
      <PropertyTable properties={buttonProperties} />
    </>
  );
};

export default ButtonsContent;