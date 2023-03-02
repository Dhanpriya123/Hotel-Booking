import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


import Home from './Pages/home/Home';
import List from './Pages/List';
import Hotel from './Pages/Hotel';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Pages" element={<List/>}/>
      <Route path="/Pages/:id" element={<Hotel/>}/>

    </Routes> 
    </BrowserRouter>
  )
  }
export default App;
