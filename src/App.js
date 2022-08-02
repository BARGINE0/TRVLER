import { Route, Router, Routes } from 'react-router';
import './App.css';
import Home from './components/Home/Home';
import Nav from './components/Navbar/Nav'

function App() {
  return (
    <>
         <Nav />
         <Home />
    </>
  );
}

export default App;
