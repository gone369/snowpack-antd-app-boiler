import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';

export default function RouteMap() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}
