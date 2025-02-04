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
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/' element={<SearchForm />} />
          <Route exact path='/' element={<Gallery/>} />
          <Route exact path="/recipe/new" element={<AddRecipe />} />
          <Route exact path='/:id' element={<RecipePage />} />
          <Route exact path='/:id/edit' element={<EditRecipe/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
