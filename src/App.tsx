import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ThemeProvider from './theme/ThemeProvider';
import { AuthProvider } from './context/Auth';
import { OrgProvider } from './context/Auth/OrganisationContext';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import ComponentPage from './pages/ComponentPage';
import ColorPage from './pages/ColorPage';
import 'normalize.css';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <OrgProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path=":category/:component" element={<ComponentPage />} />
                <Route path="colors/:type" element={<ColorPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </OrgProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;