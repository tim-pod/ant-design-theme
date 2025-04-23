import React from 'react';
import { useParams } from 'react-router-dom';
import { Result } from 'antd';
import colorData from '../data/colors';
import PageHeader from '../components/common/PageHeader';

const ColorPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  
  // Find the color data
  const colorPageData = colorData.find((c) => c.key === type);
  
  if (!colorPageData) {
    return (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the color page you visited does not exist."
      />
    );
  }
  
  const { title, description, content } = colorPageData;
  
  return (
    <div>
      <PageHeader title={title} description={description} />
      {content}
    </div>
  );
};

export default ColorPage;