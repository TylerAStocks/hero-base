import React from 'react';
import './App.css'; // Assuming you have an App.css file for styling

import { MantineProvider } from '@mantine/core';

import '@mantine/core/styles.layer.css';
import 'mantine-datatable/styles.layer.css';
import Navbar from './Components/navigation/Navbar.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage.tsx';
import Combat from './Routes/Combat/Combat.tsx';
import Footer from './Components/Footer.tsx';
import Powers from './Routes/Powers/Powers.tsx';
import Equipment from './Routes/Equipment/Equipment.tsx';
import PointCalculator from './Routes/PointCalculator/PointCalculator.tsx';
import PerksAndFlaws from './Routes/PerksAndFlaws/PerksAndFlaws.tsx';

// Define the functional component using React.FC type for type safety
const App: React.FC = () => {
  return (
    <BrowserRouter>
        <div className="App">
      <header className="App-header">
        <MantineProvider defaultColorScheme="auto">
          <h1 style={{marginTop: '50px'}}>Welcome to The Herobase</h1>
          <Navbar />



            <Routes>
            <Route path="/*" element={<App/>} />
            <Route path="/" element={<HomePage />} />
            <Route path="/combat" element={<Combat />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/powers" element={<Powers />} />
            <Route path="/pointCalculator" element={<PointCalculator />} />
            <Route path="/perksAndFlaws" element={<PerksAndFlaws />} />
          </Routes>
          <Footer />
        </MantineProvider>
      </header>
    </div>
    </BrowserRouter>

  );
};

export default App;