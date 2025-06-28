import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Navbar from './Leftsection/Navbar'
import './App.css'
import PracticeHub from './practicehub'
import Login from './login'
import Myworkspace from './Leftsection/Myworkspace';
import SheetLibrary from './Leftsection/SheetLibrary';
import Footer from './footer';
function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PracticeHub />} />
        <Route path="/login" element={<Login />} />
        <Route path="/workspace" element={<Myworkspace />} />
        <Route path="/sheetlibrary" element={<SheetLibrary />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
