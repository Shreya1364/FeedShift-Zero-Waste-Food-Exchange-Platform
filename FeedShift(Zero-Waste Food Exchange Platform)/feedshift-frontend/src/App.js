import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DonateFood from './components/DonateFood';
import ViewNGOs from './components/ViewNGOs';
import DonateMoney from './components/DonateMoney';
import DonorHistory from './components/DonorHistory';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate-food" element={<DonateFood />} />
        <Route path="/view-ngos" element={<ViewNGOs />} />
        <Route path="/donate-money" element={<DonateMoney />} />
        <Route path="/donor-history" element={<DonorHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

