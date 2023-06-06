
import './App.css';

import { Routes, Route, useLocation } from "react-router-dom";

import Weather from './Pages/weather/weather';
import News from './Pages/news/news';
import Intro from './Pages/intro/intro';
import MoonCalendar from './Pages/MoonCalendar/moonCalendar';
import Page404 from './Pages/404/404';

function App() {

  const location = useLocation();

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
        element = {<News location={location.pathname}/>}>
      </Route>

      <Route 
        path='/moon-calendar' 
        index 
        element = {<MoonCalendar location={location.pathname}/>}>
      </Route>

      <Route 
        path='*'
        element={<Page404 />}>
      </Route>
    </Routes>

  );
}

export default App;
