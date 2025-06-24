import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Navbar from './Leftsection/Navbar'
import './App.css'
import PracticeHub from './practicehub'
import Login from './login'
import Myworkspace from './Leftsection/Myworkspace';
import SheetLibrary from './Leftsection/SheetLibrary';
function App() {
  const [loginPage, setlogin] = useState(false);
  const [activePage, setActivePage] = useState("home");

  if (loginPage) {
    return (
      <>
        <Navbar onLogin={() => setlogin(true)} setActivePage={setActivePage} activePage={activePage} />
        <Login onBack={() => setlogin(false)} />
      </>
    );
  }

  if (activePage === "workspace") {
    return (
      <>
        <Navbar onLogin={() => setlogin(true)} setActivePage={setActivePage} activePage={activePage} />
        <Myworkspace onBack={() => setActivePage("home")} setActivePage={setActivePage} activePage={activePage} />
      </>
    );
  } 
  if (activePage === "sheetlibrary") {
    return (
      <>
        <Navbar onLogin={() => setlogin(true)} setActivePage={setActivePage} activePage={activePage}/>
        <SheetLibrary  onBack={() => setActivePage("home")} setActivePage={setActivePage} activePage={activePage} />
      </>
    )
  }
  return (
    <>
      <Navbar onLogin={() => setlogin(true)} setActivePage={setActivePage} activePage={activePage}/>
      <PracticeHub setActivePage={setActivePage} activePage={activePage} />
    </>
  );
}

export default App
