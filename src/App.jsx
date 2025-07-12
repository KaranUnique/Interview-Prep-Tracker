import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Navbar from './Leftsection/Navbar'
import './App.css'
import PracticeHub from './practicehub'
import Login from './login'
import Myworkspace from './Leftsection/Myworkspace';
import SheetLibrary from './Leftsection/SheetLibrary';
import Footer from './footer';
import SheetDetail from './pages/SheetDetailsPage';
import SheetList from './pages/SheetList';
import LeaderBoard from './Leftsection/LeaderBoard';
import Compiler from './Leftsection/Compiler';
import AIHelper from './Leftsection/AIHelper';
function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PracticeHub />} />
        <Route path="/login" element={<Login />} />
        <Route path="/workspace" element={<Myworkspace />} />
        <Route path='/LeaderBoard' element={<LeaderBoard/>}/>
        <Route path="/sheetlibrary" element={<SheetLibrary />} />
        <Route path="/sheets" element={<SheetList type="all" />} />
        <Route path="/sheet/:sheetId" element={<SheetDetail />} />
        <Route path='/Compiler' element={<Compiler/>}/>
        <Route path='/ai_asistence' element={< AIHelper/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
