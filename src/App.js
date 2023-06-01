
import './App.css';

import { Routes, Route } from "react-router-dom";

import Weather from './Pages/weather/weather';
import News from './Pages/news/news';
import Intro from './Pages/intro/intro';

function App() {

  return (
    <Routes>
      
      <Route 
        path='/'
        element={<Intro />}>
      </Route>

      <Route 
        path='/weather'
        element={<Weather />}>
      </Route> 

      <Route 
        path='/news' 
        index 
        element = {<News />}>
      </Route>

      {/* <Route 
        path='*'
        element={<Page404 />}>
      </Route> */}
    </Routes>

  );
}

export default App;
