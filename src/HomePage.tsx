import React from 'react';
import './App.css'; // Assuming you have an App.css file for styling

import { MantineProvider } from '@mantine/core';

import '@mantine/core/styles.layer.css';
import 'mantine-datatable/styles.layer.css';
import Equipment from './Components/DataTables/Equipment/Equipment.tsx';
import Navbar from './Components/navigation/Navbar.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Define the functional component using React.FC type for type safety
const HomePage: React.FC = () => {
  return (
    <p>Home Page</p>
  );
};

export default HomePage;