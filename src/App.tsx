import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ThemeProvider from './theme/ThemeProvider';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import ComponentPage from './pages/ComponentPage';
import ColorPage from './pages/ColorPage';
import 'normalize.css';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="general/*" element={<ComponentPage />} />
            <Route path="layout/*" element={<ComponentPage />} />
            <Route path="navigation/*" element={<ComponentPage />} />
            <Route path="data-entry/*" element={<ComponentPage />} />
            <Route path="data-display/*" element={<ComponentPage />} />
            <Route path="feedback/*" element={<ComponentPage />} />
            <Route path="colors/:type" element={<ColorPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;