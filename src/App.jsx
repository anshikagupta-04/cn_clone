import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import { Intro } from './components/Intro.jsx'
import "@fontsource/mulish";
import Courses from './components/Courses.jsx';
import { Experience } from './components/Experience.jsx';

function App() {

  return (
    <div>
      <Navbar/>
      <Intro/>
      <Courses/>
      <Experience/>
    </div>
  )
}

export default App
