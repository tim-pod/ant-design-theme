import React from 'react';
import { Layout, Typography } from 'antd';
import styled from 'styled-components';
import colors from '../../theme/colors';

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

const StyledFooter = styled(AntFooter)`
  text-align: center;
  height: 64px;
  padding: 24px;
  background-color: ${colors.primary.white};
  border-top: 1px solid ${colors.neutrals[300]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Text type="secondary">
        © {new Date().getFullYear()} Design System • Built with Ant Design • All Rights Reserved
      </Text>
    </StyledFooter>
  );
};

export default Footer;