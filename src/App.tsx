import React, { useEffect, useState } from 'react';
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
import Login from './Routes/Login/Login.tsx';
import { UserContext } from './UserContext.tsx';
import axios from 'axios';

// Define the functional component using React.FC type for type safety
const App: React.FC = () => {

  const [user, setUser] = useState(null);



  useEffect(() => {
    if (!user) {
      axios.get('/users/me', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('userToken')?.replace(/['"]+/g, '')}`
        }
      })
      .then(function (response) {
          setUser({ token: localStorage.getItem('userToken')?.replace(/['"]+/g, ''), user: response.data })
      })
      .catch(function (error) {
          console.error(error)
      })
    }
  });


  console.log('USER: ', user)

  return (
    <BrowserRouter>
    <UserContext.Provider value={{ user, setUser }}>

      <div className="App">
        <header className="App-header">
          <MantineProvider defaultColorScheme="auto">

          {user ? (
            <>
            <h1 style={{marginTop: '50px'}}>Herobase</h1>
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
            </>
          ) : (
            <Login />
          )}


          </MantineProvider>
        </header>
      </div>


    </UserContext.Provider>
    </BrowserRouter>

  );
};

export default App;