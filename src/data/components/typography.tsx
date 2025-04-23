import React from 'react';
import { Typography, Space, Divider } from 'antd';
import ComponentCard from '../../components/common/ComponentCard';
import PropertyTable from '../../components/common/PropertyTable';

const { Title, Text, Paragraph, Link } = Typography;

const TypographyContent = () => {
  const titleSnippet = {
    name: 'Title Example',
    code: `import { Typography } from 'antd';

const { Title } = Typography;

const App = () => (
  <>
    <Title>h1. Ant Design</Title>
    <Title level={2}>h2. Ant Design</Title>
    <Title level={3}>h3. Ant Design</Title>
    <Title level={4}>h4. Ant Design</Title>
    <Title level={5}>h5. Ant Design</Title>
  </>
);

export default App;`,
  };

  const textSnippet = {
    name: 'Text Example',
    code: `import { Typography, Space } from 'antd';

const { Text } = Typography;

const App = () => (
  <Space direction="vertical">
    <Text>Default Text</Text>
    <Text type="secondary">Secondary Text</Text>
    <Text type="success">Success Text</Text>
    <Text type="warning">Warning Text</Text>
    <Text type="danger">Danger Text</Text>
    <Text disabled>Disabled Text</Text>
    <Text mark>Marked Text</Text>
    <Text code>Code Text</Text>
    <Text keyboard>Keyboard Text</Text>
    <Text underline>Underlined Text</Text>
    <Text delete>Deleted Text</Text>
    <Text strong>Strong Text</Text>
    <Text italic>Italic Text</Text>
  </Space>
);

export default App;`,
  };

  const paragraphSnippet = {
    name: 'Paragraph Example',
    code: `import { Typography } from 'antd';

const { Paragraph } = Typography;

const App = () => (
  <>
    <Paragraph>
      Ant Design, a design language for background applications, is refined by Ant UED Team.
      This is a basic example of the Typography Paragraph component.
    </Paragraph>
    <Paragraph>
      The second paragraph. Collaboratively administrate empowered markets via
      plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
    </Paragraph>
    <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
      This is a very long paragraph that will be truncated after two rows.
      Ant Design, a design language for background applications, is refined by Ant UED Team.
      Ant Design, a design language for background applications, is refined by Ant UED Team.
      Ant Design, a design language for background applications, is refined by Ant UED Team.
    </Paragraph>
    <Paragraph copyable>This paragraph can be copied.</Paragraph>
  </>
);

export default App;`,
  };

  const titleProperties = [
    {
      name: 'level',
      description: 'Heading level from 1 to 5',
      type: 'number: 1, 2, 3, 4, 5',
      default: '1',
    },
    {
      name: 'type',
      description: 'Content type',
      type: "'secondary' | 'success' | 'warning' | 'danger'",
      default: '-',
    },
    {
      name: 'copyable',
      description: 'Whether content can be copied',
      type: 'boolean | CopyConfig',
      default: 'false',
    },
    {
      name: 'ellipsis',
      description: 'Whether to handle text overflow',
      type: 'boolean | EllipsisConfig',
      default: 'false',
    },
  ];

  const textProperties = [
    {
      name: 'type',
      description: 'Content type',
      type: "'secondary' | 'success' | 'warning' | 'danger'",
      default: '-',
    },
    {
      name: 'code',
      description: 'Adds code style',
      type: 'boolean',
      default: 'false',
    },
    {
      name: 'delete',
      description: 'Adds deletion line style',
      type: 'boolean',
      default: 'false',
    },
    {
      name: 'disabled',
      description: 'Disabled content',
      type: 'boolean',
      default: 'false',
    },
    {
      name: 'ellipsis',
      description: 'Whether to handle text overflow',
      type: 'boolean | EllipsisConfig',
      default: 'false',
    },
    {
      name: 'keyboard',
      description: 'Keyboard style',
      type: 'boolean',
      default: 'false',
    },
    {
      name: 'mark',
      description: 'Marked style',
      type: 'boolean',
      default: 'false',
    },
    {
      name: 'strong',
      description: 'Bold style',
      type: 'boolean',
      default: 'false',
    },
    {
      name: 'underline',
      description: 'Underlined style',
      type: 'boolean',
      default: 'false',
    },
  ];

  const paragraphProperties = [
    {
      name: 'code',
      description: 'Adds code style',
      type: 'boolean',
      default: 'false',
    },
    {
      name: 'copyable',
      description: 'Whether content can be copied',
      type: 'boolean | CopyConfig',
      default: 'false',
    },
    {
      name: 'delete',
      description: 'Adds deletion line style',
      type: 'boolean',
      default: 'false',
    },
    {
      name: 'ellipsis',
      description: 'Whether to handle text overflow',
      type: 'boolean | EllipsisConfig',
      default: 'false',
    },
    {
      name: 'mark',
      description: 'Marked style',
      type: 'boolean',
      default: 'false',
    },
    {
      name: 'strong',
      description: 'Bold style',
      type: 'boolean',
      default: 'false',
    },
    {
      name: 'type',
      description: 'Content type',
      type: "'secondary' | 'success' | 'warning' | 'danger'",
      default: '-',
    },
    {
      name: 'underline',
      description: 'Underlined style',
      type: 'boolean',
      default: 'false',
    },
  ];

  return (
    <>
      <ComponentCard
        title="Title"
        description="Display different levels of headings."
        snippets={[titleSnippet]}
      >
        <Space direction="vertical" style={{ width: '100%' }}>
          <Title>h1. Ant Design</Title>
          <Title level={2}>h2. Ant Design</Title>
          <Title level={3}>h3. Ant Design</Title>
          <Title level={4}>h4. Ant Design</Title>
          <Title level={5}>h5. Ant Design</Title>
        </Space>
      </ComponentCard>

      <ComponentCard
        title="Text"
        description="Basic text writing with different styles."
        snippets={[textSnippet]}
      >
        <Space direction="vertical">
          <Text>Default Text</Text>
          <Text type="secondary">Secondary Text</Text>
          <Text type="success">Success Text</Text>
          <Text type="warning">Warning Text</Text>
          <Text type="danger">Danger Text</Text>
          <Text disabled>Disabled Text</Text>
          <Text mark>Marked Text</Text>
          <Text code>Code Text</Text>
          <Text keyboard>Keyboard Text</Text>
          <Text underline>Underlined Text</Text>
          <Text delete>Deleted Text</Text>
          <Text strong>Strong Text</Text>
          <Text italic>Italic Text</Text>
        </Space>
      </ComponentCard>

      <ComponentCard
        title="Paragraph"
        description="For longer texts, paragraphs, with optional copying and ellipsis."
        snippets={[paragraphSnippet]}
      >
        <Space direction="vertical" style={{ width: '100%' }}>
          <Paragraph>
            Ant Design, a design language for background applications, is refined by Ant UED Team.
            This is a basic example of the Typography Paragraph component.
          </Paragraph>
          <Paragraph>
            The second paragraph. Collaboratively administrate empowered markets via
            plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
          </Paragraph>
          <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
            This is a very long paragraph that will be truncated after two rows.
            Ant Design, a design language for background applications, is refined by Ant UED Team.
            Ant Design, a design language for background applications, is refined by Ant UED Team.
            Ant Design, a design language for background applications, is refined by Ant UED Team.
          </Paragraph>
          <Paragraph copyable>This paragraph can be copied.</Paragraph>
        </Space>
      </ComponentCard>

      <Divider orientation="left">Title API</Divider>
      <PropertyTable properties={titleProperties} />

      <Divider orientation="left">Text API</Divider>
      <PropertyTable properties={textProperties} />

      <Divider orientation="left">Paragraph API</Divider>
      <PropertyTable properties={paragraphProperties} />
    </>
  );
};

export default TypographyContent;