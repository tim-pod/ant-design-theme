import React from 'react';
import { ConfigProvider } from 'antd';
import themeAntd from './themeAntd';

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ConfigProvider theme={themeAntd}>
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;