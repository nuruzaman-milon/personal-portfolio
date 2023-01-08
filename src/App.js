import './App.css';
import { useContext, useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeContext } from './components/contexts/ThemeProvider';
import { router } from './components/routes/Routes';
import Navbar from './components/navbar/Navbar';



function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div data-theme={theme ? "light" : "dark"}>
      <div className='w-[88%] mx-auto'>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
