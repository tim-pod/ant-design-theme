import React from 'react';
import { Card, Typography, Tooltip, Space } from 'antd';
import styled from 'styled-components';
import { CopyOutlined } from '@ant-design/icons';
import colors from '../../theme/colors';

const { Text, Title } = Typography;

type ColorSwatch = {
  name: string;
  value: string;
  textColor?: string;
};

type ColorCardProps = {
  title: string;
  colors: ColorSwatch[];
};

const SwatchContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 16px;
  margin-top: 16px;
`;

const Swatch = styled.div<{ $bg: string; $textColor?: string }>`
  background-color: ${(props) => props.$bg};
  color: ${(props) => props.$textColor || '#000'};
  height: 100px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 12px;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  
  &:hover {
    transform: translateY(-4px);
    
    .copy-icon {
      opacity: 1;
    }
  }
  
  .copy-icon {
    position: absolute;
    top: 8px;
    right: 8px;
    opacity: 0;
    transition: opacity 0.2s;
  }
`;

const ColorName = styled(Text)`
  font-weight: 500;
  margin-bottom: 4px;
`;

const ColorValue = styled(Text)`
  font-family: monospace;
  font-size: 12px;
`;

const StyledCard = styled(Card)`
  border-radius: 8px;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid ${colors.neutrals[300]};
`;

const ColorCard: React.FC<ColorCardProps> = ({ title, colors }) => {
  const handleCopy = (colorValue: string) => {
    navigator.clipboard.writeText(colorValue);
  };
  
  const getContrastColor = (hexColor: string) => {
    // Convert hex to RGB
    const r = parseInt(hexColor.substring(1, 3), 16);
    const g = parseInt(hexColor.substring(3, 5), 16);
    const b = parseInt(hexColor.substring(5, 7), 16);
    
    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    return luminance > 0.5 ? '#000000' : '#FFFFFF';
  };
  
  return (
    <StyledCard title={title}>
      <SwatchContainer>
        {colors.map((color) => {
          const textColor = color.textColor || getContrastColor(color.value);
          
          return (
            <Tooltip title={`Click to copy: ${color.value}`} key={color.name}>
              <Swatch 
                $bg={color.value} 
                $textColor={textColor}
                onClick={() => handleCopy(color.value)}
              >
                <CopyOutlined className="copy-icon" style={{ color: textColor }} />
                <Space direction="vertical" size={0}>
                  <ColorName style={{ color: textColor }}>{color.name}</ColorName>
                  <ColorValue style={{ color: textColor }}>{color.value}</ColorValue>
                </Space>
              </Swatch>
            </Tooltip>
          );
        })}
      </SwatchContainer>
    </StyledCard>
  );
};

export default ColorCard;