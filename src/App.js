import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import ResumeState from './Context/ResumeState';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';

function App() {
  return (
    <ResumeState>
      <div className="App">
        <Helmet>
          <title>ResumeForge — Build Your Story</title>
          <meta name="description" content="Create stunning, professional resumes in minutes. Beautiful templates, live preview, one-click download." />
          <meta name="keywords" content="resume builder, professional resumes, online resumes, resume templates, CV builder" />
          <meta name="author" content="Your Name" />
          <meta property="og:title" content="ResumeForge — Build Your Story" />
          <meta property="og:description" content="Create stunning, professional resumes in minutes." />
          <meta property="og:url" content="https://your-domain.com/" />
          <meta property="og:type" content="website" />
        </Helmet>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </ResumeState>
  );
}

export default App;
