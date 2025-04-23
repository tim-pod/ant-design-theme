import React from 'react';
import { useParams } from 'react-router-dom';
import { Result } from 'antd';
import components from '../data/components';
import PageHeader from '../components/common/PageHeader';
import { ArrowLeftOutlined } from '@ant-design/icons';
import BackButton from '../components/common/BackButton';

const ComponentPage: React.FC = () => {
  const { category, component } = useParams<{ category: string; component: string }>();
  
  // Find the component data
  const componentData = components.find(
    (c) => c.category === category && c.key === component
  );
  
  if (!componentData) {
    return (
      <>
      <BackButton />
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the component you visited does not exist."
      />
      </>
    );
  }
  
  const { title, description, guidelines, content } = componentData;
  
  return (
    <div>
      <PageHeader title={title} description={description} guidelines={guidelines} />
      {content}
    </div>
  );
};

export default ComponentPage;