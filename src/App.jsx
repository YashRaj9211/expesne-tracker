import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import dotenv from 'dotenv';
import axios from 'axios'
import { Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
