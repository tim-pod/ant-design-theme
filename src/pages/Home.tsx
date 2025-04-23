import React from 'react';
import { Typography, Card, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { 
  LayoutOutlined, 
  AppstoreOutlined, 
  FormatPainterOutlined, 
  SlidersOutlined, 
} from '@ant-design/icons';
import colors from '../theme/colors';

const { Title, Paragraph } = Typography;

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
        {/* <Space size="middle">
          <Link to="/general/button">
            <Button type="primary" size="large" icon={<PlusOutlined />}>
              Explore Components
            </Button>
          </Link>
          <Link to="/colors/primary">
            <Button size="large">View Color System</Button>
          </Link>
        </Space> */}
      </HeroSection>
      
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12} lg={6}>
          <CategoryCard>
            <LayoutOutlined className="category-icon" />
            <Title level={4}>Layout</Title>
            <Paragraph>Build the overall structure of pages including headers, footers, and navigation.</Paragraph>
            <Link to="/layout/grid" style={{ marginTop: 'auto' }}>
              <Button disabled type="link" style={{ paddingLeft: 0 }}>
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
    </>
  );
};

export default Home;