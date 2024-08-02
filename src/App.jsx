import React from 'react';
import { Routes,Route } from 'react-router-dom';
// bootstrap css import
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// custom css import 
import './App.css';
// components import
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotesTaker from './components/NotesTaker';
import DetailedNotes from './components/DetailedNotes';

const App = () =>{
  return(
    <>  
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<NotesTaker/>}/>
          <Route exact path='/details' element={<DetailedNotes/>}/>
        </Routes>
        <Footer/>
    </>
  );
}
export default App;