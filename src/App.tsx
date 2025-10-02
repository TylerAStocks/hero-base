import React from 'react';
import './App.css'; // Assuming you have an App.css file for styling

import { MantineProvider } from '@mantine/core';

import '@mantine/core/styles.layer.css';
import 'mantine-datatable/styles.layer.css';
import Equipment from './DataTables/Equipment/Equipment.tsx';
import Navbar from './navigation/Navbar.tsx';

// Define the functional component using React.FC type for type safety
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to The Herobase</h1>
        <p>Table of Rules</p>
        <Navbar />
        <MantineProvider defaultColorScheme="auto">
          <Equipment />
        </MantineProvider>
      </header>
    </div>
  );
};

export default App;