import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import About from './components/pages/About'
import Dashboard from './components/pages/Dashboard'


function App() {
  
  const dashboardData = [
    { name: "Sagar Kashyap", email: "sagarkashyap9155@gmail.com", age: 20 },
    { name: "Rahul Verma", email: "rahul.verma@gmail.com", age: 22 },
    { name: "Priya Sharma", email: "priyasharma@gmail.com", age: 21 },
    { name: "Amit Kumar", email: "amitkumar@gmail.com", age: 23 },
    { name: "Riya Singh", email: "Riyasingh@gmail.com", age: 24 }
  ];

  return (
    <div>
      <Navbar />
      <Routes>
        
        <Route path='/dashboard' element={<Dashboard dashboard={dashboardData} />} />
        <Route path='/about' element={<About />} />
        
      </Routes>
    </div>
  )
}

export default App

