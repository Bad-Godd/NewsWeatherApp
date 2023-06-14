
import './App.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useLocation } from "react-router-dom";

import { addDate } from './store/reducers/dateSlice';
import { getDate } from "./selectors/dateSelector";

import Weather from './Pages/weather/weather';
import News from './Pages/news/news';
import Intro from './Pages/intro/intro';
import MoonCalendar from './Pages/MoonCalendar/moonCalendar';
import Page404 from './Pages/404/404';
import Pollution from './Pages/Pollution/Pollution';

function App() {

  const location = useLocation();
  const dispatch = useDispatch();
  
  const dateFromStore = useSelector(getDate);
  
  useEffect(() => {
      let data = new Date();
      let date = data.getDate();
      let day = data.getDay();
      let month = data.getMonth();
      dispatch(addDate({date: date, day: day, month: month}));
  }, [dispatch]);

  return (
    <Routes>
      
      <Route 
        path='/'
        index
        element={<Intro />}>
      </Route>

      <Route 
        path='/weather'
        element={<Weather location={location.pathname}/>}>
      </Route> 

      <Route 
        path='/moon-calendar' 
        element = {<MoonCalendar location={location.pathname}/>}>
      </Route>

      <Route 
        path='/news' 
        element = {<News location={location.pathname}/>}>
      </Route> 

      <Route 
        path='/pollution' 
        element = {<Pollution location={location.pathname}/>}>
      </Route>

      <Route 
        path='*'
        element={<Page404 />}>
      </Route>
    </Routes>

  );
}

export default App;
