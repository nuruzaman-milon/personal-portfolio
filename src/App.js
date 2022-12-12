import './App.css';
import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeContext } from './components/contexts/ThemeProvider';
import { router } from './components/routes/Routes';



function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div data-theme={theme ? "dark" : ''} >
      <div className='w-[88%] mx-auto'>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
