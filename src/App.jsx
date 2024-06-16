import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Intro } from './components/Intro'
import "@fontsource/mulish";
import Courses from './components/Courses';
import { Experience } from './components/Experience';

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
