import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';

// https://github.com/ReactTraining/react-router/blob/dev/docs/installation/getting-started.md
// https://github.com/ReactTraining/react-router/blob/dev/docs/advanced-guides/migrating-5-to-6.md#use-navigate-instead-of-history

export default function RouteMap() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Navigate to="/home" replace />
      </Routes>
    </BrowserRouter>
  );
}
