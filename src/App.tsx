import './App.css';
import React from 'react'
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import AddRecipe from './Components/AddRecipe';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Gallery from './Components/Gallery';
import RecipePage from './Components/RecipePage';
import SearchForm from './Components/SearchForm'
import EditRecipe from './Components/EditRecipe';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

//sets up all routes 
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/' element={<SearchForm />} />
          <Route path='/' element={<Gallery/>} />
          <Route path="/recipe/new" element={<AddRecipe />} />
          <Route path='/:id' element={<RecipePage />} />
          <Route path='/:id/edit' element={<EditRecipe/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
