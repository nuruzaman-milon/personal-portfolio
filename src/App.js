import './App.css';
import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeContext } from './components/contexts/ThemeProvider';
import { router } from './components/routes/Routes';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div data-theme={theme ? "light" : "dark"}>
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
