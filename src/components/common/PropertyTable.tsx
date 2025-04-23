import React from 'react';
import { Table, Typography } from 'antd';
import styled from 'styled-components';
import colors from '../../theme/colors';

const { Text } = Typography;

type Property = {
  name: string;
  description: string;
  type: string;
  default?: string;
  required?: boolean;
};

type PropertyTableProps = {
  properties: Property[];
};

const StyledTable = styled(Table)`
  margin-top: 24px;
  margin-bottom: 32px;
  
  .ant-table {
    background-color: ${colors.primary.white};
  }
  
  .property-name {
    font-family: monospace;
    background-color: ${colors.neutrals[200]};
    padding: 2px 6px;
    border-radius: 4px;
    display: inline-block;
  }
  
  .property-type {
    color: ${colors.secondaryWarm.red};
    font-family: monospace;
    font-size: 13px;
  }
  
  .property-required {
    background-color: ${colors.red[100]};
    color: ${colors.primary.red};
    padding: 1px 6px;
    border-radius: 4px;
    font-size: 12px;
    margin-left: 8px;
  }
`;

const PropertyTable: React.FC<PropertyTableProps> = ({ properties }) => {
  const columns = [
    {
      title: 'Property',
      dataIndex: 'name',
      key: 'name',
      width: '20%',
      render: (text: string, record: Property) => (
        <div>
          <Text className="property-name">{text}</Text>
          {record.required && <span className="property-required">Required</span>}
        </div>
      ),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      width: '40%',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      width: '25%',
      render: (text: string) => <span className="property-type">{text}</span>,
    },
    {
      title: 'Default',
      dataIndex: 'default',
      key: 'default',
      width: '15%',
      render: (text: string) => text || '-',
    },
  ];

  return (
    <StyledTable
      columns={columns}
      dataSource={properties.map((prop, index) => ({ ...prop, key: index }))}
      pagination={false}
      size="middle"
    />
  );
};

export default PropertyTable;