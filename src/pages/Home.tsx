import React from 'react';
import { Typography, Card, Row, Col, Space, Button } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { 
  LayoutOutlined, 
  AppstoreOutlined, 
  FormatPainterOutlined, 
  SlidersOutlined, 
  PlusOutlined 
} from '@ant-design/icons';
import colors from '../theme/colors';

const { Title, Paragraph, Text } = Typography;

const HeroSection = styled.div`
  text-align: center;
  padding: 48px 0;
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled(Title)`
  font-size: 48px !important;
  margin-bottom: 24px !important;
  
  span {
    color: ${colors.primary.red};
  }
`;

const CategoryCard = styled(Card)`
  height: 100%;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }
  
  .ant-card-body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .category-icon {
    font-size: 32px;
    margin-bottom: 16px;
    color: ${colors.primary.red};
  }
`;

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 16px;
  margin-top: 32px;
`;

const ColorSwatch = styled.div<{ $bg: string }>`
  background-color: ${(props) => props.$bg};
  height: 80px;
  width: 80px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

const Home: React.FC = () => {
  return (
    <>
      <HeroSection>
        <HeroTitle>
          Design System with <span>Ant Design</span>
        </HeroTitle>
        <Paragraph style={{ fontSize: '18px', marginBottom: '32px' }}>
          A comprehensive, customizable design system powered by Ant Design. This living style guide provides a collection of components, patterns, and guidelines to create consistent and beautiful user interfaces.
        </Paragraph>
        <Space size="middle">
          <Link to="/general/button">
            <Button type="primary" size="large" icon={<PlusOutlined />}>
              Explore Components
            </Button>
          </Link>
          <Link to="/colors/primary">
            <Button size="large">View Color System</Button>
          </Link>
        </Space>
      </HeroSection>
      
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12} lg={6}>
          <CategoryCard>
            <LayoutOutlined className="category-icon" />
            <Title level={4}>Layout</Title>
            <Paragraph>Build the overall structure of pages including headers, footers, and navigation.</Paragraph>
            <Link to="/layout/grid" style={{ marginTop: 'auto' }}>
              <Button type="link" style={{ paddingLeft: 0 }}>
                Explore Layout
              </Button>
            </Link>
          </CategoryCard>
        </Col>
        
        <Col xs={24} sm={12} lg={6}>
          <CategoryCard>
            <AppstoreOutlined className="category-icon" />
            <Title level={4}>Components</Title>
            <Paragraph>Discover UI components for forms, data display, navigation, and more.</Paragraph>
            <Link to="/general/button" style={{ marginTop: 'auto' }}>
              <Button type="link" style={{ paddingLeft: 0 }}>
                View Components
              </Button>
            </Link>
          </CategoryCard>
        </Col>
        
        <Col xs={24} sm={12} lg={6}>
          <CategoryCard>
            <FormatPainterOutlined className="category-icon" />
            <Title level={4}>Colors</Title>
            <Paragraph>Explore our color system including primary, secondary, and neutral palettes.</Paragraph>
            <Link to="/colors/primary" style={{ marginTop: 'auto' }}>
              <Button type="link" style={{ paddingLeft: 0 }}>
                Browse Colors
              </Button>
            </Link>
          </CategoryCard>
        </Col>
        
        <Col xs={24} sm={12} lg={6}>
          <CategoryCard>
            <SlidersOutlined className="category-icon" />
            <Title level={4}>Typography</Title>
            <Paragraph>Typography styles for headings, body text, and other text elements.</Paragraph>
            <Link to="/general/typography" style={{ marginTop: 'auto' }}>
              <Button type="link" style={{ paddingLeft: 0 }}>
                Explore Typography
              </Button>
            </Link>
          </CategoryCard>
        </Col>
      </Row>
      
      <Card title="Color System" style={{ marginTop: '48px' }}>
        <Paragraph>Our color system includes primary colors, warm and cool secondary colors, and neutrals.</Paragraph>
        
        <Title level={5} style={{ marginTop: '24px' }}>Primary Colors</Title>
        <ColorGrid>
          <ColorSwatch $bg={colors.primary.red} />
          <ColorSwatch $bg={colors.primary.black} />
          <ColorSwatch $bg={colors.primary.white} style={{ border: `1px solid ${colors.neutrals[300]}` }} />
        </ColorGrid>
        
        <Title level={5} style={{ marginTop: '24px' }}>Secondary Colors</Title>
        <ColorGrid>
          <ColorSwatch $bg={colors.secondaryWarm.red} />
          <ColorSwatch $bg={colors.secondaryWarm.orange} />
          <ColorSwatch $bg={colors.secondaryWarm.yellow} />
          <ColorSwatch $bg={colors.secondaryCool.navy} />
          <ColorSwatch $bg={colors.secondaryCool.blue} />
          <ColorSwatch $bg={colors.secondaryCool.turquoise} />
        </ColorGrid>
        
        <Text style={{ display: 'block', marginTop: '32px' }}>
          <Link to="/colors/primary">View full color system →</Link>
        </Text>
      </Card>
    </>
  );
};

export default Home;