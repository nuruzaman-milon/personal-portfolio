import { useContext } from 'react';
import './App.css';
// import { DarkThemeContext } from './components/Contexts/ThemeContext';
import { ThemeContext } from './components/contexts/ThemeProvider';


function App() {
  const {theme, setTheme} = useContext(ThemeContext);
  // console.log(data);
  return (
    <div data-theme={theme ? "dark" : ''} className="h-[100vh]">
        <h1>hello</h1>
        <button onClick={()=>setTheme(!theme)} className='btn btn-primary'>hello</button>
        <p>hello nj. this is khusbu</p>
        <h1 className='text-5xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, nihil. Nemo delectus sequi, illum deleniti eos voluptas veniam, deserunt nulla blanditiis obcaecati quibusdam totam iste odit voluptates accusamus accusantium architecto, perspiciatis esse! Cumque rerum tempora veritatis laboriosam debitis earum molestiae.</h1>
    </div>
  );
}

export default App;
